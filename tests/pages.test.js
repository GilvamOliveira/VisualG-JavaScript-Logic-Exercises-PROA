const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const editorIds = [
  "editor",
  "editor-close",
  "editor-title",
  "summary",
  "groups",
  "code-language",
  "remove",
  "test-console",
  "test-run",
  "test-reset",
  "test-input-row",
  "test-input",
  "test-input-send",
];

const scripts = [
  "data/exercises.js",
  "data/exercise-details.js",
  "data/visualg-matches.js",
  "data/javascript-matches.js",
  "js/visualg-interpreter.js",
  "js/javascript-runner.js",
  "js/exercises.js",
];

for (const page of ["pages/manzano.html", "pages/faccat.html"]) {
  test(`${page} contém os elementos e scripts do editor`, () => {
    const html = read(page);
    for (const id of editorIds) {
      assert.ok(html.includes(`id="${id}"`), `${page} não tem #${id}`);
    }
    for (const script of scripts) {
      assert.ok(html.includes(script), `${page} não carrega ${script}`);
    }
  });
}

test("a página inicial tem os cinco atalhos e carrega o script de navegação", () => {
  const html = read("index.html");
  for (const id of ["one", "two", "three", "four", "five"]) {
    assert.ok(html.includes(`id="${id}"`), `index.html não tem #${id}`);
  }
  assert.ok(html.includes("./js/main.js"));
});

test("o CSS não depende de arquivos remotos", () => {
  const css = read("css/main.css");
  assert.ok(css.includes("./normalize.css"));
  assert.ok(!/https?:\/\/unpkg\.com/.test(css));
  assert.ok(fs.existsSync(path.join(root, "css", "normalize.css")));
});
