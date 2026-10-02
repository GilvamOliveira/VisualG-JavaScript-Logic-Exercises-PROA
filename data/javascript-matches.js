window.JAVASCRIPT_MATCHES = {
  "manzano-25-A": {
    code: `writeln("   --- Conversor Celsius (°C) para Fahrenheit (°F) ---   ");

let C = parseFloat(await readLine("Digite a temperatura em graus Celsius (°C): "));
let F = (9 * C + 160) / 5;

writeln("A conversão da temperatura Celsius em Fahrenheit é: " + F + "°F");
`,
  },
  "manzano-25-B": {
    code: `writeln("   --- Conversor Fahrenheit (°F) para Celsius (°C) ---   ");

let F = parseFloat(await readLine("Digite a temperatura em graus Fahrenheit (°F): "));
let C = (F - 32) * (5 / 9);

writeln(
  "A conversão da temperatura Fahrenheit em Celsius é: " + C.toFixed(2) + "°C",
);
`,
  },
  "manzano-25-C": {
    code: `writeln("   --- Volume Lata de Óleo ---   ");

let altura = parseFloat(await readLine("Informe a altura: "));
let raio = parseFloat(await readLine("Informe o raio: "));

let volume = Math.PI * Math.pow(raio, 2) * altura;

writeln("O volume da lata de óleo é: " + volume.toFixed(2));
`,
  },
  "manzano-25-D": {
    code: `writeln("   --- Consumo de Combustível ---   ");

let tempoHoras = parseInt(
  await readLine("Informe apenas o tempo gasto em horas (Ex: 2): "),
);
let tempoMinutos = parseInt(
  await readLine("Informe apenas o tempo gasto em minutos (Ex: 40): "),
);
let velocidade = parseFloat(await readLine("Digite a velocidade média (Km/h): "));
let consumoKmPorLitro = parseFloat(
  await readLine("Digite o consumo do carro (Km/L): "),
);

if (
  isNaN(tempoHoras) ||
  isNaN(tempoMinutos) ||
  isNaN(velocidade) ||
  (tempoHoras === 0 && tempoMinutos === 0) ||
  velocidade <= 0
) {
  writeln("Valores informados incorretamente! Tente novamente!");
} else {
  let tempoTotalHoras = tempoHoras + tempoMinutos / 60;

  let distancia = tempoTotalHoras * velocidade;
  let litrosUsados = distancia / consumoKmPorLitro;

  writeln(
    \`A velocidade média foi de: \${velocidade} Km/h\\n\` +
      \`O tempo percorrido foi de: \${tempoHoras}h \${tempoMinutos}min (\${tempoTotalHoras.toFixed(2)}h)\\n\` +
      \`A distância percorrida foi de: \${distancia.toFixed(2)} Km\\n\` +
      \`A quantidades de litros utilizados no percurso foi de: \${litrosUsados.toFixed(2)} L\`,
  );
}
`,
  },
  "manzano-25-E": {
    code: `writeln("   --- Prestação em Atraso ---   ");

let valor = Number(await readLine("Digite o valor da prestação: R$"));
let taxa = Number(await readLine("Digite a taxa da prestação (%): "));
let tempo = Number(await readLine("Digite o tempo de atraso (em meses): "));

let prestacao = valor + ((valor * taxa) / 100) * tempo;
let diferenca = prestacao - valor;

writeln(
  \`O valor em atraso será de: R$ \${prestacao.toFixed(2)} \\n\` +
    \`O valor do juros é de: R$ \${diferenca.toFixed(2)}\`,
);
`,
  },
  "manzano-25-F": {
    code: `writeln("   --- Troca de Valores ---   ");

let a = parseFloat(await readLine("Informe o valor de A: "));
let b = parseFloat(await readLine("Informe o valor de B: "));

let auxiliar = a;
a = b;
b = auxiliar;

writeln(\`A = \${a} | B = \${b}\`);
`,
  },
  "manzano-25-G": {
    code: `writeln("   --- Propriedade Distributiva ---   ");

let a = Number(await readLine("Informe o valor de A: "));
let b = Number(await readLine("Informe o valor de B: "));
let c = Number(await readLine("Informe o valor de C: "));
let d = Number(await readLine("Informe o valor de D: "));

let somAB = a + b;
let somAC = a + c;
let somAD = a + d;
let somBC = b + c;
let somBD = b + d;
let somCD = c + d;

let multAB = a * b;
let multAC = a * c;
let multAD = a * d;
let multBC = b * c;
let multBD = b * d;
let multCD = c * d;

writeln(
  \`A + B = \${somAB} | A x B = \${multAB} \\n\` +
    \`A + C = \${somAC} | A x C = \${multAC} \\n\` +
    \`A + D = \${somAD} | A x D = \${multAD} \\n\` +
    \`B + C = \${somBC} | B x C = \${multBC} \\n\` +
    \`B + D = \${somBD} | B x D = \${multBD} \\n\` +
    \`C + D = \${somCD} | C x D = \${multCD} \\n\`,
);
`,
  },
  "manzano-25-H": {
    code: `writeln("   --- Volume da Caixa Retangular ---   ");

let comprimento = parseFloat(await readLine("Informe o comprimento do retângulo: "));
let largura = parseFloat(await readLine("Informe a largura do retângulo: "));
let altura = parseFloat(await readLine("Informe a altura do retângulo: "));

let volume = comprimento * largura * altura;

writeln(\`O volume da caixa retangular é: \${volume}\`);
`,
  },
  "manzano-25-I": {
    code: `writeln("   --- Quadrado Da Diferença ---   ");

let a = parseFloat(await readLine("Digite o valor para a variável A: "));
let b = parseFloat(await readLine("Digite o valor para variável B: "));

let diferenca = (a - b) ** 2;

writeln(\`O resultado do quadrado da diferença é: \${diferenca}\`);
`,
  },
  "manzano-25-J": {
    code: `writeln("   --- Conversão em Real de um valor lido em Dólar ---   ");

let cotacao = parseFloat(await readLine("Digite a cotação atual do dólar (Ex: 5.25):"));
let dolar = parseFloat(
  await readLine("Digite a quantidade de dólares que você possui: U$"),
);

let reais = cotacao * dolar;

writeln(\`A quantidade de dólares em reais que possui é: R$ \${reais}\`);
`,
  },
  "manzano-25-K": {
    code: `writeln("   --- Conversão em Dólar de um valor lido em Real ---   ");

let cotacao = parseFloat(await readLine("Digite a cotação atual do dólar (Ex: 5.25):"));
let reais = parseFloat(await readLine("Digite a quantidade de reais que possui: R$"));

let dolar = reais / cotacao;

writeln(\`A quantidade de reais em dólares que possui é: U$ \${dolar.toFixed(2)}\`);`,
  },
  "manzano-25-L": {
    code: `writeln("   --- Soma Dos Quadrados ---   ");

let a = parseFloat(await readLine("Digite o valor de A:"));
let b = parseFloat(await readLine("Digite o valor de B:"));
let c = parseFloat(await readLine("Digite o valor de C:"));

let valorFinal = a ** 2 + b ** 2 + c ** 2;

writeln(\`A soma dos quadrados dos três valores é: \${valorFinal}\`)`,
  },
  "manzano-25-M": {
    code: `writeln("   --- Quadrado Da Soma ---   ");

let a = parseFloat(await readLine("Digite o valor de A:"));
let b = parseFloat(await readLine("Digite o valor de B:"));
let c = parseFloat(await readLine("Digite o valor de C:"));

let valorFinal = (a + b + c) ** 2;

writeln(\`O quadrado da soma dos três valores é: \${valorFinal}\`);
`,
  },
  "manzano-26-A": {
    code: `writeln("   --- Produtos e Somas ---   ");

let a = parseInt(await readLine("Digite o valor de A:"));
let b = parseInt(await readLine("Digite o valor de B:"));
let c = parseInt(await readLine("Digite o valor de C:"));
let d = parseInt(await readLine("Digite o valor de D:"));

let variavelP = a * c;
let variavelS = b + d;

writeln(
  \`O produto do 1° valor (\${a}) pelo 3° valor (\${c}) (P) é: \${variavelP} \\n\` +
    \`A soma do 2° valor (\${b}) com o 4° valor (\${d}) (S) é: \${variavelS}\`,
);
`,
  },
  "manzano-26-B": {
    code: `writeln("   --- Reajuste Salarial ---   ");

let variavelSalarioMensal = parseFloat(
  await readLine("Informe o valor do seu salário mensal:"),
);
let variavelPercentualReajuste = parseFloat(
  await readLine("Informe o valor do porcentual de reajuste (%):"),
);

let variavelReajuste =
  variavelSalarioMensal * (variavelPercentualReajuste / 100);
let variavelNovoSalario = variavelSalarioMensal + variavelReajuste;

writeln(
  \`O valor do reajuste foi de: R$ \${variavelReajuste.toFixed(2)} \\n\` +
    \`O valor do novo salário é: R$ \${variavelNovoSalario.toFixed(2)}\`,
);
`,
  },
  "manzano-26-C": {
    code: `writeln("   --- Apuração de Votos ---   ");

let votosA = parseInt(await readLine("Digite os votos válidos do Candidato A:"));
let votosB = parseInt(await readLine("Digite os votos válidos do Candidato B:"));
let votosC = parseInt(await readLine("Digite os votos válidos do Candidato C:"));
let votosNulos = parseInt(await readLine("Digite a quantidade de votos nulos:"));
let votosBranco = parseInt(await readLine("Digite a quantidade de votos em branco:"));

let totalValidos = votosA + votosB + votosC;
let totalEleitores = totalValidos + votosNulos + votosBranco;

let percentualValidos = (totalValidos / totalEleitores) * 100;
let percentualA = (votosA / totalEleitores) * 100;
let percentualB = (votosB / totalEleitores) * 100;
let percentualC = (votosC / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualBranco = (votosBranco / totalEleitores) * 100;

writeln(
  \`-- Resultado da Apuração Dos Votos --\\n\\n\` +
    \`Total de eleitores: \${totalEleitores} \\n\` +
    \`Percentual de votos válidos totais: \${percentualValidos.toFixed(2)}% \\n\\n\` +
    \`\\t Percentual do Candidato A: \${percentualA.toFixed(2)}% \\n\` +
    \`\\t Percentual do Candidato B: \${percentualB.toFixed(2)}% \\n\` +
    \`\\t Percentual do Candidato C: \${percentualC.toFixed(2)}% \\n\\n\` +
    \`Percentual de votos nulos: \${percentualNulos.toFixed(2)}% \\n\` +
    \`Percentual de votos em branco: \${percentualBranco.toFixed(2)}%\`,
);
`,
  },
  "manzano-46-A": {
    code: `writeln("-- Tabuada --");

let numero = parseInt(await readLine("Informe um número a ser calculado: "));
let multiplicar = 1;
let resultado = "";

if (isNaN(numero) || numero <= 0) {
  writeln("Informação inválida! Tente novamente!");
} else {
  while (multiplicar <= 10) {
    let contadora = numero * multiplicar;
    resultado += \`\${numero} x \${multiplicar} = \${contadora}\\n\`;
    multiplicar++;
  }
}

writeln(resultado);
`,
  },
  "manzano-46-B": {
    code: `writeln("-- Soma dos cem primeiros números inteiros --");

let numero = 0;
let contadora = 1;

while (contadora < 101) {
  numero = numero + contadora;
  contadora++;
}

writeln(\`O valor total da soma dos cem primeiros números inteiros é: \${numero}\`);
`,
  },
  "manzano-46-C": {
    code: `writeln("-- Soma dos pares de 1 até 500 --");

let numero = 0;
let contadora = 2;

while (contadora < 501) {
  numero = numero + contadora;
  contadora += 2;
}

writeln(\`O valor total da soma dos pares de 1 até 500 é: \${numero}\`);
`,
  },
  "manzano-46-D": {
    code: `writeln("-- Números ímpares inteiros entre 0 a 20 --");

let contadora = 0;

while (contadora <= 20) {
  if (contadora % 2 == 1) {
    writeln(\`\${contadora} Este número é Ímpar!\`);
  }
  contadora++;
}
`,
  },
  "manzano-46-E": {
    code: `writeln("-- 3 elevado do 0 ao 15 --");

let expoente = 0;
let resultado = 1;

while (expoente <= 15) {
  writeln(\`3 elevado a \${expoente} = \${resultado}\`);

  resultado = resultado * 3;
  expoente++;
}
`,
  },
  "manzano-46-F": {
    code: `writeln("-- Exponenciação --");

let numero = parseInt(await readLine("Informe o número da base: "));
let expoente = parseInt(await readLine("Informe o número do expoente: "));
let resultado = 1;
let contadora = expoente;

while (contadora > 0) {
  resultado = resultado * numero;
  contadora--;
}

writeln(\`\${numero} elevado a \${expoente} = \${resultado}\`);
`,
  },
  "manzano-46-G": {
    code: `writeln("-- Série de Fibonacci --");

let numeroA = 1;
let numeroB = 1;
let contadora = 0;
let resultado = 0;

writeln(\`\${numeroA}\`);
writeln(\`\${numeroB}\`);

while (contadora <= 12) {
  resultado = numeroA + numeroB;

  writeln(\`\${numeroA} + \${numeroB} = \${resultado}\`);

  numeroA = numeroB;
  numeroB = resultado;

  contadora++;
}
`,
  },
  "manzano-46-H": {
    code: `writeln("-- Conversor de Celsius (°C) para Fahrenheit (°F) --");

let contadora = 0;
let Celsius = 10;
let Fahrenheit = 0;

while (Celsius <= 100) {
  Fahrenheit = (9 * Celsius + 160) / 5;

  writeln(\`\${Celsius} °C convertidos para Fahrenheit é \${Fahrenheit} °F\`);

  Celsius = Celsius + 10;
}
`,
  },
  "manzano-46-I": {
    code: `writeln("-- Somatório e média aritmética de 10 valores numéricos --");

let somatoria = 0;
let contador = 1;

while (contador <= 10) {
  let numero = parseFloat(await readLine(\`Informe o \${contador}° valor:\`));

  somatoria = somatoria + numero;

  contador++;
}

let media = somatoria / 10;

writeln(
  \`A soma total dos números informados é de: \${somatoria}\` +
    \`A média dos valores informados é de: \${media}\`,
);
`,
  },
  "manzano-46-J": {
    code: `writeln("-- Soma e média dos pares de 50 a 70 --");

let contadora = 50;
let soma = 0;
let quantidade = 0;

while (contadora <= 70) {
  if (contadora % 2 === 0) {
    soma = soma + contadora;
    quantidade++;
  }

  contadora++;
}

let media = soma / quantidade;

writeln(
  \`A soma dos valores pares de 50 a 70 é: \${soma}\\n\` +
    \`A média aritmética dos valores pares de 50 a 70 é: \${media}\`,
);
`,
  },
  "manzano-46-K": {
    code: `writeln("-- Área total da residência --");

let areaTotal = 0;
let resposta = "S";

while (resposta === "S" || resposta === "s") {
  let nomeComodo = await readLine("Digite o nome do cômodo: ");
  let largura = parseFloat(await readLine("Digite a largura do cômodo: "));
  let comprimento = parseFloat(await readLine("Digite o comprimento do cômodo: "));

  let areaComodo = largura * comprimento;
  areaTotal = areaTotal + areaComodo;

  writeln(\`A área do cômodo \${nomeComodo} é de: \${areaComodo} m²\`);

  resposta = await readLine("Deseja continuar (S/N)? ");
}

writeln(\`A área total da residência é de: \${areaTotal} m²\`);
`,
  },
  "manzano-46-L": {
    code: `writeln("-- Maior e menor valor --");

let numero = parseInt(
  await readLine("Digite um número positivo (negativo para encerrar): "),
);

if (isNaN(numero) || numero < 0) {
  writeln("Nenhum valor positivo foi informado!");
} else {
  let maior = numero;
  let menor = numero;

  while (numero >= 0) {
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }

    numero = parseInt(
      await readLine("Digite um número positivo (negativo para encerrar): "),
    );
  }

  writeln(
    \`O maior número informado foi: \${maior}\\n\` +
      \`O menor número informado foi: \${menor}\`,
  );
}
`,
  },
  "manzano-50-A": {
    code: `writeln("-- Quadrados de 15 a 200 --");

let numero = 15;

do {
  let quadrado = Math.pow(numero, 2);
  writeln(\`O quadrado de \${numero} é: \${quadrado}\`);

  numero = numero + 1;
} while (numero <= 200);
`,
  },
  "manzano-50-B": {
    code: `writeln("-- Soma dos Pares de 1 a 500 --");

let contadora = 1;
let soma = 0;

do {
  if (contadora % 2 === 0) {
    soma = soma + contadora;
  }
  contadora++;
} while (contadora <= 500);

writeln(\`O resultado da soma dos pares de 1 a 500 é: \${soma}\`);
`,
  },
  "manzano-50-C": {
    code: `writeln("-- Divisíveis por 4 Menores que 200 --");

let contadora = 1;

do {
  if (contadora % 4 === 0) {
    writeln(\`\${contadora}\`);
  }
  contadora++;
} while (contadora < 200);
`,
  },
  "manzano-50-D": {
    code: `writeln("-- Grãos de Trigo no Tabuleiro --");

let quadro = 1;
let graos = BigInt(1);
let total = BigInt(0);

do {
  total = total + graos;
  graos = graos * BigInt(2);

  quadro = quadro + 1;
} while (quadro <= 64);

writeln(\`O total de grãos de trigo no tabuleiro é: \${total}\`);
`,
  },
  "manzano-50-E": {
    code: `writeln("-- Soma de Fatoriais --");

let contadora = 1;
let somaFatoriais = BigInt(0);

do {
  let valor = parseInt(await readLine(\`Digite o valor \${contadora}: \`));

  let fatorial = BigInt(1);
  let multiplicador = 1;

  do {
    fatorial *= BigInt(multiplicador);
    multiplicador++;
  } while (multiplicador <= valor);

  somaFatoriais += fatorial;
  contadora++;
} while (contadora <= 15);

writeln(\`A soma dos fatoriais dos valores lidos é: \${somaFatoriais}\`);
`,
  },
  "manzano-50-F": {
    code: `writeln("-- Soma e Média de Valores Positivos --");

let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = parseInt(
    await readLine("Digite um número positivo (negativo para encerrar): "),
  );

  if (numero >= 0) {
    soma += numero;
    quantidade++;
  }
} while (numero >= 0);

let media = soma / quantidade;

writeln(
  \`A somatória dos números positivos lidos é: \${soma} \\n\` +
    \`A quantidade de números lidos foi: \${quantidade} \\n\` +
    \`A média aritmética dos números lidos é: \${media.toFixed(2)}\`,
);
`,
  },
  "manzano-50-G": {
    code: `writeln("-- Fatorial dos Números Ímpares de 1 a 10 --");

let contadora = 1;

do {
  if (contadora % 2 === 1) {
    let fatorial = 1;
    let multiplicador = 1;

    do {
      fatorial *= multiplicador;
      multiplicador++;
    } while (multiplicador <= contadora);
    writeln(\`O fatorial de \${contadora} é: \${fatorial}\`);
  }
  contadora++;
} while (contadora <= 10);
`,
  },
  "manzano-50-H": {
    code: `writeln("-- Área Total da Residência --");

let areaTotal = 0;
let resposta = "S";

do {
  let nomeComodo = await readLine("Digite o nome do cômodo: ");
  let largura = parseFloat(await readLine("Digite a largura do cômodo: "));
  let comprimento = parseFloat(await readLine("Digite o comprimento do cômodo: "));

  let areaComodo = largura * comprimento;
  areaTotal += areaComodo;

  writeln(\`A área do cômodo \${nomeComodo} é de: \${areaComodo} m²\`);
  resposta = await readLine(\`Deseja continuar (S/N)?\`);
} while (resposta === "S" || resposta === "s");

writeln(\`A área total da residência é de: \${areaTotal} m²\`);
`,
  },
  "manzano-50-I": {
    code: `writeln("-- Maior e Menor Valor --");

let primeiro = true;
let maior;
let menor;
let numero;

do {
  numero = Number(await readLine("Digite um número (negativo para encerrar): "));
  if (numero >= 0) {
    if (primeiro === true) {
      maior = numero;
      menor = numero;
      primeiro = false;
    } else if (numero > maior) {
      maior = numero;
    } else if (numero < menor) {
      menor = numero;
    }
  }
} while (numero >= 0);

writeln(
  \`O maior número informado foi: \${maior} \\n\` +
    \`O menor número informado foi: \${menor}\`,
);
`,
  },
  "manzano-50-J": {
    code: `writeln("-- Divisão Sem Operador DIV --");

let dividendo;
do {
  dividendo = Number(await readLine("Digite o dividendo:"));
} while (isNaN(dividendo));

let divisor;
do {
  divisor = Number(await readLine("Digite o divisor:"));
  if (divisor === 0) {
    writeln("O divisor não pode ser zero!");
  }
} while (isNaN(divisor) || divisor === 0);

let resto = dividendo;
let resultado = 0;

if (dividendo >= divisor) {
  do {
    resto -= divisor;
    resultado++;
  } while (resto >= divisor);
}
writeln(\`\${dividendo} dividido por \${divisor} é igual a: \${resultado}\`);
`,
  },
  "manzano-66-A": {
    code: `writeln("-- Quadrados de 15 a 200 --");

for (let numero = 15; numero <= 200; numero++) {
    let quadrado = Math.pow(numero,2)
    writeln(\`O quadrado de \${numero} é: \${quadrado}\`)
}`,
  },
  "manzano-66-B": {
    code: `writeln("-- Tabuada do 1 ao 10 --");

const numero = Number(await readLine("Digite um número: "));

for (let contadora = 1; contadora <= 10; contadora++) {
  const resultado = contadora * numero;
  writeln(numero + " x " + contadora + " = " + resultado);
}`,
  },
  "manzano-66-C": {
    code: `writeln("-- Soma de 1 a 100 --");

let soma = 0;
for (let contadora = 1; contadora <= 100; contadora++) {
  soma += contadora;
}

writeln("O resultado da soma dos cem primeiros números inteiros é: " + soma);`,
  },
  "manzano-66-D": {
    code: `writeln("-- Soma dos Pares de 1 a 500 --");

let soma = 0;
for (let contadora = 1; contadora <= 500; contadora++) {
  if (contadora % 2 === 0) {
    soma += contadora;
  }
}

writeln("O resultado da soma dos pares de 1 a 500 é: " + soma);`,
  },
  "manzano-66-E": {
    code: `writeln("-- Ímpares de 0 a 20 --");
writeln("Os números inteiros ímpares de 0 a 20 são:");

for (let contadora = 0; contadora <= 20; contadora++) {
  if (contadora % 2 === 1) {
    writeln(contadora);
  }
}`,
  },
  "manzano-66-F": {
    code: `writeln("-- Divisíveis por 4 Menores que 200 --");

for (let contadora = 1; contadora < 200; contadora++) {
  if (contadora % 4 === 0) {
    writeln(contadora);
  }
}`,
  },
  "manzano-66-G": {
    code: `writeln("-- Potências de 3 --");

let resultado = 1;
for (let contadora = 0; contadora <= 15; contadora++) {
  writeln("3 elevado a " + contadora + " = " + resultado);
  resultado *= 3;
}`,
  },
  "manzano-66-H": {
    code: `writeln("-- Potência de Base Qualquer --");

const base = Number(await readLine("Digite a base: "));
const expoente = Number(await readLine("Digite o expoente: "));
let resultado = 1;

for (let contadora = 1; contadora <= expoente; contadora++) {
  resultado *= base;
}

writeln(base + " elevado a " + expoente + " = " + resultado);`,
  },
  "manzano-66-I": {
    code: `writeln("-- Série de Fibonacci --");

let numeroA = 1;
let numeroB = 1;
writeln(numeroA);
writeln(numeroB);

for (let contadora = 1; contadora <= 12; contadora++) {
  const resultado = numeroA + numeroB;
  writeln(resultado);
  numeroA = numeroB;
  numeroB = resultado;
}`,
  },
  "manzano-66-J": {
    code: `writeln("-- Conversão Celsius para Fahrenheit --");

for (let celsius = 10; celsius <= 100; celsius += 10) {
  const fahrenheit = (9 * celsius + 160) / 5;
  writeln("A conversão de " + celsius + "°C para Fahrenheit é de: " + fahrenheit + "°F");
}`,
  },
  "manzano-66-K": {
    code: `writeln("-- Fatorial dos Números Ímpares de 1 a 10 --");

for (let contadora = 1; contadora <= 10; contadora++) {
  if (contadora % 2 === 1) {
    let fatorial = 1;
    for (let multiplicador = 1; multiplicador <= contadora; multiplicador++) {
      fatorial *= multiplicador;
    }
    writeln("O fatorial de " + contadora + " é: " + fatorial);
  }
}`,
  },
  "faccat-4-5": {
    code: `writeln("-- Programa Antecessor --");

const numero = Number(await readLine("Digite um número: "));
const antecessor = numero - 1;

writeln("O antecessor do número digitado é: " + antecessor);`,
  },
  "faccat-4-6": {
    code: `writeln("-- Programa Dimensões Retangulo --");

const base = Number(await readLine("Digite o número da base: "));
const altura = Number(await readLine("Digite o número da altura: "));
const area = base * altura;

writeln("A área do retângulo é: " + area);`,
  },
  "faccat-4-7": {
    code: `writeln("-- Programa Idade em Dias --");

const anos = Number(await readLine("Digite a quantidade de anos: "));
const meses = Number(await readLine("Digite a quantidade de meses: "));
const dias = Number(await readLine("Digite a quantidade de dias: "));
const totalDias = anos * 365 + meses * 30 + dias;

writeln("Dias desde o seu nascimento: " + totalDias);`,
  },
  "faccat-4-8": {
    code: `writeln("-- Percentual de Eleitores --");

const totalEleitores = Number(await readLine("Digite o total de eleitores: "));
const votosBrancos = Number(await readLine("Digite o número de votos brancos: "));
const votosNulos = Number(await readLine("Digite o número de votos nulos: "));
const votosValidos = Number(await readLine("Digite o número de votos válidos: "));

if (totalEleitores <= 0) {
  writeln("O total de eleitores deve ser maior que zero.");
} else {
  const percentualBrancos = votosBrancos * 100 / totalEleitores;
  const percentualNulos = votosNulos * 100 / totalEleitores;
  const percentualValidos = votosValidos * 100 / totalEleitores;
  writeln("O percentual de votos brancos é: " + percentualBrancos.toFixed(2) + "%");
  writeln("O percentual de votos nulos é: " + percentualNulos.toFixed(2) + "%");
  writeln("O percentual de votos válidos é: " + percentualValidos.toFixed(2) + "%");
}`,
  },
  "faccat-4-9": {
    code: `writeln("-- Reajuste Salarial --");

const salarioAtual = Number(await readLine("Digite o salário mensal atual: R$ "));
const percentualReajuste = Number(await readLine("Digite o percentual de reajuste (%): "));
const aumento = percentualReajuste * salarioAtual / 100;
const novoSalario = salarioAtual + aumento;

writeln("O valor do novo salário é: R$ " + novoSalario.toFixed(2));
writeln("O valor do reajuste salarial é: R$ " + aumento.toFixed(2));`,
  },
  "faccat-4-10": {
    code: `writeln("-- Custo Final do Carro --");

const custoFabrica = Number(await readLine("Digite o custo de fábrica: R$ "));
const percentualDistribuidor = custoFabrica * 28 / 100;
const percentualImpostos = custoFabrica * 45 / 100;
const custoFinal = custoFabrica + percentualDistribuidor + percentualImpostos;

writeln("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));`,
  },
  "faccat-4-11": {
    code: `writeln("-- Salário do Vendedor --");

const numeroCarrosVendidos = Number(await readLine("Digite o número de carros vendidos do(a) vendedor(a): "));
const valorTotalVendas = Number(await readLine("Digite o valor total das vendas do(a) vendedor(a): R$ "));
const salarioFixo = Number(await readLine("Digite o salário fixo do(a) vendedor(a): R$ "));
const valorPorCarro = Number(await readLine("Digite o valor recebido por carro vendido: R$ "));
const comissaoVendas = valorTotalVendas * 5 / 100;
const salarioFinal = salarioFixo + numeroCarrosVendidos * valorPorCarro + comissaoVendas;

writeln("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));`,
  },
  "faccat-5-12": {
    code: `writeln("-- Conversão Fahrenheit para Celsius --");

const fahrenheit = Number(await readLine("Digite a temperatura em graus Fahrenheit (°F): "));
const celsius = 5 * (fahrenheit - 32) / 9;

writeln("A temperatura em graus Celsius é: " + celsius.toFixed(2) + "°C");`,
  },
  "faccat-5-13": {
    code: `writeln("-- Média Ponderada --");

const nota1 = Number(await readLine("Digite a nota 1 (peso 2): "));
const nota2 = Number(await readLine("Digite a nota 2 (peso 3): "));
const nota3 = Number(await readLine("Digite a nota 3 (peso 5): "));
const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

writeln("A média final ponderada das notas do(a) aluno(a) é: " + mediaFinal.toFixed(2));`,
  },
  "faccat-5–6-14": {
    code: `writeln("-- Maior que 10 --");

const numero = Number(await readLine("Digite um número: "));
if (numero > 10) {
  writeln("É MAIOR QUE 10!");
} else {
  writeln("NÃO É MAIOR QUE 10!");
}`,
  },
  "faccat-5–6-15": {
    code: `writeln("-- Positivo ou Negativo --");

const numero = Number(await readLine("Digite um valor: "));
if (numero >= 0) {
  writeln("Positivo");
} else {
  writeln("Negativo");
}`,
  },
  "faccat-5–6-16": {
    code: `writeln("-- Preço das Maçãs --");

const quantidade = Number(await readLine("Digite a quantidade de maçãs compradas: "));
const precoPorMaca = quantidade < 12 ? 1.30 : 1.00;
const custoTotal = quantidade * precoPorMaca;

writeln("O custo total da compra é: R$ " + custoTotal.toFixed(2));`,
  },
  "faccat-5–6-17": {
    code: `writeln("-- Aprovação do Aluno --");

const nota1 = Number(await readLine("Digite a nota da primeira avaliação: "));
const nota2 = Number(await readLine("Digite a nota da segunda avaliação: "));
const media = (nota1 + nota2) / 2;

if (media >= 6) {
  writeln("Você foi aprovado!");
} else {
  writeln("Você NÃO foi aprovado!");
}
writeln("A média calculada foi: " + media.toFixed(2));`,
  },
  "faccat-5–6-18": {
    code: `writeln("-- Direito ao Voto --");

const anoAtual = Number(await readLine("Digite o ano atual: "));
const anoNascimento = Number(await readLine("Digite o ano de nascimento: "));
const idade = anoAtual - anoNascimento;

if (idade < 16) {
  writeln("Não poderá votar este ano!");
} else if (idade < 18) {
  writeln("Voto opcional!");
} else {
  writeln("Voto obrigatório!");
}`,
  },
  "faccat-5–6-19": {
    code: `writeln("-- Maior de Dois Valores --");

const a = Number(await readLine("Digite o valor de A: "));
const b = Number(await readLine("Digite o valor de B: "));

if (a > b) {
  writeln("O maior valor é A = " + a);
} else {
  writeln("O maior valor é B = " + b);
}`,
  },
  "faccat-5–6-20": {
    code: `writeln("-- Ordem Crescente --");

const a = Number(await readLine("Digite o valor de A: "));
const b = Number(await readLine("Digite o valor de B: "));

if (a > b) {
  writeln("A ordem crescente dos valores é: " + b + " | " + a);
} else {
  writeln("A ordem crescente dos valores é: " + a + " | " + b);
}`,
  },
  "faccat-5–6-21": {
    code: `writeln("-- Duração da Partida de Xadrez --");

const horaInicio = Number(await readLine("Digite a hora de início (0 a 23): "));
const horaFim = Number(await readLine("Digite a hora de fim (0 a 23): "));
let duracao;

if (horaFim >= horaInicio) {
  duracao = horaFim - horaInicio;
} else {
  duracao = (24 - horaInicio) + horaFim;
}

writeln("A duração da Partida de Xadrez foi de: " + duracao + " horas");`,
  },
  "faccat-5–6-22": {
    code: `writeln("-- Hora Extra --");

const horasTrabalhadas = Number(await readLine("Digite o número de horas trabalhadas no mês: "));
const salarioHora = Number(await readLine("Digite o salário por hora: R$ "));
let salarioTotal;

if (horasTrabalhadas > 160) {
  const horasExtras = horasTrabalhadas - 160;
  salarioTotal = 160 * salarioHora + horasExtras * salarioHora * 1.5;
} else {
  salarioTotal = horasTrabalhadas * salarioHora;
}

writeln("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));`,
  },
  "faccat-5–6-23": {
    code: `writeln("-- Peso Ideal --");

const nome = await readLine("Digite o nome: ");
const sexo = (await readLine("Digite o sexo (M/F): ")).trim().toUpperCase();
const altura = Number(await readLine("Digite a altura (Ex: 1.70): "));
let pesoIdeal;

if (sexo === "M") {
  pesoIdeal = 72.7 * altura - 58;
} else {
  pesoIdeal = 62.1 * altura - 44.7;
}

writeln("O peso ideal de " + nome + " é: " + pesoIdeal.toFixed(2));`,
  },
  "faccat-5–6-24": {
    code: `writeln("-- Comissão do Vendedor --");

const salarioFixo = Number(await readLine("Digite o salário fixo do(a) vendedor(a): R$ "));
const valorVendas = Number(await readLine("Digite o valor das vendas do(a) vendedor(a): R$ "));
let comissao;

if (valorVendas <= 1500) {
  comissao = valorVendas * 3 / 100;
} else {
  comissao = 1500 * 3 / 100 + (valorVendas - 1500) * 5 / 100;
}

const salarioTotal = salarioFixo + comissao;
writeln("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2));`,
  },
  "faccat-5–6-25": {
    code: `writeln("-- Saldo Bancário --");

const numeroConta = Number(await readLine("Digite o número da conta: "));
const saldo = Number(await readLine("Digite o saldo: R$ "));
const debito = Number(await readLine("Digite o débito: R$ "));
const credito = Number(await readLine("Digite o crédito: R$ "));
const saldoAtual = saldo - debito + credito;

if (saldoAtual >= 0) {
  writeln("Saldo Positivo");
} else {
  writeln("Saldo Negativo");
}
writeln("O saldo atual é: R$ " + saldoAtual.toFixed(2));`,
  },
  "faccat-5–6-26": {
    code: `writeln("-- Controle de Estoque --");

const quantidadeAtual = Number(await readLine("Digite a quantidade atual em estoque: "));
const quantidadeMaxima = Number(await readLine("Digite a quantidade máxima em estoque: "));
const quantidadeMinima = Number(await readLine("Digite a quantidade mínima em estoque: "));
const quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual >= quantidadeMinima) {
  writeln("Não efetuar compra!");
} else {
  writeln("Efetuar compra!");
}`,
  },
  "faccat-6–8-27": {
    code: `writeln("-- Positivo, Negativo ou Zero --");

const numero = Number(await readLine("Digite um número: "));
if (numero > 0) {
  writeln("Positivo");
} else if (numero < 0) {
  writeln("Negativo");
} else {
  writeln("Zero");
}`,
  },
  "faccat-6–8-28": {
    code: `writeln("-- Maior de Três Valores --");

const a = Number(await readLine("Digite o valor de A: "));
const b = Number(await readLine("Digite o valor de B: "));
const c = Number(await readLine("Digite o valor de C: "));

if (a > b) {
  if (a > c) {
    writeln("O maior valor é A = " + a);
  } else {
    writeln("O maior valor é C = " + c);
  }
} else if (b > c) {
  writeln("O maior valor é B = " + b);
} else {
  writeln("O maior valor é C = " + c);
}`,
  },
  "faccat-6–8-29": {
    code: `writeln("-- Soma dos Dois Maiores --");

const a = Number(await readLine("Digite o valor de A: "));
const b = Number(await readLine("Digite o valor de B: "));
const c = Number(await readLine("Digite o valor de C: "));
let soma;
let maiores;

if (a < b && a < c) {
  soma = b + c;
  maiores = b + " + " + c;
} else if (b < a && b < c) {
  soma = a + c;
  maiores = a + " + " + c;
} else {
  soma = a + b;
  maiores = a + " + " + b;
}

writeln("A soma dos dois maiores valores (" + maiores + ") é: " + soma);`,
  },
  "faccat-6–8-30": {
    code: `writeln("-- Ordem Crescente de Três Valores --");

let a = Number(await readLine("Digite o valor de A: "));
let b = Number(await readLine("Digite o valor de B: "));
let c = Number(await readLine("Digite o valor de C: "));
let auxiliar;

if (a > b) {
  auxiliar = a;
  a = b;
  b = auxiliar;
}
if (a > c) {
  auxiliar = a;
  a = c;
  c = auxiliar;
}
if (b > c) {
  auxiliar = b;
  b = c;
  c = auxiliar;
}

writeln("A ordem crescente dos valores é: " + a + " -> " + b + " -> " + c);`,
  },
  "faccat-6–8-31": {
    code: `writeln("-- Formação de Triângulo --");

const a = Number(await readLine("Digite o valor de A: "));
const b = Number(await readLine("Digite o valor de B: "));
const c = Number(await readLine("Digite o valor de C: "));

if (a > 0 && b > 0 && c > 0 && a < b + c && b < a + c && c < a + b) {
  writeln("Os valores formam um triângulo");
} else {
  writeln("Os valores não formam um triângulo");
}`,
  },
  "faccat-6–8-32": {
    code: `writeln("-- Vencedor da Partida --");

const nomeTime1 = await readLine("Digite o nome do Time 1: ");
const golsTime1 = Number(await readLine("Digite os gols do Time 1: "));
const nomeTime2 = await readLine("Digite o nome do Time 2: ");
const golsTime2 = Number(await readLine("Digite os gols do Time 2: "));

if (golsTime1 > golsTime2) {
  writeln("O vencedor é: " + nomeTime1 + "!");
} else if (golsTime2 > golsTime1) {
  writeln("O vencedor é: " + nomeTime2 + "!");
} else {
  writeln("EMPATE");
}`,
  },
  "faccat-6–8-33": {
    code: `writeln("-- Comparação de Números --");

const numero1 = Number(await readLine("Digite o primeiro número: "));
const numero2 = Number(await readLine("Digite o segundo valor: "));

if (numero1 === numero2) {
  writeln("Números iguais!");
} else if (numero1 > numero2) {
  writeln("Primeiro é maior!");
} else {
  writeln("Segundo maior!");
}`,
  },
  "faccat-6–8-34": {
    code: `writeln("-- Teste de Condicionais --");

const x = Number(await readLine("Digite o valor de X: "));
const y = Number(await readLine("Digite o valor de Y: "));
const z = x * y + 5;
let resposta;

if (z <= 0) {
  resposta = "A";
} else if (z <= 100) {
  resposta = "B";
} else {
  resposta = "C";
}

writeln("Z = " + z);
writeln("Resposta = " + resposta);`,
  },
  "faccat-6–8-35": {
    code: `writeln("-- Posto de Combustíveis --");

const litros = Number(await readLine("Digite a quantidade de litros vendidos: "));
const tipoCombustivel = (await readLine("Digite o tipo de combustível (A-álcool, G-gasolina): ")).trim().toUpperCase();
let precoLitro;
let desconto;

if (tipoCombustivel === "A") {
  precoLitro = 2.90;
  desconto = litros <= 20 ? 0.03 : 0.05;
} else {
  precoLitro = 3.30;
  desconto = litros <= 20 ? 0.04 : 0.06;
}

const valorPagar = litros * precoLitro * (1 - desconto);
writeln("O valor a ser pago pelo cliente é: R$ " + valorPagar.toFixed(2));`,
  },
  "faccat-6–8-36": {
    code: `writeln("-- Idades de Homens e Mulheres --");

const idadeMulher1 = Number(await readLine("Digite a idade da 1° mulher: "));
const idadeMulher2 = Number(await readLine("Digite a idade da 2° mulher: "));
const idadeHomem1 = Number(await readLine("Digite a idade do 1° homem: "));
const idadeHomem2 = Number(await readLine("Digite a idade do 2° homem: "));
const mulherVelha = Math.max(idadeMulher1, idadeMulher2);
const mulherNova = Math.min(idadeMulher1, idadeMulher2);
const homemVelho = Math.max(idadeHomem1, idadeHomem2);
const homemNovo = Math.min(idadeHomem1, idadeHomem2);
const soma = homemVelho + mulherNova;
const produto = homemNovo * mulherVelha;

writeln("A soma do homem mais velho com a mulher mais nova é: " + soma);
writeln("O produto do homem mais novo com a mulher mais velha é: " + produto);`,
  },
  "faccat-6–8-37": {
    code: `writeln("-- Fruteira --");

const kgMorango = Number(await readLine("Digite a quantidade de morangos (Kg): "));
const kgMaca = Number(await readLine("Digite a quantidade de maçãs (Kg): "));
const valorMorango = kgMorango * (kgMorango <= 5 ? 2.50 : 2.20);
const valorMaca = kgMaca * (kgMaca <= 5 ? 1.80 : 1.50);
const totalKg = kgMorango + kgMaca;
let valorTotal = valorMorango + valorMaca;

if (totalKg > 8 || valorTotal > 25) {
  valorTotal *= 0.90;
}

writeln("O valor a ser pago pelo cliente é: R$ " + valorTotal.toFixed(2));`,
  },
  "faccat-6–8-38": {
    code: `writeln("-- Acesso Por Código --");

const codigoArmazenado = 1234;
const senhaArmazenada = 9999;
const codigoDigitado = Number(await readLine("Digite o código: "));

if (codigoDigitado !== codigoArmazenado) {
  writeln("Usuário Inválido!");
} else {
  const senhaDigitada = Number(await readLine("Digite a senha: "));
  if (senhaDigitada !== senhaArmazenada) {
    writeln("Senha Incorreta!");
  } else {
    writeln("Acesso Permitido!");
  }
}`,
  },
  "faccat-8-39": {
    code: `writeln("-- Expressões lógicas --");

const a = true;
const b = true;
const c = false;
const resultadoA = (a && b) || (a !== b);
const resultadoB = (a || b) && (a && c);
const resultadoC = a || (c && b) !== (a && !b);

writeln("Resultado a): " + (resultadoA ? "VERDADEIRO" : "FALSO"));
writeln("Resultado b): " + (resultadoB ? "VERDADEIRO" : "FALSO"));
writeln("Resultado c): " + (resultadoC ? "VERDADEIRO" : "FALSO"));`,
  },
};
