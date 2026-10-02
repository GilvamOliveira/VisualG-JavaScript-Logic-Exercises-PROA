(() => {
  const book = document.body.dataset.book,
    storageKey = `meteoro-exercises-${book}`,
    form = document.querySelector("#editor form"),
    dialog = document.querySelector("#editor");
  const letters = (a, b) =>
    Array.from({ length: b.charCodeAt(0) - a.charCodeAt(0) + 1 }, (_, i) =>
      String.fromCharCode(a.charCodeAt(0) + i),
    );
  const initial = () =>
    EXERCISE_CATALOG[book].flatMap((g) =>
      (typeof g.range[0] === "number"
        ? Array.from(
            { length: g.range[1] - g.range[0] + 1 },
            (_, i) => g.range[0] + i,
          )
        : letters(...g.range)
      ).map((n) => {
        const id = `${book}-${g.page}-${n}`;
        return {
          id,
          page: g.page,
          chapter: g.chapter,
          number: String(n),
          title: "",
          prompt: "",
          code: "",
          javascriptCode: "",
          ...(window.VISUALG_MATCHES[id] || {}),
        };
      }),
    );
  const baseline = initial();
  let exercises =
    JSON.parse(localStorage.getItem(storageKey) || "null") || baseline;
  baseline.forEach((item) => {
    if (!exercises.some((existing) => existing.id === item.id))
      exercises.push(item);
  });
  if (book === "manzano") {
    const chapters = Object.fromEntries(
      baseline.map((item) => [item.page, item.chapter]),
    );
    exercises.forEach((item) => {
      if (chapters[item.page]) item.chapter = chapters[item.page];
    });
  }
  exercises = exercises.map((x) => {
    const match = {
      ...(window.EXERCISE_DETAILS[x.id] || {}),
      ...(window.VISUALG_MATCHES[x.id] || {}),
    };
    const javascriptMatch = window.JAVASCRIPT_MATCHES[x.id];
    return {
      ...x,
      title: x.title || match.title || "",
      prompt: x.prompt || match.prompt || "",
      code: x.code || match.code || "",
      javascriptCode:
        x.javascriptCode || (javascriptMatch && javascriptMatch.code) || "",
      codeLanguage: x.codeLanguage || "visualg",
    };
  });
  const save = () =>
    localStorage.setItem(storageKey, JSON.stringify(exercises));
  const esc = (s) =>
    String(s).replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[c],
    );
  const render = () => {
    const groups = Object.values(
      exercises.reduce((r, x) => {
        const k = `${x.page}|${x.chapter}`;
        (r[k] ||= { page: x.page, chapter: x.chapter, items: [] }).items.push(
          x,
        );
        return r;
      }, {}),
    ).sort((a, b) => parseInt(a.page, 10) - parseInt(b.page, 10));
    document.querySelector("#summary").textContent =
      `${exercises.length} exercícios cadastrados · clique em um cartão para abrir e editar.`;
    document.querySelector("#groups").innerHTML = groups
      .map(
        (g) =>
          `<section class="group"><div class="group-title"><span>Página ${esc(g.page)}</span><h2>${esc(g.chapter)}</h2></div><div class="cards">${g.items.map((x) => `<button class="exercise-card" data-id="${esc(x.id)}"><b>${esc(x.number)}</b><span>${esc(x.title || "Exercício " + x.number)}</span><small>${[x.code && "VisualG", x.javascriptCode && "JavaScript"].filter(Boolean).join(" · ") || "Abrir para adicionar código"}</small></button>`).join("")}</div></section>`,
      )
      .join("");
  };
  let originalCode = "";
  const open = (x) => {
    form.reset();
    Object.entries(
      x || {
        id: "",
        page: "",
        chapter: "",
        number: "",
        title: "",
        prompt: "",
        code: "",
        javascriptCode: "",
        codeLanguage: "visualg",
      },
    ).forEach(([k, v]) => {
      if (form.elements[k]) form.elements[k].value = v;
    });
    document.querySelector("#editor-title").textContent = x
      ? `Exercício ${x.number}`
      : "Novo exercício";
    document.querySelector("#remove").hidden = !x;
    originalCode = {
      visualg: (x && x.code) || "",
      javascript: (x && x.javascriptCode) || "",
    };
    syncCodeFields();
    resetConsole();
    dialog.showModal();
  };

  // --- Testador de código VisualG, direto no navegador ---
  const testConsole = document.querySelector("#test-console");
  const testRunBtn = document.querySelector("#test-run");
  const testResetBtn = document.querySelector("#test-reset");
  const inputRow = document.querySelector("#test-input-row");
  const testInput = document.querySelector("#test-input");
  const testInputSend = document.querySelector("#test-input-send");
  const codeLanguage = document.querySelector("#code-language");
  let javascriptWorker = null;
  let javascriptTimeout = null;
  let javascriptOutputSize = 0;
  let running = false;
  let stopRequested = false;
  let pendingInput = null;

  function resetConsole() {
    if (javascriptWorker) finishJavaScript();
    testConsole.textContent = "";
    inputRow.hidden = true;
    running = false;
    stopRequested = false;
    pendingInput = null;
    testRunBtn.textContent = "▶ Executar";
    testRunBtn.disabled = false;
  }

  function printLine(text, cls) {
    const atBottom =
      testConsole.scrollTop + testConsole.clientHeight >=
      testConsole.scrollHeight - 4;
    if (cls) {
      const span = document.createElement("span");
      span.className = cls;
      span.textContent = text;
      testConsole.appendChild(span);
    } else {
      testConsole.appendChild(document.createTextNode(text));
    }
    if (atBottom) testConsole.scrollTop = testConsole.scrollHeight;
  }

  function askInput(name) {
    return new Promise((resolve) => {
      inputRow.hidden = false;
      testInput.value = "";
      testInput.placeholder = name
        ? `Valor para "${name}" — pressione Enter`
        : "Digite um valor e pressione Enter";
      testInput.focus();
      pendingInput = (value) => {
        inputRow.hidden = true;
        printLine(value + "\n", "test-echo");
        resolve(value);
      };
    });
  }

  const submitInput = () => {
    if (!pendingInput) return;
    const value = testInput.value;
    const send = pendingInput;
    pendingInput = null;
    send(value);
  };
  testInputSend.addEventListener("click", submitInput);
  testInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitInput();
    }
  });

  testResetBtn.addEventListener("click", () => {
    form.elements.code.value = originalCode.visualg;
    form.elements.javascriptCode.value = originalCode.javascript;
    resetConsole();
  });

  function syncCodeFields() {
    document.querySelectorAll(".code-field").forEach((field) => {
      field.hidden = field.dataset.language !== codeLanguage.value;
    });
  }
  codeLanguage.addEventListener("change", syncCodeFields);

  function finishJavaScript(message, cls) {
    if (!javascriptWorker) return;
    clearTimeout(javascriptTimeout);
    javascriptTimeout = null;
    javascriptWorker.terminate();
    javascriptWorker = null;
    pendingInput = null;
    inputRow.hidden = true;
    if (message) printLine(message, cls);
    running = false;
    testRunBtn.textContent = "▶ Executar";
    testResetBtn.disabled = false;
  }

  function runJavaScript() {
    const source = form.elements.javascriptCode.value;
    if (!source.trim()) {
      printLine("Não há código JavaScript para executar.\n", "test-error");
      return;
    }
    javascriptOutputSize = 0;
    try {
      javascriptWorker = window.JavaScriptRunner.create(source);
    } catch (error) {
      printLine(`Não foi possível iniciar o ambiente JavaScript: ${error.message}\n`, "test-error");
      return;
    }
    running = true;
    testRunBtn.textContent = "■ Parar";
    testResetBtn.disabled = true;
    javascriptWorker.onmessage = ({ data }) => {
      if (!javascriptWorker) return;
      if (data.type === "output") {
        javascriptOutputSize += data.text.length;
        if (javascriptOutputSize > 100000) {
          finishJavaScript("\nExecução encerrada: limite de saída atingido.\n", "test-error");
          return;
        }
        printLine(data.text);
      } else if (data.type === "input") {
        const question = String(data.question || "");
        javascriptOutputSize += question.length;
        if (javascriptOutputSize > 100000) {
          finishJavaScript("\nExecução encerrada: limite de saída atingido.\n", "test-error");
          return;
        }
        if (question) printLine(question);
        inputRow.hidden = false;
        testInput.value = "";
        testInput.placeholder = question || "Digite um valor e pressione Enter";
        testInput.focus();
        pendingInput = (value) => {
          inputRow.hidden = true;
          printLine(value + "\n", "test-echo");
          javascriptWorker.postMessage({ type: "input", value });
        };
      } else if (data.type === "done") {
        finishJavaScript("\n[fim da execução]", "test-echo");
      } else if (data.type === "error") {
        finishJavaScript(`\n${data.message}\n`, "test-error");
      }
    };
    javascriptWorker.onerror = (event) => {
      event.preventDefault();
      finishJavaScript(`\n${event.message || "Erro ao executar o JavaScript."}\n`, "test-error");
    };
    javascriptTimeout = setTimeout(() => {
      finishJavaScript("\nExecução encerrada após 10 segundos.\n", "test-error");
    }, 10000);
  }

  testRunBtn.addEventListener("click", async () => {
    if (running) {
      if (javascriptWorker) {
        finishJavaScript("\n[execução interrompida]", "test-echo");
      } else {
        stopRequested = true;
      }
      return;
    }
    testConsole.textContent = "";
    inputRow.hidden = true;
    if (codeLanguage.value === "javascript") {
      runJavaScript();
      return;
    }
    running = true;
    testRunBtn.textContent = "■ Parar";
    testResetBtn.disabled = true;
    const io = {
      write: (t) => printLine(t),
      writeln: (t) => printLine(t + "\n"),
      read: (name) => askInput(name),
      shouldStop: () => stopRequested,
    };
    try {
      const ast = window.VisualG.compile(form.elements.code.value);
      const interp = new window.VisualG.Interpreter(io);
      await interp.run(ast);
      printLine("\n[fim da execução]", "test-echo");
    } catch (err) {
      inputRow.hidden = true;
      printLine(
        "\n" + (err && err.message ? err.message : "Erro ao executar o código.") + "\n",
        "test-error",
      );
    } finally {
      running = false;
      stopRequested = false;
      pendingInput = null;
      testRunBtn.textContent = "▶ Executar";
      testResetBtn.disabled = false;
    }
  });
  document.querySelector("#groups").addEventListener("click", (e) => {
    const card = e.target.closest(".exercise-card");
    if (card) open(exercises.find((x) => x.id === card.dataset.id));
  });
  document.querySelector(".add").addEventListener("click", () => open());
  dialog.addEventListener("close", () => {
    if (javascriptWorker) finishJavaScript();
  });
  form.addEventListener("submit", (e) => {
    if (e.submitter.value !== "save") return;
    e.preventDefault();
    const x = Object.fromEntries(new FormData(form));
    if (!x.id) x.id = `${book}-${Date.now()}`;
    const i = exercises.findIndex((y) => y.id === x.id);
    if (i < 0) exercises.push(x);
    else exercises[i] = x;
    save();
    render();
    dialog.close();
  });
  document.querySelector("#remove").addEventListener("click", () => {
    const id = form.elements.id.value;
    if (id && confirm("Excluir este exercício?")) {
      exercises = exercises.filter((x) => x.id !== id);
      save();
      render();
      dialog.close();
    }
  });
  render();
})();
