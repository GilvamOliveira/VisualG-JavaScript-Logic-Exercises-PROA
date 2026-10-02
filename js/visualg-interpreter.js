/*
 * Interpretador de VisualG para os exercícios do projeto.
 * Suporta declarações, entrada e saída, atribuição, seleções, laços,
 * operações aritméticas e lógicas, comparações e funções matemáticas básicas.
 */
(function (global) {
  "use strict";

  class VisualGError extends Error {
    constructor(message, line) {
      super(line ? `Linha ${line}: ${message}` : message);
      this.line = line;
    }
  }

  const KEYWORDS = new Set([
    "algoritmo", "var", "inicio", "fimalgoritmo",
    "inteiro", "real", "caractere", "caracter", "cadeia", "logico", "vetor",
    "leia", "escreva", "escreval",
    "se", "entao", "senao", "fimse",
    "enquanto", "faca", "fimenquanto",
    "para", "de", "ate", "passo", "fimpara",
    "repita",
    "e", "ou", "xou", "nao", "div", "mod",
    "verdadeiro", "falso",
    "interrompa",
  ]);

  // ---------- Tokenizer ----------
  function tokenize(source) {
    const tokens = [];
    let i = 0;
    let line = 1;
    const n = source.length;
    while (i < n) {
      const c = source[i];
      if (c === "\n") { line++; i++; continue; }
      if (c === " " || c === "\t" || c === "\r") { i++; continue; }
      if (c === "/" && source[i + 1] === "/") {
        while (i < n && source[i] !== "\n") i++;
        continue;
      }
      if (c === '"' || c === "'") {
        const quote = c;
        let j = i + 1, str = "";
        while (j < n && source[j] !== quote) {
          if (source[j] === "\\" && (source[j + 1] === quote || source[j + 1] === "\\")) {
            str += source[j + 1];
            j += 2;
            continue;
          }
          if (source[j] === "\n") line++;
          str += source[j];
          j++;
        }
        tokens.push({ type: "string", value: str, line });
        i = j + 1;
        continue;
      }
      if (/[0-9]/.test(c)) {
        let j = i, hasDot = false;
        while (j < n && (/[0-9]/.test(source[j]) || (source[j] === "." && !hasDot && /[0-9]/.test(source[j + 1] || "")))) {
          if (source[j] === ".") hasDot = true;
          j++;
        }
        tokens.push({ type: "number", value: parseFloat(source.slice(i, j)), line });
        i = j;
        continue;
      }
      if (/[A-Za-zÀ-ÿ_]/.test(c)) {
        let j = i;
        while (j < n && /[A-Za-zÀ-ÿ0-9_]/.test(source[j])) j++;
        const word = source.slice(i, j);
        const lower = word.toLowerCase();
        if (KEYWORDS.has(lower)) tokens.push({ type: "keyword", value: lower, line });
        else tokens.push({ type: "ident", value: word, line });
        i = j;
        continue;
      }
      if (c === "<" && source[i + 1] === "-") { tokens.push({ type: "op", value: "<-", line }); i += 2; continue; }
      if (c === "<" && source[i + 1] === ">") { tokens.push({ type: "op", value: "<>", line }); i += 2; continue; }
      if (c === "<" && source[i + 1] === "=") { tokens.push({ type: "op", value: "<=", line }); i += 2; continue; }
      if (c === ">" && source[i + 1] === "=") { tokens.push({ type: "op", value: ">=", line }); i += 2; continue; }
      if ("+-*/^()=<>,:;".includes(c)) { tokens.push({ type: "op", value: c, line }); i++; continue; }
      // caractere desconhecido: ignora
      i++;
    }
    tokens.push({ type: "eof", value: null, line });
    return tokens;
  }

  // ---------- Parser ----------
  class Parser {
    constructor(tokens) {
      this.tokens = tokens;
      this.pos = 0;
    }
    peek(offset = 0) { return this.tokens[this.pos + offset]; }
    next() { return this.tokens[this.pos++]; }
    at(type, value) {
      const t = this.peek();
      return t.type === type && (value === undefined || t.value === value);
    }
    atKw(value) { return this.at("keyword", value); }
    atOp(value) { return this.at("op", value); }
    expectKw(value) {
      if (!this.atKw(value)) this.err(`esperado "${value}"`);
      return this.next();
    }
    expectOp(value) {
      if (!this.atOp(value)) this.err(`esperado "${value}"`);
      return this.next();
    }
    expectIdent() {
      if (!this.at("ident")) this.err("esperado um identificador (nome de variável)");
      return this.next();
    }
    err(msg) {
      const t = this.peek();
      const found = t.type === "eof" ? "fim do código" : JSON.stringify(t.value);
      throw new VisualGError(`${msg}, encontrado ${found}`, t.line);
    }

    parseProgram() {
      this.expectKw("algoritmo");
      if (this.at("string")) this.next();
      let decls = [];
      if (this.atKw("var")) {
        this.next();
        decls = this.parseDecls();
      }
      this.expectKw("inicio");
      const body = this.parseBlock(new Set(["fimalgoritmo"]));
      this.expectKw("fimalgoritmo");
      return { type: "Program", decls, body };
    }

    parseDecls() {
      const decls = [];
      while (this.at("ident")) {
        const names = [this.next().value];
        while (this.atOp(",")) { this.next(); names.push(this.expectIdent().value); }
        this.expectOp(":");
        let varType = "vetor";
        if (this.atKw("vetor")) {
          this.next();
          // pula especificação de intervalo/tamanho do vetor, ex: [1..10] de inteiro (não suportado plenamente)
          while (!this.atKw("de") && !this.at("ident") && !this.at("eof")) this.next();
          if (this.atKw("de")) this.next();
        }
        if (this.at("keyword")) varType = this.next().value; else this.expectIdent();
        decls.push({ names, varType });
      }
      return decls;
    }

    parseBlock(stopKeywords) {
      const stmts = [];
      while (!(this.at("keyword") && stopKeywords.has(this.peek().value)) && !this.at("eof")) {
        stmts.push(this.parseStmt());
      }
      return stmts;
    }

    parseStmt() {
      const t = this.peek();
      if (t.type === "keyword") {
        switch (t.value) {
          case "leia": return this.parseLeia();
          case "escreva": return this.parseEscreva(false);
          case "escreval": return this.parseEscreva(true);
          case "se": return this.parseSe();
          case "enquanto": return this.parseEnquanto();
          case "para": return this.parsePara();
          case "repita": return this.parseRepita();
          case "interrompa": this.next(); return { type: "Interrompa", line: t.line };
          default: this.err(`comando inesperado "${t.value}"`);
        }
      }
      if (t.type === "ident") return this.parseAtribuicao();
      this.err("esperado um comando");
    }

    parseLeia() {
      const line = this.next().line;
      this.expectOp("(");
      const names = [this.expectIdent().value];
      while (this.atOp(",")) { this.next(); names.push(this.expectIdent().value); }
      this.expectOp(")");
      return { type: "Leia", names, line };
    }

    parseEscreva(newline) {
      const line = this.next().line;
      this.expectOp("(");
      const args = [];
      if (!this.atOp(")")) {
        args.push(this.parseArgWithFormat());
        while (this.atOp(",")) { this.next(); args.push(this.parseArgWithFormat()); }
      }
      this.expectOp(")");
      return { type: "Escreva", args, newline, line };
    }

    parseArgWithFormat() {
      const expr = this.parseExpr();
      let width = null, decimals = null;
      if (this.atOp(":")) {
        this.next();
        width = this.parseExpr();
        if (this.atOp(":")) { this.next(); decimals = this.parseExpr(); }
      }
      return { expr, width, decimals };
    }

    parseAtribuicao() {
      const name = this.next();
      let index = null;
      if (this.atOp("[")) { /* vetor: não suportado totalmente, mas evita travar */ }
      this.expectOp("<-");
      const expr = this.parseExpr();
      return { type: "Atribuicao", name: name.value, expr, line: name.line };
    }

    parseSe() {
      const line = this.next().line;
      const cond = this.parseExpr();
      this.expectKw("entao");
      const thenBlock = this.parseBlock(new Set(["senao", "fimse"]));
      let elseBlock = [];
      if (this.atKw("senao")) { this.next(); elseBlock = this.parseBlock(new Set(["fimse"])); }
      this.expectKw("fimse");
      return { type: "Se", cond, thenBlock, elseBlock, line };
    }

    parseEnquanto() {
      const line = this.next().line;
      const cond = this.parseExpr();
      this.expectKw("faca");
      const body = this.parseBlock(new Set(["fimenquanto"]));
      this.expectKw("fimenquanto");
      return { type: "Enquanto", cond, body, line };
    }

    parsePara() {
      const line = this.next().line;
      const varName = this.expectIdent().value;
      this.expectKw("de");
      const from = this.parseExpr();
      this.expectKw("ate");
      const to = this.parseExpr();
      let step = null;
      if (this.atKw("passo")) { this.next(); step = this.parseExpr(); }
      this.expectKw("faca");
      const body = this.parseBlock(new Set(["fimpara"]));
      this.expectKw("fimpara");
      return { type: "Para", varName, from, to, step, body, line };
    }

    parseRepita() {
      const line = this.next().line;
      const body = this.parseBlock(new Set(["ate"]));
      this.expectKw("ate");
      const cond = this.parseExpr();
      return { type: "Repita", body, cond, line };
    }

    // Expressões
    parseExpr() { return this.parseOr(); }
    parseOr() {
      let left = this.parseAnd();
      while (this.atKw("ou") || this.atKw("xou")) {
        const op = this.next();
        left = { type: "Logico", op: op.value, left, right: this.parseAnd(), line: op.line };
      }
      return left;
    }
    parseAnd() {
      let left = this.parseNot();
      while (this.atKw("e")) { const line = this.next().line; left = { type: "Logico", op: "e", left, right: this.parseNot(), line }; }
      return left;
    }
    parseNot() {
      if (this.atKw("nao")) { const line = this.next().line; return { type: "Nao", expr: this.parseNot(), line }; }
      return this.parseRel();
    }
    parseRel() {
      let left = this.parseAdd();
      if (this.atOp("=") || this.atOp("<>") || this.atOp(">") || this.atOp("<") || this.atOp(">=") || this.atOp("<=")) {
        const op = this.next(); const right = this.parseAdd();
        return { type: "Rel", op: op.value, left, right, line: op.line };
      }
      return left;
    }
    parseAdd() {
      let left = this.parseMul();
      while (this.atOp("+") || this.atOp("-")) { const op = this.next(); left = { type: "Bin", op: op.value, left, right: this.parseMul(), line: op.line }; }
      return left;
    }
    parseMul() {
      let left = this.parseUnary();
      while (this.atOp("*") || this.atOp("/") || this.atKw("div") || this.atKw("mod")) {
        const op = this.next(); left = { type: "Bin", op: op.value, left, right: this.parseUnary(), line: op.line };
      }
      return left;
    }
    parseUnary() {
      if (this.atOp("-") || this.atOp("+")) { const op = this.next(); return { type: "Unary", op: op.value, expr: this.parseUnary(), line: op.line }; }
      return this.parsePow();
    }
    parsePow() {
      const base = this.parsePrimary();
      if (this.atOp("^")) { const op = this.next(); return { type: "Bin", op: "^", left: base, right: this.parseUnary(), line: op.line }; }
      return base;
    }
    parsePrimary() {
      const t = this.peek();
      if (t.type === "number") { this.next(); return { type: "Num", value: t.value, line: t.line }; }
      if (t.type === "string") { this.next(); return { type: "Str", value: t.value, line: t.line }; }
      if (this.atKw("verdadeiro")) { this.next(); return { type: "Bool", value: true, line: t.line }; }
      if (this.atKw("falso")) { this.next(); return { type: "Bool", value: false, line: t.line }; }
      if (this.atOp("(")) { this.next(); const e = this.parseExpr(); this.expectOp(")"); return e; }
      if (t.type === "ident") {
        this.next();
        if (this.atOp("(")) {
          this.next();
          const args = [];
          if (!this.atOp(")")) { args.push(this.parseExpr()); while (this.atOp(",")) { this.next(); args.push(this.parseExpr()); } }
          this.expectOp(")");
          return { type: "Call", name: t.value, args, line: t.line };
        }
        return { type: "Var", name: t.value, line: t.line };
      }
      this.err("esperado um valor ou variável");
    }
  }

  // ---------- Interpretador ----------
  const FUNCS = {
    abs: (x) => Math.abs(x),
    raizq: (x) => Math.sqrt(x),
    raiz: (x) => Math.sqrt(x),
    quad: (x) => x * x,
    trunc: (x) => Math.trunc(x),
    int: (x) => Math.trunc(x),
    arredonda: (x) => Math.round(x),
    exp: (x, y) => Math.pow(x, y),
  };
  const CONSTS = { pi: Math.PI };

  class Interpreter {
    constructor(io, opts = {}) {
      this.io = io; // { write(text), writeln(text), read(name) -> Promise<string>, shouldStop() -> bool }
      this.vars = Object.create(null);
      this.maxSteps = opts.maxSteps || 2000000;
      this.steps = 0;
    }
    async tick(line) {
      this.steps++;
      if (this.steps % 3000 === 0) await new Promise((r) => setTimeout(r, 0));
      if (this.io.shouldStop && this.io.shouldStop()) throw new VisualGError("Execução interrompida pelo usuário.", line);
      if (this.steps > this.maxSteps) throw new VisualGError("Execução interrompida: limite de operações atingido (possível laço infinito).", line);
    }
    async run(ast) {
      for (const d of ast.decls) for (const nm of d.names) this.vars[nm] = d.varType === "caractere" || d.varType === "cadeia" || d.varType === "caracter" ? "" : 0;
      await this.execBlock(ast.body);
    }
    async execBlock(stmts) {
      for (const s of stmts) await this.exec(s);
    }
    async exec(s) {
      await this.tick(s.line);
      switch (s.type) {
        case "Leia": {
          for (const name of s.names) {
            const raw = await this.io.read(name);
            this.vars[name] = coerceInput(raw);
          }
          return;
        }
        case "Escreva": {
          const text = s.args.map((a) => this.formatArg(a)).join("");
          if (s.newline) this.io.writeln(text); else this.io.write(text);
          return;
        }
        case "Atribuicao": {
          this.vars[s.name] = this.evalExpr(s.expr);
          return;
        }
        case "Se": {
          if (truthy(this.evalExpr(s.cond))) await this.execBlock(s.thenBlock);
          else await this.execBlock(s.elseBlock);
          return;
        }
        case "Enquanto": {
          while (truthy(this.evalExpr(s.cond))) { await this.tick(s.line); await this.execBlock(s.body); }
          return;
        }
        case "Para": {
          const step = s.step ? this.evalExpr(s.step) : 1;
          let i = this.evalExpr(s.from);
          const to = this.evalExpr(s.to);
          this.vars[s.varName] = i;
          if (step >= 0) {
            for (; this.vars[s.varName] <= to; this.vars[s.varName] += step) { await this.tick(s.line); await this.execBlock(s.body); }
          } else {
            for (; this.vars[s.varName] >= to; this.vars[s.varName] += step) { await this.tick(s.line); await this.execBlock(s.body); }
          }
          return;
        }
        case "Repita": {
          do { await this.tick(s.line); await this.execBlock(s.body); } while (!truthy(this.evalExpr(s.cond)));
          return;
        }
        case "Interrompa": throw { __break: true };
        default: throw new VisualGError(`comando não suportado: ${s.type}`, s.line);
      }
    }
    formatArg(a) {
      const v = this.evalExpr(a.expr);
      if (a.width == null) return toDisplay(v);
      const width = Math.trunc(this.evalExpr(a.width));
      let text;
      if (a.decimals != null && typeof v === "number") {
        const decimals = Math.trunc(this.evalExpr(a.decimals));
        text = v.toFixed(decimals);
      } else {
        text = toDisplay(v);
      }
      while (text.length < width) text = " " + text;
      return text;
    }
    evalExpr(e) {
      switch (e.type) {
        case "Num": return e.value;
        case "Str": return e.value;
        case "Bool": return e.value;
        case "Var": {
          if (e.name.toLowerCase() in CONSTS && !(e.name in this.vars)) return CONSTS[e.name.toLowerCase()];
          if (!(e.name in this.vars)) throw new VisualGError(`variável "${e.name}" usada antes de ser definida`, e.line);
          return this.vars[e.name];
        }
        case "Call": {
          const fn = FUNCS[e.name.toLowerCase()];
          if (!fn) throw new VisualGError(`função "${e.name}" não é suportada por este testador`, e.line);
          return fn(...e.args.map((a) => this.evalExpr(a)));
        }
        case "Unary": {
          const v = this.evalExpr(e.expr);
          return e.op === "-" ? -v : +v;
        }
        case "Nao": return !truthy(this.evalExpr(e.expr));
        case "Logico": {
          const l = truthy(this.evalExpr(e.left));
          if (e.op === "e") return l && truthy(this.evalExpr(e.right));
          const r = truthy(this.evalExpr(e.right));
          if (e.op === "xou") return l !== r;
          return l || r;
        }
        case "Rel": {
          const l = this.evalExpr(e.left), r = this.evalExpr(e.right);
          switch (e.op) {
            case "=": return l === r;
            case "<>": return l !== r;
            case ">": return l > r;
            case "<": return l < r;
            case ">=": return l >= r;
            case "<=": return l <= r;
          }
          break;
        }
        case "Bin": {
          const l = this.evalExpr(e.left), r = this.evalExpr(e.right);
          if (e.op === "+" && (typeof l === "string" || typeof r === "string")) return toDisplay(l) + toDisplay(r);
          switch (e.op) {
            case "+": return l + r;
            case "-": return l - r;
            case "*": return l * r;
            case "/": return l / r;
            case "div": return Math.trunc(l / r);
            case "mod": return l % r;
            case "^": return Math.pow(l, r);
          }
          break;
        }
      }
      throw new VisualGError(`expressão não suportada: ${e.type}`, e.line);
    }
  }

  function truthy(v) { return v === true || v === "verdadeiro" || (typeof v === "number" && v !== 0); }
  function coerceInput(raw) {
    const s = String(raw).trim();
    if (s === "") return 0;
    const normalized = s.replace(",", ".");
    if (/^-?\d+(\.\d+)?$/.test(normalized)) return parseFloat(normalized);
    if (s.toLowerCase() === "verdadeiro") return true;
    if (s.toLowerCase() === "falso") return false;
    return s;
  }
  function toDisplay(v) {
    if (typeof v === "boolean") return v ? "VERDADEIRO" : "FALSO";
    if (typeof v === "number") {
      if (Number.isInteger(v)) return String(v);
      return String(Math.round(v * 1e6) / 1e6);
    }
    return String(v);
  }

  function compile(source) {
    const tokens = tokenize(source);
    const parser = new Parser(tokens);
    return parser.parseProgram();
  }

  global.VisualG = { compile, Interpreter, VisualGError };
})(typeof window !== "undefined" ? window : globalThis);
