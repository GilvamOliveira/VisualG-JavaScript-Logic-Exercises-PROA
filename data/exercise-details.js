window.EXERCISE_DETAILS = {};
(() => {
  const add = (book, page, letters, rows) =>
    rows.forEach((row, index) => {
      const [title, prompt] = row.split("::");
      window.EXERCISE_DETAILS[`${book}-${page}-${letters[index]}`] = {
        title,
        prompt,
      };
    });
  add(
    "manzano",
    "26",
    ["A", "B", "C"],
    [
      "Produto e soma::Ler quatro valores inteiros A, B, C e D. Apresentar o produto do primeiro pelo terceiro e a soma do segundo com o quarto.",
      "Reajuste salarial::Ler o salário mensal e o percentual de reajuste de um trabalhador. Apresentar o novo salário.",
      "Eleição sindical::Ler votos válidos de três candidatos, votos nulos e em branco; apresentar total de eleitores e os percentuais solicitados.",
    ],
  );
  add(
    "manzano",
    "46",
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    [
      "Tabuada::Apresentar a tabuada de multiplicar, de 1 a 10, de um número qualquer.",
      "Soma de 1 a 100::Apresentar o total da soma dos cem primeiros números inteiros.",
      "Soma dos pares::Apresentar o somatório dos valores pares de 1 até 500.",
      "Ímpares de 0 a 20::Apresentar os valores inteiros ímpares de 0 a 20, verificando a condição com se.",
      "Potências de 3::Apresentar as potências de 3 para expoentes de 0 a 15 sem usar o operador ^.",
      "Potência de base qualquer::Calcular uma potência B elevado a E sem usar o operador ^.",
      "Fibonacci::Apresentar a série de Fibonacci até o décimo quinto termo.",
      "Celsius para Fahrenheit::Apresentar a conversão de 10 °C a 100 °C, de 10 em 10 graus.",
      "Soma e média de 10 valores::Ler 10 valores numéricos e apresentar o somatório e a média aritmética.",
      "Pares de 50 a 70::Apresentar a soma e a média dos valores pares entre 50 e 70.",
      "Área residencial::Ler nome, largura e comprimento de cômodos; acumular e apresentar a área total quando informado NAO.",
      "Maior e menor::Ler inteiros positivos até ser informado um negativo e apresentar o maior e o menor.",
    ],
  );
  add(
    "manzano",
    "50",
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    [
      "Quadrados de 15 a 200::Apresentar os quadrados dos inteiros de 15 a 200.",
      "Soma dos pares::Apresentar o somatório dos pares de 1 até 500.",
      "Divisíveis por 4::Apresentar os números menores que 200 divisíveis por 4.",
      "Grãos no tabuleiro::Calcular o somatório de grãos de trigo em 64 casas dobrando a quantidade a cada casa.",
      "Soma de fatoriais::Ler 15 inteiros e apresentar o somatório de seus fatoriais.",
      "Soma e média positivos::Ler valores positivos até negativo e apresentar soma, média e quantidade.",
      "Fatoriais ímpares::Apresentar o fatorial dos ímpares de 1 a 10.",
      "Área residencial::Calcular a área total de cômodos até resposta NAO.",
      "Maior e menor::Ler positivos até negativo e apresentar maior e menor.",
      "Divisão por subtração::Apresentar o quociente inteiro de dois números sem usar DIV.",
    ],
  );
  add(
    "manzano",
    "66",
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
    [
      "Quadrados de 15 a 200::Apresentar os quadrados dos inteiros de 15 a 200.",
      "Tabuada::Apresentar a tabuada de 1 a 10 de um número qualquer.",
      "Soma de 1 a 100::Apresentar a soma dos cem primeiros inteiros.",
      "Soma dos pares::Apresentar o somatório dos pares de 1 até 500.",
      "Ímpares de 0 a 20::Apresentar os ímpares de 0 a 20.",
      "Divisíveis por 4::Apresentar números menores que 200 divisíveis por 4.",
      "Potências de 3::Apresentar potências de 3, expoentes 0 a 15, sem ^.",
      "Potência de base qualquer::Calcular B elevado a E sem ^.",
      "Fibonacci::Apresentar Fibonacci até o décimo quinto termo.",
      "Celsius para Fahrenheit::Converter 10 °C a 100 °C, de 10 em 10.",
      "Fatoriais ímpares::Apresentar o fatorial dos ímpares de 1 a 10.",
    ],
  );
  add(
    "faccat",
    "4",
    [5, 6, 7, 8, 9, 10, 11],
    [
      "Antecessor::Ler um valor e escrever seu antecessor.",
      "Área do retângulo::Ler base e altura de um retângulo, calcular e escrever a área.",
      "Idade em dias::Ler idade em anos, meses e dias e escrever apenas em dias; ano tem 365 dias e mês 30.",
      "Percentual de eleitores::Ler total de eleitores e votos brancos, nulos e válidos; calcular os percentuais.",
      "Reajuste salarial::Ler salário atual e percentual de reajuste; calcular o novo salário.",
      "Custo de carro novo::Ler custo de fábrica e calcular custo ao consumidor com 28% de distribuidor e 45% de impostos.",
      "Salário do vendedor::Ler carros vendidos, vendas totais, salário fixo e comissão por carro; calcular salário final.",
    ],
  );
  add(
    "faccat",
    "5",
    [12, 13],
    [
      "Fahrenheit para Celsius::Ler Fahrenheit e calcular Celsius.",
      "Média ponderada::Ler três notas e calcular média ponderada com pesos 2, 3 e 5.",
    ],
  );
  add(
    "faccat",
    "5–6",
    [14, 15, 16, 17, 18, 19, 20, 21],
    [
      "Maior que 10::Ler valor e informar se é maior que 10.",
      "Positivo ou negativo::Ler valor e informar se é positivo ou negativo; zero é positivo.",
      "Compra de maçãs::Calcular compra: R$ 1,30 abaixo de 12, R$ 1,00 a partir de 12.",
      "Média e aprovação::Ler duas notas, calcular média e informar aprovação com média mínima 6.",
      "Direito ao voto::Ler ano atual e nascimento e informar se pode votar.",
      "Maior de dois::Ler dois valores diferentes e escrever o maior.",
      "Ordem crescente::Ler dois valores diferentes e escrevê-los em ordem crescente.",
      "Duração de xadrez::Ler hora inicial e final de um jogo e calcular duração máxima de 24 horas.",
    ],
  );
  add(
    "faccat",
    "5–6",
    [22, 23, 24, 25, 26],
    [
      "Hora extra::Calcular salário mensal com acréscimo de 50% nas horas acima de 40 semanais.",
      "Peso ideal::Ler nome, altura e sexo e calcular peso ideal pelas fórmulas informadas.",
      "Salário vendedor::Calcular salário com comissão de 3% até R$ 1.500 e 5% no excedente.",
      "Saldo bancário::Ler conta, saldo, débito e crédito; calcular saldo atual e informar positivo ou negativo.",
      "Controle de estoque::Calcular estoque médio e informar se deve efetuar compra.",
    ],
  );
  add(
    "faccat",
    "6–8",
    [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
    [
      "Positivo, negativo ou zero::Ler valor e informar se é positivo, negativo ou zero.",
      "Maior de três::Ler três valores diferentes e escrever o maior.",
      "Soma dos dois maiores::Ler três valores diferentes e somar os dois maiores.",
      "Ordem crescente::Ler três valores diferentes e escrevê-los em ordem crescente.",
      "Forma triângulo::Ler três lados e informar se formam triângulo.",
      "Placar do jogo::Ler nomes de dois times e gols; informar vencedor ou empate.",
      "Comparação de dois números::Informar se iguais, primeiro maior ou segundo maior.",
      "Teste de mesa::Completar teste de mesa do algoritmo com x, y, z e resposta.",
      "Combustível::Calcular valor a pagar por álcool ou gasolina conforme tabela de descontos.",
      "Idades::Somar homem mais velho com mulher mais nova e multiplicar homem mais novo por mulher mais velha.",
      "Fruteira::Calcular compra de morangos e maçãs, incluindo desconto de 10% nas condições dadas.",
      "Acesso por código::Validar código 1234 e senha 9999, informando acesso permitido ou erro.",
    ],
  );
  add(
    "faccat",
    "8",
    [39],
    [
      "Expressões lógicas::Para A=V, B=V e C=F, avaliar as expressões lógicas apresentadas no exercício.",
    ],
  );
})();
