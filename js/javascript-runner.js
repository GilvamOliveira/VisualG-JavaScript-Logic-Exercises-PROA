(function (global) {
  "use strict";

  /*
   * O código do exercício nunca é interpolado neste texto: ele é enviado à
   * worker por postMessage e compilado lá. Assim, crases, `${...}` e qualquer
   * outro trecho do código do usuário não conseguem quebrar o worker.
   */
  const workerSource = `
    "use strict";

    let resolveInput = null;
    let running = false;

    function readLine(question = "") {
      return new Promise((resolve) => {
        resolveInput = resolve;
        self.postMessage({ type: "input", question: String(question) });
      });
    }

    function write(...values) {
      self.postMessage({ type: "output", text: values.map(String).join(" ") });
    }

    function writeln(...values) {
      self.postMessage({ type: "output", text: values.map(String).join(" ") + "\\n" });
    }

    const console = {
      log: (...values) => writeln(...values),
      info: (...values) => writeln(...values),
      warn: (...values) => writeln(...values),
      error: (...values) => writeln(...values),
    };

    async function run(source) {
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      try {
        const exercise = new AsyncFunction('"use strict";\\n' + source);
        await exercise();
        self.postMessage({ type: "done" });
      } catch (error) {
        self.postMessage({
          type: "error",
          message: error && error.message ? error.message : String(error),
        });
      }
    }

    self.onmessage = (event) => {
      const data = event.data || {};
      if (data.type === "input") {
        if (!resolveInput) return;
        const resolve = resolveInput;
        resolveInput = null;
        resolve(String(data.value));
        return;
      }
      if (data.type === "start" && !running) {
        running = true;
        run(String(data.source || "")).finally(() => {
          running = false;
        });
      }
    };
  `;

  function create(source) {
    const blob = new Blob([workerSource], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    let worker;
    try {
      worker = new Worker(url);
    } finally {
      URL.revokeObjectURL(url);
    }
    worker.postMessage({ type: "start", source: String(source) });
    return worker;
  }

  global.JavaScriptRunner = { create, workerSource };
})(window);
