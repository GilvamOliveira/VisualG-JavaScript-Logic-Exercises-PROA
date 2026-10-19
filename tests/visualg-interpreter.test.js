const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

require(path.join(__dirname, "..", "js", "visualg-interpreter.js"));
const { VisualG } = globalThis;

async function run(source, inputs = []) {
  const output = [];
  let nextInput = 0;
  const io = {
    write: (text) => output.push(text),
    writeln: (text) => output.push(`${text}\n`),
    read: async () => {
      if (nextInput >= inputs.length)
        throw new Error("Entrada insuficiente para o teste.");
      return inputs[nextInput++];
    },
    shouldStop: () => false,
  };
  const ast = VisualG.compile(source);
  const interpreter = new VisualG.Interpreter(io, { maxSteps: 50000 });
  await interpreter.run(ast);
  return output.join("");
}

const program = (body, declarations = "", name = "teste") => `
algoritmo "${name}"
${declarations ? `var\n${declarations}` : ""}
inicio
${body}
fimalgoritmo
`;

test("respeita a precedência dos operadores", async () => {
  const output = await run(
    program("  escreval(2 + 3 * 4)\n  escreval((2 + 3) * 4)"),
  );
  assert.equal(output, "14\n20\n");
});

test("lê números com vírgula e converte para decimal", async () => {
  const output = await run(
    program("  leia(n)\n  escreval(n * 2)", "n: real"),
    ["1,5"],
  );
  assert.equal(output, "3\n");
});

test("não diferencia maiúsculas de minúsculas em identificadores", async () => {
  const output = await run(
    program("  total <- 2\n  escreval(TOTAL)", "Total: inteiro"),
  );
  assert.equal(output, "2\n");
});

test("executa seleção com senao", async () => {
  const output = await run(
    program(
      "  leia(n)\n  se n >= 0 entao\n    escreval(\"positivo\")\n  senao\n    escreval(\"negativo\")\n  fimse",
      "n: inteiro",
    ),
    ["-2"],
  );
  assert.equal(output, "negativo\n");
});

test("executa enquanto com interrompa", async () => {
  const output = await run(
    program(
      [
        "  i <- 0",
        "  enquanto verdadeiro faca",
        "    i <- i + 1",
        "    se i = 3 entao",
        "      interrompa",
        "    fimse",
        "  fimenquanto",
        "  escreval(i)",
      ].join("\n"),
      "i: inteiro",
    ),
  );
  assert.equal(output, "3\n");
});

test("executa para crescente e decrescente", async () => {
  const ascending = await run(
    program(
      [
        "  s <- 0",
        "  para i de 1 ate 4 faca",
        "    s <- s + i",
        "  fimpara",
        "  escreval(s)",
      ].join("\n"),
      "i, s: inteiro",
    ),
  );
  const descending = await run(
    program(
      [
        "  para i de 3 ate 1 passo -1 faca",
        "    escreva(i)",
        "  fimpara",
      ].join("\n"),
      "i: inteiro",
    ),
  );
  assert.equal(ascending, "10\n");
  assert.equal(descending, "321");
});

test("executa repita ... ate", async () => {
  const output = await run(
    program(
      [
        "  i <- 0",
        "  repita",
        "    i <- i + 1",
        "  ate i >= 3",
        "  escreval(i)",
      ].join("\n"),
      "i: inteiro",
    ),
  );
  assert.equal(output, "3\n");
});

test("formata números à direita e textos à esquerda", async () => {
  const output = await run(program("  escreval(7:5)\n  escreval(\"ab\":5)"));
  assert.equal(output, "    7\nab   \n");
});

test("rejeita interrompa fora de um laço", async () => {
  await assert.rejects(
    () => run(program("  interrompa")),
    /interrompa usado fora de um laço/,
  );
});

test("rejeita divisão por zero", async () => {
  await assert.rejects(
    () => run(program("  x <- 1 / 0\n  escreval(x)", "x: real")),
    /divisão por zero/,
  );
});

test("informa a linha de um erro de sintaxe", async () => {
  await assert.rejects(
    () => run(program("  escreval(1)\n  escreval(2")),
    /Linha \d+:/,
  );
});
