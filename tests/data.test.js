const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

globalThis.window = globalThis;
require(path.join(__dirname, "..", "data", "exercises.js"));
require(path.join(__dirname, "..", "data", "exercise-details.js"));
require(path.join(__dirname, "..", "data", "visualg-matches.js"));
require(path.join(__dirname, "..", "data", "javascript-matches.js"));
require(path.join(__dirname, "..", "js", "visualg-interpreter.js"));

const {
  EXERCISE_CATALOG,
  EXERCISE_DETAILS,
  VISUALG_MATCHES,
  JAVASCRIPT_MATCHES,
  VisualG,
} = globalThis;

function catalogIds() {
  return Object.entries(EXERCISE_CATALOG).flatMap(([book, groups]) =>
    groups.flatMap((group) => {
      const numbers =
        typeof group.range[0] === "number"
          ? Array.from(
              { length: group.range[1] - group.range[0] + 1 },
              (_, index) => group.range[0] + index,
            )
          : Array.from(
              { length: group.range[1].charCodeAt(0) - group.range[0].charCodeAt(0) + 1 },
              (_, index) => String.fromCharCode(group.range[0].charCodeAt(0) + index),
            );
      return numbers.map((number) => `${book}-${group.page}-${number}`);
    }),
  );
}

const ids = catalogIds();

test("o catálogo tem 84 exercícios com identificadores únicos", () => {
  assert.equal(ids.length, 84);
  assert.equal(new Set(ids).size, ids.length);
});

test("todos os exercícios têm soluções em VisualG e JavaScript", () => {
  const missingVisualG = ids.filter((id) => !VISUALG_MATCHES[id]?.code);
  const missingJavaScript = ids.filter((id) => !JAVASCRIPT_MATCHES[id]?.code);
  assert.deepEqual(missingVisualG, []);
  assert.deepEqual(missingJavaScript, []);
});

test("todos os detalhes apontam para exercícios existentes", () => {
  const known = new Set(ids);
  const unknown = Object.keys(EXERCISE_DETAILS).filter((id) => !known.has(id));
  assert.deepEqual(unknown, []);
});

test("detalhes têm título e enunciado preenchidos", () => {
  for (const [id, details] of Object.entries(EXERCISE_DETAILS)) {
    assert.ok(details.title && details.title.trim(), `${id} sem título`);
    assert.ok(details.prompt && details.prompt.trim(), `${id} sem enunciado`);
  }
});

test("todas as soluções VisualG compilam", () => {
  for (const [id, match] of Object.entries(VISUALG_MATCHES)) {
    assert.doesNotThrow(() => VisualG.compile(match.code), `${id} não compila`);
  }
});

test("todas as soluções JavaScript são sintaticamente válidas", () => {
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  for (const [id, match] of Object.entries(JAVASCRIPT_MATCHES)) {
    assert.doesNotThrow(
      () => new AsyncFunction(`"use strict";\n${match.code}`),
      `${id} não compila`,
    );
  }
});
