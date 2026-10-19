const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const vm = require("node:vm");

globalThis.window = globalThis;
require(path.join(__dirname, "..", "js", "javascript-runner.js"));

const { workerSource } = globalThis.JavaScriptRunner;

function createWorkerContext() {
  const messages = [];
  const context = {
    postMessage: (message) => messages.push(message),
  };
  context.self = context;
  vm.createContext(context);
  vm.runInContext(workerSource, context);
  return { context, messages };
}

async function waitFor(check, message) {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (check()) return;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw new Error(message);
}

test("executa código com crases e interpolação sem quebrar a worker", async () => {
  const { context, messages } = createWorkerContext();
  context.onmessage({
    data: {
      type: "start",
      source: [
        "const nome = `mundo`;",
        "writeln(`olá ${nome}`);",
        "const resposta = await readLine(\"idade?\");",
        "writeln(`idade: ${resposta}`);",
      ].join("\n"),
    },
  });

  await waitFor(
    () => messages.some((message) => message.type === "input"),
    "a worker não pediu entrada",
  );
  assert.deepEqual({ ...messages[0] }, { type: "output", text: "olá mundo\n" });

  context.onmessage({ data: { type: "input", value: "20" } });

  await waitFor(
    () => messages.some((message) => message.type === "done"),
    "a worker não terminou",
  );
  assert.deepEqual({ ...messages[1] }, { type: "input", question: "idade?" });
  assert.deepEqual({ ...messages[2] }, { type: "output", text: "idade: 20\n" });
  assert.deepEqual({ ...messages[3] }, { type: "done" });
});

test("envia erros de execução para a página", async () => {
  const { context, messages } = createWorkerContext();
  context.onmessage({
    data: { type: "start", source: "throw new Error('falhou');" },
  });

  await waitFor(
    () => messages.some((message) => message.type === "error"),
    "a worker não reportou o erro",
  );
  assert.equal(messages[0].type, "error");
  assert.match(messages[0].message, /falhou/);
});
