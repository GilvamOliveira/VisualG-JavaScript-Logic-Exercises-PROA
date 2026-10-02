(function (global) {
  "use strict";

  function create(source) {
    const workerSource = `
      "use strict";
      let resolveInput = null;

      self.onmessage = (event) => {
        if (event.data && event.data.type === "input" && resolveInput) {
          const resolve = resolveInput;
          resolveInput = null;
          resolve(event.data.value);
        }
      };

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

      async function runExercise() {
        ${source}
      }

      runExercise()
        .then(() => self.postMessage({ type: "done" }))
        .catch((error) => self.postMessage({
          type: "error",
          message: error && error.message ? error.message : String(error),
        }));
    `;
    const blob = new Blob([workerSource], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    try {
      return new Worker(url);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  global.JavaScriptRunner = { create };
})(window);
