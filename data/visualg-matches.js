window.VISUALG_MATCHES = {
  
  "manzano-25-A": {
    title: "Celsius para Fahrenheit",
    prompt:
      "Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. Fórmula: F ← (9 * C + 160) / 5.",
    code: `Algoritmo "manzano_Ex7-L01A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê uma temperatura em graus Celsius e
//               apresenta em graus Fahrenheit
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   celsius, fahrenheit : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("                         ---  ---                        ")
   Escreval("")

   Escreval("   --- Conversor Celsius (°C) para Fahrenheit (°F) ---   ")
   Escreval("")

   Escreva("Digite a temperatura em graus Celsius (°C): ")
   Leia(celsius)
   Escreval("")

   fahrenheit <- (9 * celsius + 160) / 5

   Escreval("A conversão da temperatura Celsius em Fahrenheit é:", fahrenheit, "°F")
   Escreval("")

   Escreval("                         ---  ---                        ")

Fimalgoritmo`,
  },
  
  "manzano-25-B": {
    title: "Fahrenheit para Celsius",
    prompt:
      "Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. Fórmula: C ← (F - 32) * (5/9).",
    code: `Algoritmo "manzano_Ex7-L01B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê uma temperatura em graus Fahrenheit e
//               apresenta em graus Celsius
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   celsius, fahrenheit : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("                         ---  ---                        ")
   Escreval("")

   Escreval("   --- Conversor Fahrenheit (°F) para Celsius (°C) ---   ")
   Escreval("")

   Escreva("Digite a temperatura em graus Fahrenheit (°F): ")
   Leia(fahrenheit)
   Escreval("")

   celsius <- (fahrenheit - 32) * (5 / 9)

   Escreval("A conversão da temperatura Fahrenheit em Celsius é:", celsius, "°C")
   Escreval("")

   Escreval("                         ---  ---                        ")

Fimalgoritmo`,
  },
  
  "manzano-25-C": {
    title: "Volume da lata de óleo",
    prompt:
      "Calcular e apresentar o volume de uma lata de óleo: VOLUME ← π * RAIO² * ALTURA.",
    code: `Algoritmo "manzano_Ex7-L01C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula e apresenta o valor do volume de uma lata de óleo
//               utilizando a fórmula: volume <- pi * raio^2 * altura
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   volume, raio, altura : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("            ---  ---             ")
   Escreval("")

   Escreval("   --- Volume Lata de Óleo ---   ")
   Escreval("")

   Escreva("Informe a altura: ")
   Leia(altura)
   Escreval("")
   
   Escreva("Informe o raio: ")
   Leia(raio)
   Escreval("")

   volume <- pi * raio^2 * altura

   Escreval("O volume da lata de óleo é de: ", volume:4:2)
   Escreval("")

   Escreval("            ---  ---             ")

Fimalgoritmo`,
  },
  
  "manzano-25-D": {
    title: "Gasto de combustível",
    prompt:
      "Calcular os litros gastos em uma viagem por um automóvel que faz 12 km/l. Ler tempo e velocidade; DISTANCIA ← TEMPO * VELOCIDADE e LITROS_USADOS ← DISTANCIA / 12.",
    code: `Algoritmo "manzano_Ex7-L01D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Este processo descreve o cálculo automatizado do consumo de
//               combustível de um veículo que rende 12 km/l, baseando-se no
//               tempo de viagem e na velocidade média informados pelo usuário.
//               O objetivo principal é calcular e apresentar de forma clara
//               a distância percorrida e o total de litros utilizados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   temp : inteiro
   velocidade, distancia, litrosUsados  : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("              ---  ---              ")
   Escreval("")

   Escreval("   --- Consumo de Combustível ---   ")
   Escreval("")

   Escreva("Informe o tempo gasto no percurso (Ex: 2 horas): ")
   Leia(temp)
   Escreval("")

   Escreva("Informe a velocidade média utilizada: ")
   Leia(velocidade)
   Escreval("")

   distancia <- temp * velocidade
   litrosUsados <- distancia / 12
   
   Escreval("              ---  ---              ")

   Escreva("A velocidade média utilizada foi de: ", velocidade, "Km/h")
   Escreval("")
   
   Escreva("O tempo gasto no percurso foi de: ", temp, "h")
   Escreval("")

   Escreva("A distância percorrida foi de: ", distancia, "Km")
   Escreval("")
   
   Escreva("A quantidade de litros utilizados foi de: ", litrosUsados, "L")
   Escreval("")

   Escreval("              ---  ---              ")

Fimalgoritmo`,
  },
  
  "manzano-25-E": {
    title: "Prestação em atraso",
    prompt:
      "Calcular uma prestação em atraso: PRESTACAO ← VALOR + (VALOR * TAXA / 100) * TEMPO.",
    code: `Algoritmo "manzano_Ex7-L01E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Efetua o cálculo e a apresenta o valor de uma prestação em
//               atraso, utilizando a fórmula
//               PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   prestacao, valor, taxa, diferenca : real
   temp : inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Prestação em Atraso --")
   Escreval("")

   Escreva("Digite o valor da prestação: R$ ")
   Leia(valor)
   Escreval("")

   Escreva("Digite a taxa da prestação: ")
   Leia(taxa)
   Escreval("")

   Escreva("Digite o tempo de atraso (em meses): ")
   Leia(temp)
   Escreval("")

   prestacao <- valor + (valor * taxa / 100) * temp
   diferenca <- prestacao - valor
   
   Escreval("O valor em atraso será de: R$", prestacao:6:2)
   Escreval("O valor do juros é de: R$", diferenca:6:2)

Fimalgoritmo`,
  },
  
  "manzano-25-F": {
    title: "Troca de valores",
    prompt:
      "Ler dois valores A e B, trocar seus valores e apresentá-los após a troca.",
    code: `Algoritmo "manzano_Ex7-L01F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois valores (inteiros, reais ou caracteres) para as
//               variáveis A e B, e efetua a troca dos valores de forma que
//               a variável A passe a possuir o valor da variável B e
//               a variável B passe a possuir o valor da variável A.
//               Apresenta os valores trocados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, auxiliar: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Troca de Valores --")
   Escreval("")

   Escreva("Informe o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Informe o valor de B: ")
   Leia(b)
   Escreval("")

   auxiliar <- a
   a <- b
   b <- auxiliar

   Escreval("A =", a, " | " ,"B =", b)

Fimalgoritmo`,
  },
  
  "manzano-25-G": {
    title: "Propriedade distributiva",
    prompt:
      "Ler A, B, C e D e apresentar as adições e multiplicações de cada par: A com B, C e D; B com C e D; C com D.",
    code: `Algoritmo "manzano_Ex7-L01G"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê quatro números inteiros e apresentar o resultado da adição
//               e multiplicação, baseando-se na utilização do conceito da
//               propriedade distributiva. Ou seja, se forem lidas as variáveis
//               A, B, C, e D, devem ser somadas e multiplicadas A com B,
//               A com C e A com D. Depois B com C, B com D e por fim C com D.
//               Perceba que será necessário efetuar seis operações de adição e
//               seis operações de multiplicação e apresentar doze resultados
//               de saída.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c, d: inteiro
   somAB, somAC, somAD, somBC, somBD, somCD: inteiro
   multAB, multAC, multAD, multBC, multBD, multCD: inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Propriedade Distributiva --")
   Escreval("")

   Escreva("Informe o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Informe o valor de B: ")
   Leia(b)
   Escreval("")
   
    Escreva("Informe o valor de C: ")
   Leia(c)
   Escreval("")

   Escreva("Informe o valor de D: ")
   Leia(d)
   Escreval("")
   
   // Variavéis de soma
   
   somAB <- a + b
   somAC <- a + c
   somAD <- a + d
   somBC <- b + c
   somBD <- b + d
   somCD <- c + d
   
   // Variavéis de multiplicação
   
   multAB <- a * b
   multAC <- a * c
   multAD <- a * d
   multBC <- b * c
   multBD <- b * d
   multCD <- c * d

   Escreval("A + B =", somAB, " | " ,"A * B =", multAB)
   Escreval("A + C =", somAC, " | " ,"A * C =", multAC)
   Escreval("A + D =", somAD, " | " ,"A * D =", multAD)
   Escreval("B + C =", somBC, " | " ,"B * C =", multBC)
   Escreval("B + D =", somBD, " | " ,"B * D =", multBD)
   Escreval("C + D =", somCD, " | " ,"C * D =", multCD)
   
Fimalgoritmo`,
  },
  
  "manzano-25-H": {
    title: "Volume da caixa retangular",
    prompt:
      "Calcular e apresentar o volume de uma caixa retangular: VOLUME ← COMPRIMENTO * LARGURA * ALTURA.",
    code: `Algoritmo "manzano_Ex7-L01H"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Elabora um programa que calcule e apresente o volume de uma
//               caixa retangular, por meio da fórmula:
//               VOLUME <- COMPRIMENTO * LARGURA * ALTURA.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   comprimento, largura, altura, volume: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Volume da Caixa Retangular --")
   Escreval("")

   Escreva("Informe o comprimento do retângulo: ")
   Leia(comprimento)
   Escreval("")

   Escreva("Informe a largura do retângulo: ")
   Leia(largura)
   Escreval("")

   Escreva("Informe a altura do retângulo: ")
   Leia(altura)
   Escreval("")

   volume <- comprimento * largura * altura

   Escreval("O volume da caixa retangular é:", volume)

Fimalgoritmo`,
  },
  
  "manzano-25-I": {
    title: "Quadrado da diferença",
    prompt:
      "Ler dois inteiros A e B e imprimir o quadrado da diferença do primeiro pelo segundo.",
    code: `Algoritmo "manzano_Ex7-L01I"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois inteiros (variáveis A e B) e imprime o resultado
//               do quadrado da diferença do primeiro valor pelo segundo.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, diferenca: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Quadrado Da Diferença --")
   Escreval("")

   Escreva("Digite o valor para a variável A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor para a variável B: ")
   Leia(B)
   Escreval("")

   diferenca <- (a - b) ^ 2

   Escreval("O resultado do quadrado da diferença é: ", diferenca)

Fimalgoritmo`,
  },
  
  "manzano-25-J": {
    title: "Dólar para real",
    prompt:
      "Converter um valor em dólar para real, solicitando a cotação do dólar e a quantidade de dólares.",
    code: `Algoritmo "manzano_Ex7-L01J"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Conversão em real de um valor lido em dólar
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   dolar, reais, cotacao: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Conversão em real de um valor lido em dólar --")
   Escreval("")

   Escreva("Digite a cotação atual do dólar (Ex: 5.25): ")
   Leia(cotacao)
   Escreval("")

   Escreva("Digite a quantidade de dólares que você possui: U$ ")
   Leia(dolar)
   Escreval("")

   reais <- cotacao * dolar

   Escreval("A quantidade de dólares em reais que possui é: R$", reais:4:2)

Fimalgoritmo`,
  },
  
  "manzano-25-K": {
    title: "Real para dólar",
    prompt:
      "Converter um valor em real para dólar, solicitando a cotação do dólar e a quantidade de reais.",
    code: `Algoritmo "manzano_Ex7-L01K"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Conversão em dólar de um valor lido em real
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   dolar, reais, cotacao: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Conversão em dólar de um valor lido em real --")
   Escreval("")

   Escreva("Digite a cotação atual do dólar (Ex: 5.25): ")
   Leia(cotacao)
   Escreval("")

   Escreva("Digite a quantidade de reais que você possui: R$")
   Leia(reais)
   Escreval("")

   dolar <- reais / cotacao

   Escreval("A quantidade de reais em dólares que possui é: U$", dolar:4:2)

Fimalgoritmo`,
  },
  
  "manzano-25-L": {
    title: "Soma dos quadrados",
    prompt: "Ler A, B e C e apresentar a soma dos quadrados dos três valores.",
    code: `Algoritmo "manzano_Ex7-L01L"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O programa efetua a leitura de três valores (A, B e C)
//               e apresenta como resultado final à soma dos quadrados dos
//               três valores lidos.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   A, B, C, valorFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Soma Dos Quadrados --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(B)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(C)
   Escreval("")

   valorFinal <- (A ^ 2) + (B ^ 2) + (C ^ 2)

   Escreval("A soma dos quadrados dos três valores é:", valorFinal)

Fimalgoritmo`,
  },
  
  "manzano-25-M": {
    title: "Quadrado da soma",
    prompt: "Ler A, B e C e apresentar o quadrado da soma dos três valores.",
    code: `Algoritmo "manzano_Ex7-L01M"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O programa efetua a leitura de três valores (A, B e C)
//               e apresenta como resultado final o quadrado da soma dos três
//               valores lidos.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   A, B, C, valorFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Quadrado Da Soma --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(B)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(C)
   Escreval("")

   valorFinal <- (A + B + C) ^ 2

   Escreval("O quadrado da soma dos três valores é:", valorFinal)

Fimalgoritmo`,
  },
  
  "manzano-26-A": {
    title: "Produto e soma",
    prompt: "Ler quatro valores inteiros A, B, C e D. Apresentar o produto do primeiro pelo terceiro e a soma do segundo com o quarto.",
    code: `Algoritmo "manzano_Extra-Ex1A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Programa efetua a leitura de quatro valores inteiros
//               (variáveis A, B, C e D). Ao final o programa apresenta o
//               resultado do produto (variável P) do primeiro com o terceiro
//               valor, e o resultado do produto (variável P) do primeiro
//               com o terceiro valor, e o resultado da soma (variável S)
//               do segundo com o quarto valor.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   a, b, c, d, variavelP, variavelS: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Produtos E Somas --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   Escreva("Digite o valor de D: ")
   Leia(d)
   Escreval("")

   variavelP <- a * c
   variavelS <- b + d

   Escreval("O produto do 1° valor (",a," ) pelo 3° valor (",c," ) (P) é: ", variavelP)
   Escreval("A soma do 2° valor (",b," ) com o 4° valor (",d," ) (S) é: ", variavelS)

Fimalgoritmo`,
  },
  
  "manzano-26-B": {
    title: "Reajuste salarial",
    prompt: "Ler o salário mensal e o percentual de reajuste de um trabalhador. Apresentar o novo salário.",
    code: `Algoritmo "manzano_Extra-Ex1B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o valor correspondente ao salário mensal (variável SM)
//               de um trabalhador e também o valor do percentual de reajuste
//               (variável PR) a ser atribuído. Apresenta o valor do
//               novo salário (variável NS).
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   variavelSalarioMensal, variavelPercentualReajuste: real
   variavelNovoSalario, variavelReajuste: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Reajuste Salarial --")
   Escreval("")

   Escreva("Informe o valor do seu salário mensal: ")
   Leia(variavelSalarioMensal)
   Escreval("")

   Escreva("Informe o valor do porcentual de reajuste (%): ")
   Leia(variavelPercentualReajuste)
   Escreval("")

   variavelReajuste <- variavelSalarioMensal * (variavelPercentualReajuste / 100)
   variavelNovoSalario <- variavelSalarioMensal + variavelReajuste

   Escreval("O valor do reajuste foi de: R$", variavelReajuste)
   Escreval("")

   Escreval("O valor do novo salário é: R$", variavelNovoSalario)

Fimalgoritmo`,
  },
  
  "manzano-26-C": {
    title: "Eleição sindical",
    prompt: "Ler votos válidos de três candidatos, votos nulos e em branco; apresentar total de eleitores e os percentuais solicitados.",
    code: `Algoritmo "manzano_Extra-Ex1C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apuração De Votos de uma Eleição
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   votosA, votosB, votosC : inteiro
   votosNulos, votosBranco, totalValidos, totalEleitores : inteiro
   percentualValidos, percentualA, percentualB, percentualC: real
   percentualNulos, percentualBranco : real

Inicio
   // Entrada de dados
   Escreval("-- Apuração de Votos --")
   Escreval("")

   Escreva("Digite os votos válidos do Candidato A: ")
   Leia(votosA)
   Escreval("")

   Escreva("Digite os votos válidos do Candidato B: ")
   Leia(votosB)
   Escreval("")

   Escreva("Digite os votos válidos do Candidato C: ")
   Leia(votosC)
   Escreval("")

   Escreva("Digite a quantidade de votos nulos: ")
   Leia(votosNulos)
   Escreval("")

   Escreva("Digite a quantidade de votos em branco: ")
   Leia(votosBranco)
   Escreval("")

   // Processamento
   totalValidos <- votosA + votosB + votosC
   totalEleitores <- totalValidos + votosNulos + votosBranco

   // Cálculo dos percentuais
   percentualValidos <- (totalValidos / totalEleitores) * 100
   percentualA <- (votosA / totalEleitores) * 100
   percentualB <- (votosB / totalEleitores) * 100
   percentualC <- (votosC / totalEleitores) * 100
   percentualNulos <- (votosNulos / totalEleitores) * 100
   percentualBranco <- (votosBranco / totalEleitores) * 100

   // Saída de dados
   Escreval("-- Resultado da Apuração Dos Votos --")
   Escreval("")

   Escreval("Total de eleitores: ", totalEleitores)
   Escreval("Percentual de votos válidos totais: ", percentualValidos:1:2, "%")
   Escreval("Percentual do Candidato A: ", percentualA:1:2, "%")
   Escreval("Percentual do Candidato B: ", percentualB:1:2, "%")
   Escreval("Percentual do Candidato C: ", percentualC:1:2, "%")
   Escreval("Percentual de votos nulos: ", percentualNulos:1:2, "%")
   Escreval("Percentual de votos em branco: ", percentualBranco:1:2, "%")

Fimalgoritmo`,
  },
  
  "manzano-46-A": {
    title: "Tabuada",
    prompt: "Apresentar a tabuada de multiplicar, de 1 a 10, de um número qualquer.",
    code: `Algoritmo "manzano_Ex5.1.1-L03A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a tabuada de multiplicar, de 1 a 10,
//               de um número qualquer.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   numero, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Tabuada do 1 ao 10 --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   contadora <- 1

   enquanto (contadora <= 10) faca
      resultado <- contadora * numero
      Escreval(numero," x",contadora," =",resultado)

      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },
  
  "manzano-46-B": {
    title: "Soma de 1 a 100",
    prompt: "Apresentar o total da soma dos cem primeiros números inteiros.",
    code: `Algoritmo "manzano_Ex5.1.1-L03B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o total da soma dos cem primeiros números inteiros.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   soma, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma de 1 a 100 --")
   Escreval("")

   contadora <- 1
   soma <- 0

   enquanto (contadora <= 100) faca
      soma <- soma + contadora
      contadora <- contadora + 1
   fimenquanto

   Escreval("O resultado da soma dos cem primeiros números inteiros é: ", soma)

Fimalgoritmo`,
  },
  
  "manzano-46-C": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares de 1 até 500.",
    code: `Algoritmo "manzano_Ex5.1.1-L03C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o somatório dos valores pares de 1 até 500.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   soma, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma dos pares --")
   Escreval("")

   contadora <- 1
   soma <- 0

   enquanto (contadora <= 500) faca

      se (contadora mod 2 = 0) entao
         soma <- soma + contadora
      fimse

      contadora <- contadora + 1
   fimenquanto

   Escreval("O resultado da soma dos pares de 1 a 500 é:",soma)

Fimalgoritmo`,
  },
  
    "manzano-46-D": {
    title: "Números ímpares de 0 a 20",
    prompt: "Apresentar todos os valores inteiros ímpares situados na faixa de 0 a 20, verificando dentro da repetição se cada número é ímpar.",
    code: `Algoritmo "manzano_Ex5.1.1-L03D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta todos os valores inteiros ímpares situados na faixa
//               de 0 a 20, verificando dentro da repetição se cada número é
//               ímpar.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Ímpares de 0 a 20 --")
   Escreval("")

   contadora <- 0

   Escreval("Os valores inteiros ímpares de 0 a 20 são:")
   Escreval("")

   enquanto (contadora <= 20) faca

      se (contadora mod 2 = 1) entao
         Escreval(contadora)
      fimse

      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-E": {
    title: "Potências de 3",
    prompt: "Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.1.1-L03E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta as potências de 3 para expoentes de 0 a 15
//               sem usar o operador ^.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   resultado, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potências de 3 --")
   Escreval("")

   resultado <- 1
   contadora <- 0

   enquanto (contadora <= 15) faca
      Escreval("3 elevado a",contadora," =",resultado)
      resultado <- resultado * 3
      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-F": {
    title: "Potência de uma base",
    prompt: "Calcular o resultado de uma potência utilizando uma base e um expoente informados pelo usuário, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.1.1-L03F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula o resultado de uma potência utilizando uma base e um
//               expoente informados pelo usuário, sem utilizar o operador
//               de exponenciação (^)
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   base, expoente, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potência de base qualquer --")
   Escreval("")

   Escreva("Digite a base: ")
   Leia(base)
   Escreval("")

   Escreva("Digite o expoente: ")
   Leia(expoente)
   Escreval("")

   resultado <- 1
   contadora <- expoente

   enquanto (contadora > 0) faca
      resultado <- resultado * base
      contadora <- contadora - 1
   fimenquanto

   Escreval(base," elevado a",expoente," =",resultado)

Fimalgoritmo`,
  },

  "manzano-46-G": {
    title: "Série de Fibonacci",
    prompt: "Apresentar a série de Fibonacci até o décimo quinto termo, iniciando com os valores 1 e 1.",
    code: `Algoritmo "manzano_Ex5.1.1-L03G"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a série de Fibonacci até o décimo quinto termo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   numeroA, numeroB, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Série de Fibonacci --")
   Escreval("")

   numeroA <- 1
   numeroB <- 1
   contadora <- 1

   Escreval(numeroA)
   Escreval(numeroB)

   enquanto (contadora <= 13) faca
      resultado <- numeroA + numeroB

      Escreval(resultado)

      numeroA <- numeroB
      numeroB <- resultado

      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-H": {
    title: "Conversão Celsius para Fahrenheit",
    prompt: "Apresentar a conversão de temperaturas de Celsius para Fahrenheit, de 10 em 10 graus, iniciando em 10°C e terminando em 100°C.",
    code: `Algoritmo "manzano_Ex5.1.1-L03H"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a conversão de 10°C a 100°C, de 10 em 10 graus.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   celsius: inteiro
   fahrenheit: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Conversão Celsius para Fahrenheit --")
   Escreval("")

   celsius <- 10

   enquanto (celsius <= 100) faca
      fahrenheit <- (9 * celsius + 160) / 5

      Escreval("A conversão de",celsius,"°C para fahrenheit é de:",fahrenheit,"°F")

      celsius <- celsius + 10
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-I": {
    title: "Soma e média de 10 valores",
    prompt: "Ler 10 valores numéricos e apresentar ao final o somatório e a média aritmética dos valores informados.",
    code: `Algoritmo "manzano_Ex5.1.1-L03I"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê 10 valores numéricos e apresenta ao final o somatório
//               e a média aritmética dos valores informados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   valor, soma, media: real
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma e Média de 10 Valores --")
   Escreval("")

   contadora <- 1
   soma <- 0

   enquanto (contadora <= 10) faca
      Escreva("Digite o valor ", contadora, ": ")
      Leia(valor)
      Escreval("")

      soma <- soma + valor
      contadora <- contadora + 1
   fimenquanto

   media <- soma / 10

   Escreval("O somatório dos valores lidos é:", soma)
   Escreval("A média aritmética dos valores lidos é:", media)

Fimalgoritmo`,
  },

  "manzano-46-J": {
    title: "Soma e média dos pares",
    prompt: "Apresentar o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.",
    code: `Algoritmo "manzano_Ex5.1.1-L03J"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o resultado da soma e da média aritmética dos
//               valores pares situados na faixa numérica de 50 a 70.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, soma, quantidade: inteiro
   media: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma e Média dos Pares de 50 a 70 --")
   Escreval("")

   contadora <- 50
   soma <- 0
   quantidade <- 0

   enquanto (contadora <= 70) faca

      se (contadora mod 2 = 0) entao
         soma <- soma + contadora
         quantidade <- quantidade + 1
      fimse

      contadora <- contadora + 1
   fimenquanto

   media <- soma / quantidade

   Escreval("A soma dos valores pares de 50 a 70 é:", soma)
   Escreval("A média aritmética dos valores pares de 50 a 70 é:", media)

Fimalgoritmo`,
  },

  "manzano-46-K": {
    title: "Área total da residência",
    prompt: "Calcular a área total de uma residência, lendo o nome, a largura e o comprimento de cada cômodo e acumulando as áreas até o usuário informar que não deseja continuar.",
    code: `Algoritmo "manzano_Ex5.1.1-L03K"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula a área total de uma residência, lendo o nome, a
//               largura e o comprimento de cada cômodo e acumulando as
//               áreas até o usuário informar que não deseja continuar.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   nomeComodo: caractere
   largura, comprimento, areaComodo, areaTotal: real
   resposta: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Área Total da Residência --")
   Escreval("")

   areaTotal <- 0
   resposta <- "S"

   enquanto (resposta = "S") ou (resposta = "s") faca
      Escreva("Digite o nome do cômodo: ")
      Leia(nomeComodo)
      Escreval("")

      Escreva("Digite a largura do cômodo: ")
      Leia(largura)
      Escreval("")

      Escreva("Digite o comprimento do cômodo: ")
      Leia(comprimento)
      Escreval("")

      areaComodo <- largura * comprimento
      areaTotal <- areaTotal + areaComodo

      Escreval("A área do cômodo ", nomeComodo, " é de:", areaComodo)
      Escreval("")

      Escreva("Deseja continuar (S/N)? ")
      Leia(resposta)
      Escreval("")
   fimenquanto

   Escreval("A área total da residência é de:", areaTotal)

Fimalgoritmo`,
  },

  "manzano-46-L": {
    title: "Maior e menor valor",
    prompt: "Ler valores inteiros positivos até que seja informado um valor negativo e, ao final, apresentar o maior e o menor valor informado.",
    code: `Algoritmo "manzano_Ex5.1.1-L03L"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê valores inteiros positivos até que seja informado um
//               valor negativo e, ao final, apresenta o maior e o menor
//               valor informado.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   numero, maior, menor: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Maior e Menor Valor --")
   Escreval("")

   Escreva("Digite um número positivo (negativo para encerrar): ")
   Leia(numero)
   Escreval("")

   maior <- numero
   menor <- numero

   enquanto (numero >= 0) faca

      se (numero > maior) entao
         maior <- numero
      fimse

      se (numero < menor) entao
         menor <- numero
      fimse

      Escreva("Digite um número positivo (negativo para encerrar): ")
      Leia(numero)
      Escreval("")
   fimenquanto

   Escreval("O maior número informado foi:", maior)
   Escreval("O menor número informado foi:", menor)

Fimalgoritmo`,
  },
    "manzano-50-A": {
    title: "Quadrados de 15 a 200",
    prompt: "Apresentar os quadrados dos números inteiros de 15 até 200.",
    code: `Algoritmo "manzano_Ex5.2.1-L04A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta os quadrados dos números inteiros de 15 até 200.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero, quadrado: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Quadrados de 15 a 200 --")
   Escreval("")

   numero <- 15

   repita
      quadrado <- numero ^ 2
      Escreval("O quadrado de", numero," é:", quadrado)

      numero <- numero + 1
   ate (numero > 200)

Fimalgoritmo`,
  },

  "manzano-50-B": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares existentes na faixa de 1 até 500.",
    code: `Algoritmo "manzano_Ex5.2.1-L04B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o somatório dos valores pares existentes na
//               faixa de 1 até 500.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, soma: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma dos Pares de 1 a 500 --")
   Escreval("")

   contadora <- 1
   soma <- 0

   repita
      se (contadora mod 2 = 0) entao
         soma <- soma + contadora
      fimse

      contadora <- contadora + 1
   ate (contadora > 500)

   Escreval("O resultado da soma dos pares de 1 a 500 é:", soma)

Fimalgoritmo`,
  },

  "manzano-50-C": {
    title: "Divisíveis por 4",
    prompt: "Apresentar todos os números menores que 200 que sejam divisíveis por 4, verificando essa condição dentro da repetição.",
    code: `Algoritmo "manzano_Ex5.2.1-L04C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta todos os números menores que 200 que sejam
//               divisíveis por 4, verificando essa condição dentro da
//               repetição.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Divisíveis por 4 Menores que 200 --")
   Escreval("")

   contadora <- 1

   repita
      se (contadora mod 4 = 0) entao
         Escreval(contadora)
      fimse

      contadora <- contadora + 1
   ate (contadora >= 200)

Fimalgoritmo`,
  },

  "manzano-50-D": {
    title: "Grãos de trigo no tabuleiro",
    prompt: "Calcular o total de grãos de trigo em um tabuleiro de xadrez, começando com 1 grão e dobrando a quantidade a cada quadro até o 64º quadro.",
    code: `Algoritmo "manzano_Ex5.2.1-L04D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula o total de grãos de trigo em um tabuleiro de
//               xadrez, começando com 1 grão e dobrando a quantidade a
//               cada quadro até o 64º quadro.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   quadro: inteiro
   graos, total: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Grãos de Trigo no Tabuleiro --")
   Escreval("")

   quadro <- 1
   graos <- 1
   total <- 0

   repita
      total <- total + graos
      graos <- graos * 2

      quadro <- quadro + 1
   ate (quadro > 64)

   Escreval("O total de grãos de trigo no tabuleiro é:", total)

Fimalgoritmo`,
  },

  "manzano-50-E": {
    title: "Soma de fatoriais",
    prompt: "Ler 15 valores inteiros e apresentar ao final o somatório dos fatoriais de cada valor informado.",
    code: `Algoritmo "manzano_Ex5.2.1-L04E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê 15 valores inteiros e apresenta ao final o somatório
//               dos fatoriais de cada valor informado.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, valor, multiplicador, fatorial: inteiro
   somaFatoriais: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma de Fatoriais --")
   Escreval("")

   contadora <- 1
   somaFatoriais <- 0

   repita
      Escreva("Digite o valor ",contadora, ": ")
      Leia(valor)
      Escreval("")

      fatorial <- 1
      multiplicador <- 1

      repita
         fatorial <- fatorial * multiplicador
         multiplicador <- multiplicador + 1
      ate (multiplicador > valor)

      somaFatoriais <- somaFatoriais + fatorial

      contadora <- contadora + 1
   ate (contadora > 15)

   Escreval("A soma dos fatoriais dos valores lidos é: ", somaFatoriais)

Fimalgoritmo`,
  },

  "manzano-50-F": {
    title: "Soma e média de valores positivos",
    prompt: "Ler valores numéricos enquanto forem positivos e apresentar ao final o somatório, a média aritmética e a quantidade de valores lidos. O processo deve terminar quando for informado um valor negativo.",
    code: `Algoritmo "manzano_Ex5.2.1-L04F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê valores numéricos enquanto forem positivos e apresenta
//               ao final o somatório, a média aritmética e a quantidade
//               de valores lidos. O processo termina quando for informado
//               um valor negativo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero, soma, media: real
   quantidade: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma e Média de Valores Positivos --")
   Escreval("")

   soma <- 0
   quantidade <- 0

   repita
      Escreva("Digite um número positivo (negativo para encerrar): ")
      Leia(numero)
      Escreval("")

      se (numero >= 0) entao
         soma <- soma + numero
         quantidade <- quantidade + 1
      fimse
   ate (numero < 0)

   media <- soma / quantidade

   Escreval("A somatória dos números positivos lidos é:", soma)
   Escreval("A quantidade de números lidos foi:", quantidade)
   Escreval("A média aritmética dos números lidos é:", media)

Fimalgoritmo`,
  },

  "manzano-50-G": {
    title: "Fatorial dos números ímpares",
    prompt: "Apresentar o fatorial dos valores ímpares situados na faixa numérica de 1 a 10.",
    code: `Algoritmo "manzano_Ex5.2.1-L04G"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o fatorial dos valores ímpares situados na
//               faixa numérica de 1 a 10.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, multiplicador, fatorial: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Fatorial dos Números Ímpares de 1 a 10 --")
   Escreval("")

   contadora <- 1

   repita
      se (contadora mod 2 = 1) entao
         fatorial <- 1
         multiplicador <- 1

         repita
            fatorial <- fatorial * multiplicador
            multiplicador <- multiplicador + 1
         ate (multiplicador > contadora)

         Escreval("O fatorial de", contadora," é:", fatorial)
      fimse

      contadora <- contadora + 1
   ate (contadora > 10)

Fimalgoritmo`,
  },

  "manzano-50-H": {
    title: "Área total da residência",
    prompt: "Calcular a área total de uma residência lendo o nome, a largura e o comprimento de cada cômodo e acumulando as áreas até o usuário informar que não deseja continuar.",
    code: `Algoritmo "manzano_Ex5.2.1-L04H"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula a área total de uma residência lendo o nome, a
//               largura e o comprimento de cada cômodo e acumulando as
//               áreas até o usuário informar que não deseja continuar.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   nomeComodo: caractere
   largura, comprimento, areaComodo, areaTotal: real
   resposta: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Área Total da Residência --")
   Escreval("")

   areaTotal <- 0

   repita
      Escreva("Digite o nome do cômodo: ")
      Leia(nomeComodo)
      Escreval("")

      Escreva("Digite a largura do cômodo: ")
      Leia(largura)
      Escreval("")

      Escreva("Digite o comprimento do cômodo: ")
      Leia(comprimento)
      Escreval("")

      areaComodo <- largura * comprimento
      areaTotal <- areaTotal + areaComodo

      Escreval("A área do cômodo ", nomeComodo, " é de:", areaComodo)
      Escreval("")

      Escreva("Deseja continuar (S/N)? ")
      Leia(resposta)
      Escreval("")
   ate (resposta = "N") ou (resposta = "n")

   Escreval("A área total da residência é de:", areaTotal)

Fimalgoritmo`,
  },

  "manzano-50-I": {
    title: "Maior e menor valor",
    prompt: "Ler valores inteiros positivos até que seja informado um valor negativo e, ao final, apresentar o maior e o menor valor informado.",
    code: `Algoritmo "manzano_Ex5.2.1-L04I"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê valores inteiros positivos até que seja informado um
//               valor negativo e, ao final, apresenta o maior e o menor
//               valor informado.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero, maior, menor: inteiro
   primeiro: logico

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Maior e Menor Valor --")
   Escreval("")

   primeiro <- verdadeiro

   repita
      Escreva("Digite um número (negativo para encerrar): ")
      Leia(numero)
      Escreval("")

      se (numero >= 0) entao
         se (primeiro = verdadeiro) entao
            maior <- numero
            menor <- numero
            primeiro <- falso
         senao
            se (numero > maior) entao
               maior <- numero
            fimse

            se (numero < menor) entao
               menor <- numero
            fimse
         fimse
      fimse
   ate (numero < 0)

   Escreval("O maior número informado foi:", maior)
   Escreval("O menor número informado foi:", menor)

Fimalgoritmo`,
  },

  "manzano-50-J": {
    title: "Divisão sem operador DIV",
    prompt: "Calcular o resultado inteiro da divisão de dois números utilizando uma estrutura de repetição, sem utilizar o operador DIV.",
    code: `Algoritmo "manzano_Ex5.2.1-L04J"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula o resultado inteiro da divisão de dois números
//               utilizando uma estrutura de repetição, sem utilizar o
//               operador DIV.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   dividendo, divisor, resto, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Divisão Sem Operador DIV --")
   Escreval("")

   Escreva("Digite o dividendo: ")
   Leia(dividendo)
   Escreval("")

   Escreva("Digite o divisor: ")
   Leia(divisor)
   Escreval("")

   resto <- dividendo
   resultado <- 0

   repita
      resto <- resto - divisor
      resultado <- resultado + 1
   ate (resto < divisor)

   Escreval(dividendo," dividido por",divisor," é igual a:", resultado)

Fimalgoritmo`,
  },
    "manzano-66-A": {
    title: "Quadrados de 15 a 200",
    prompt: "Apresentar os quadrados dos números inteiros de 15 até 200.",
    code: `Algoritmo "manzano_Ex5.6.1-L05A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta os quadrados dos números inteiros de 15 até 200.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numero: inteiro
   quadrado: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Quadrados de 15 a 200 --")
   Escreval("")

   para numero de 15 ate 200 faca
      quadrado <- numero ^ 2
      Escreval("O quadrado de", numero," é:", quadrado)
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-B": {
    title: "Tabuada",
    prompt: "Apresentar a tabuada de multiplicar, de 1 a 10, de um número qualquer.",
    code: `Algoritmo "manzano_Ex5.6.1-L05B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a tabuada de multiplicar, de 1 a 10, de um
//               número qualquer.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numero, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Tabuada do 1 ao 10 --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   para contadora de 1 ate 10 faca
      resultado <- contadora * numero
      Escreval(numero," x",contadora," =",resultado)
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-C": {
    title: "Soma de 1 a 100",
    prompt: "Apresentar o total da soma dos cem primeiros números inteiros.",
    code: `Algoritmo "manzano_Ex5.6.1-L05C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o total da soma dos cem primeiros números
//               inteiros.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   soma, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma de 1 a 100 --")
   Escreval("")

   soma <- 0

   para contadora de 1 ate 100 faca
      soma <- soma + contadora
   fimpara

   Escreval("O resultado da soma dos cem primeiros números inteiros é:", soma)

Fimalgoritmo`,
  },

  "manzano-66-D": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares existentes na faixa de 1 até 500.",
    code: `Algoritmo "manzano_Ex5.6.1-L05D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o somatório dos valores pares existentes na
//               faixa de 1 até 500.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, soma: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma dos Pares de 1 a 500 --")
   Escreval("")

   soma <- 0

   para contadora de 1 ate 500 faca
      se (contadora mod 2 = 0) entao
         soma <- soma + contadora
      fimse
   fimpara

   Escreval("O resultado da soma dos pares de 1 a 500 é:", soma)

Fimalgoritmo`,
  },

  "manzano-66-E": {
    title: "Números ímpares de 0 a 20",
    prompt: "Apresentar todos os valores inteiros ímpares situados na faixa de 0 a 20, verificando dentro da repetição se cada número é ímpar.",
    code: `Algoritmo "manzano_Ex5.6.1-L05E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta todos os valores inteiros ímpares situados na
//               faixa de 0 a 20, verificando dentro da repetição se cada
//               número é ímpar.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Ímpares de 0 a 20 --")
   Escreval("")

   Escreval("Os números inteiros ímpares de 0 a 20 são:")
   Escreval("")

   para contadora de 0 ate 20 faca
      se (contadora mod 2 = 1) entao
         Escreval(contadora)
      fimse
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-F": {
    title: "Números divisíveis por 4",
    prompt: "Apresentar todos os números menores que 200 que sejam divisíveis por 4, verificando essa condição durante a repetição.",
    code: `Algoritmo "manzano_Ex5.6.1-L05F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta todos os números menores que 200 que sejam
//               divisíveis por 4, verificando essa condição durante a
//               repetição.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Divisíveis por 4 Menores que 200 --")
   Escreval("")

   para contadora de 1 ate 199 faca
      se (contadora mod 4 = 0) entao
         Escreval(contadora)
      fimse
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-G": {
    title: "Potências de 3",
    prompt: "Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.6.1-L05G"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta as potências de 3 para expoentes de 0 a 15
//               sem usar o operador ^.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   resultado, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potências de 3 --")
   Escreval("")

   resultado <- 1

   para contadora de 0 ate 15 faca
      Escreval("3 elevado a",contadora," =",resultado)
      resultado <- resultado * 3
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-H": {
    title: "Potência de uma base",
    prompt: "Calcular o resultado de uma potência utilizando uma base e um expoente informados pelo usuário, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.6.1-L05H"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula o resultado de uma potência utilizando uma base e
//               um expoente informados pelo usuário, sem utilizar o
//               operador de exponenciação (^)
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   base, expoente, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potência de Base Qualquer --")
   Escreval("")

   Escreva("Digite a base: ")
   Leia(base)
   Escreval("")

   Escreva("Digite o expoente: ")
   Leia(expoente)
   Escreval("")

   resultado <- 1

   para contadora de 1 ate expoente faca
      resultado <- resultado * base
   fimpara

   Escreval(base," elevado a",expoente," =",resultado)

Fimalgoritmo`,
  },

  "manzano-66-I": {
    title: "Série de Fibonacci",
    prompt: "Apresentar a série de Fibonacci até o décimo quinto termo, iniciando com os valores 1 e 1.",
    code: `Algoritmo "manzano_Ex5.6.1-L05I"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a série de Fibonacci até o décimo quinto termo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numeroA, numeroB, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Série de Fibonacci --")
   Escreval("")

   numeroA <- 1
   numeroB <- 1

   Escreval(numeroA)
   Escreval(numeroB)

   para contadora de 1 ate 12 faca
      resultado <- numeroA + numeroB

      Escreval(resultado)

      numeroA <- numeroB
      numeroB <- resultado
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-J": {
    title: "Conversão Celsius para Fahrenheit",
    prompt: "Apresentar a conversão de temperaturas de Celsius para Fahrenheit, de 10 em 10 graus, iniciando em 10°C e terminando em 100°C.",
    code: `Algoritmo "manzano_Ex5.6.1-L05J"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a conversão de 10°C a 100°C, de 10 em 10 graus.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   celsius: inteiro
   fahrenheit: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Conversão Celsius para Fahrenheit --")
   Escreval("")

   para celsius de 10 ate 100 passo 10 faca
      fahrenheit <- (9 * celsius + 160) / 5

      Escreval("A conversão de",celsius,"°C para fahrenheit é de:",fahrenheit,"°F")
   fimpara

Fimalgoritmo`,
  },

  "manzano-66-K": {
    title: "Fatorial dos números ímpares",
    prompt: "Apresentar o fatorial dos valores ímpares situados na faixa numérica de 1 a 10.",
    code: `Algoritmo "manzano_Ex5.6.1-L05K"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o fatorial dos valores ímpares situados na
//               faixa numérica de 1 a 10.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   contadora, multiplicador, fatorial: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Fatorial dos Números Ímpares de 1 a 10 --")
   Escreval("")

   para contadora de 1 ate 10 faca
      se (contadora mod 2 = 1) entao
         fatorial <- 1

         para multiplicador de 1 ate contadora faca
            fatorial <- fatorial * multiplicador
         fimpara

         Escreval("O fatorial de", contadora," é:", fatorial)
      fimse
   fimpara

Fimalgoritmo`,
  },
  
  "faccat-4-5": {
    title: "Antecessor",
    prompt: "Ler um valor e escrever seu antecessor.",
    code: `Algoritmo "faccat_Pg4-Ex5"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler um valor
//               (do teclado) e escrever (na tela) o seu antecessor.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   numero, antecessor: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Antecessor --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   antecessor <- numero - 1

   Escreval("O antecessor do número digitado é:", antecessor)

Fimalgoritmo`,
  },
  
  "faccat-4-6": {
    title: "Área do retângulo",
    prompt: "Ler base e altura de um retângulo, calcular e escrever a área.",
    code: `Algoritmo "faccat_Pg4-Ex6"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Algoritmo para ler as dimensões de um retângulo
//              (base e altura), calcula e escreve a área do retângulo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   base, altura, area:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Dimensões Retangulo --")
   Escreval("")

   Escreva("Digite o número da base: ")
   Leia(base)
   Escreval("")

   Escreva("Digite o número da altura: ")
   Leia(altura)
   Escreval("")

   area <- base * altura

   Escreval("A área do retângulo é:",area)

Fimalgoritmo`,
  },
  
  "faccat-4-7": {
    title: "Idade em dias",
    prompt: "Ler idade em anos, meses e dias e escrever apenas em dias; ano tem 365 dias e mês 30.",
    code: `Algoritmo "faccat_Pg4-Ex7"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Algoritmo que lâ a idade de uma pessoa expressa em anos,
//               meses e dias e escreva a idade dessa pessoa expressa apenas
//               em dias.
//               Considerar ano com 365 dias e mês com 30 dias.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   anos, meses, dias, totalDias:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Idade em Dias --")
   Escreval("")
   
   Escreva("Digite a quantidade de anos: ")
   Leia(anos)
   Escreval("")
   
   Escreva("Digite a quantidade de meses: ")
   Leia(meses)
   Escreval("")
   
   Escreva("Digite a quantidade de dias: ")
   Leia(dias)
   Escreval("")
   
   totalDias <- (anos * 365) + (meses * 30) + dias
   
   Escreval("Dias desde o seu nascimento:",totalDias)

Fimalgoritmo`,
  },

  "faccat-4-8": {
  title: "Percentual de eleitores",
  prompt: "Ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.",
  code: `Algoritmo "faccat_Pg4-Ex8"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o número total de eleitores de um município, o número
//               de votos brancos, nulos e válidos. Calcula e escreve o
//               percentual que cada um representa em relação ao total
//               de eleitores.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   totalEleitores, votosBrancos, votosNulos, votosValidos: inteiro
   percentualBrancos, percentualNulos, percentualValidos: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Percentual de Eleitores --")
   Escreval("")

   Escreva("Digite o total de eleitores: ")
   Leia(totalEleitores)
   Escreval("")

   Escreva("Digite o número de votos brancos: ")
   Leia(votosBrancos)
   Escreval("")

   Escreva("Digite o número de votos nulos: ")
   Leia(votosNulos)
   Escreval("")

   Escreva("Digite o número de votos válidos: ")
   Leia(votosValidos)
   Escreval("")

   percentualBrancos <- votosBrancos * 100 / totalEleitores
   percentualNulos <- votosNulos * 100 / totalEleitores
   percentualValidos <- votosValidos * 100 / totalEleitores

   Escreval("O percentual de votos brancos é:", percentualBrancos:1:2, "%")
   Escreval("O percentual de votos nulos é:", percentualNulos:1:2, "%")
   Escreval("O percentual de votos válidos é:", percentualValidos:1:2, "%")

Fimalgoritmo`,
},

"faccat-4-9": {
  title: "Reajuste salarial",
  prompt: "Ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.",
  code: `Algoritmo "faccat_Pg4-Ex9"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o salário mensal atual de um funcionário e o percentual
//               de reajuste. Calcula e escreve o valor do novo salário.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   salarioAtual, percentualReajuste, aumento, novoSalario: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Reajuste Salarial --")
   Escreval("")

   Escreva("Digite o salário mensal atual: R$ ")
   Leia(salarioAtual)
   Escreval("")

   Escreva("Digite o percentual de reajuste (%): ")
   Leia(percentualReajuste)
   Escreval("")

   aumento <- percentualReajuste * salarioAtual / 100
   novoSalario <- salarioAtual + aumento

   Escreval("O valor do novo salário é: R$", novoSalario:6:2)
   Escreval("O valor do reajuste salarial é: R$", aumento:6:2)

Fimalgoritmo`,
},

"faccat-4-10": {
  title: "Custo final do carro",
  prompt: "Ler o custo de fábrica de um carro e calcular o custo final ao consumidor, considerando 28% de distribuição e 45% de impostos aplicados ao custo de fábrica.",
  code: `Algoritmo "faccat_Pg4-Ex10"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O custo de um carro novo ao consumidor é a soma do custo
//               de fábrica com a porcentagem do distribuidor (28%) e dos
//               impostos (45%), aplicados ao custo de fábrica. Lê o custo
//               de fábrica, calcula e escreve o custo final ao consumidor.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   custoFabrica, percentualDistribuidor, percentualImpostos, custoFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Custo Final do Carro --")
   Escreval("")

   Escreva("Digite o custo de fábrica: R$ ")
   Leia(custoFabrica)
   Escreval("")

   percentualDistribuidor <- custoFabrica * 28 / 100
   percentualImpostos <- custoFabrica * 45 / 100
   custoFinal <- custoFabrica + percentualDistribuidor + percentualImpostos

   Escreval("O custo final ao consumidor é: R$", custoFinal:6:2)

Fimalgoritmo`,
},

"faccat-4-11": {
  title: "Salário do vendedor",
  prompt: "Ler o número de carros vendidos, o valor total das vendas, o salário fixo e o valor recebido por carro vendido. Calcular e escrever o salário final do vendedor, considerando também 5% sobre o valor das vendas.",
  code: `Algoritmo "faccat_Pg4-Ex11"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Uma revendedora paga a seus vendedores um salário fixo,
//               mais uma comissão fixa por carro vendido e mais 5% do
//               valor das vendas. Lê o número de carros vendidos, o valor
//               total das vendas, o salário fixo e a comissão por carro.
//               Calcula e escreve o salário final do vendedor.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 23/09/2026
Var
   // Seção de Declarações das variáveis
   numeroCarrosVendidos: inteiro
   valorTotalVendas, salarioFixo, valorPorCarro: real
   comissaoVendas, salarioFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Salário do Vendedor --")
   Escreval("")

   Escreva("Digite o número de carros vendidos do(a) vendedor(a): ")
   Leia(numeroCarrosVendidos)
   Escreval("")

   Escreva("Digite o valor total das vendas do(a) vendedor(a): R$ ")
   Leia(valorTotalVendas)
   Escreval("")

   Escreva("Digite o salário fixo do(a) vendedor(a): R$ ")
   Leia(salarioFixo)
   Escreval("")

   Escreva("Digite o valor recebido por carro vendido: R$ ")
   Leia(valorPorCarro)
   Escreval("")

   comissaoVendas <- valorTotalVendas * 5 / 100
   salarioFinal <- salarioFixo + (numeroCarrosVendidos * valorPorCarro) + comissaoVendas

   Escreval("O salário final do vendedor é: R$", salarioFinal:6:2)

Fimalgoritmo`,
},

"faccat-5-12": {
  title: "Fahrenheit para Celsius",
  prompt: "Ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius.",
  code: `Algoritmo "faccat_Pg5-Ex12"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê uma temperatura em graus Fahrenheit, calcula e escreve
//               o valor correspondente em graus Celsius.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   fahrenheit, celsius: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Conversão Fahrenheit para Celsius --")
   Escreval("")

   Escreva("Digite a temperatura em graus Fahrenheit (°F): ")
   Leia(fahrenheit)
   Escreval("")

   celsius <- 5 * (fahrenheit - 32) / 9

   Escreval("A temperatura em graus Celsius é: ", celsius:4:2, "°C")

Fimalgoritmo`,
},

"faccat-5-13": {
  title: "Média ponderada",
  prompt: "Ler três notas de um aluno e calcular a média final ponderada, considerando pesos 2, 3 e 5 para as respectivas notas.",
  code: `Algoritmo "faccat_Pg5-Ex13"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê três notas de um aluno e calcula a média final
//               ponderada, considerando pesos 2, 3 e 5 para as
//               respectivas notas.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   nota1, nota2, nota3, mediaFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Média Ponderada --")
   Escreval("")

   Escreva("Digite a nota 1 (peso 2): ")
   Leia(nota1)
   Escreval("")

   Escreva("Digite a nota 2 (peso 3): ")
   Leia(nota2)
   Escreval("")

   Escreva("Digite a nota 3 (peso 5): ")
   Leia(nota3)
   Escreval("")

   mediaFinal <- (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

   Escreval("A média final ponderada das notas do(a) aluno(a) é: ", mediaFinal:4:2)

Fimalgoritmo`,
},

"faccat-5–6-14": {
  title: "Maior que 10",
  prompt: "Ler um valor e escrever a mensagem 'É MAIOR QUE 10!' se o valor for maior que 10; caso contrário, escrever 'NÃO É MAIOR QUE 10!'.",
  code: `Algoritmo "faccat_Pg5-6-Ex14"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê um valor e escreve a mensagem 'É MAIOR QUE 10!' se o
//               valor lido for maior que 10, caso contrário escreve
//               'NÃO É MAIOR QUE 10!'.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Maior que 10 --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   se (numero > 10) entao
      Escreval("É MAIOR QUE 10!")
   senao
      Escreval("NÃO É MAIOR QUE 10!")
   fimse

Fimalgoritmo`,
},

"faccat-5–6-15": {
  title: "Positivo ou negativo",
  prompt: "Ler um valor e escrever se ele é positivo ou negativo, considerando o valor zero como positivo.",
  code: `Algoritmo "faccat_Pg5-6-Ex15"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê um valor e escreve se é positivo ou negativo
//               (considera o valor zero como positivo).
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   numero: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Positivo ou Negativo --")
   Escreval("")

   Escreva("Digite um valor: ")
   Leia(numero)
   Escreval("")

   se (numero >= 0) entao
      Escreval("Positivo")
   senao
      Escreval("Negativo")
   fimse

Fimalgoritmo`,
},

"faccat-5–6-16": {
  title: "Preço das maçãs",
  prompt: "Ler o número de maçãs compradas. Cada maçã custa R$ 1,30 se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12. Calcular e escrever o custo total.",
  code: `Algoritmo "faccat_Pg5-6-Ex16"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : As maçãs custam R$ 1,30 cada se forem compradas menos de
//               uma dúzia, e R$ 1,00 se forem compradas pelo menos 12.
//               Lê o número de maçãs compradas, calcula e escreve o
//               custo total da compra.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   quantidade: inteiro
   custoTotal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Preço das Maçãs --")
   Escreval("")

   Escreva("Digite a quantidade de maçãs compradas: ")
   Leia(quantidade)
   Escreval("")

   se (quantidade < 12) entao
      custoTotal <- quantidade * 1.30
   senao
      custoTotal <- quantidade * 1.00
   fimse

   Escreval("O custo total da compra é: R$", custoTotal:4:2)

Fimalgoritmo`,
},

"faccat-5–6-17": {
  title: "Aprovação do aluno",
  prompt: "Ler as notas da primeira e segunda avaliações de um aluno, calcular a média aritmética simples e informar se o aluno foi aprovado. Nota igual ou maior que 6 indica aprovação. Escrever também a média calculada.",
  code: `Algoritmo "faccat_Pg5-6-Ex17"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê as notas da 1a. e 2a. avaliações de um aluno. Calcula
//               a média aritmética simples e escreve uma mensagem que diga
//               se o aluno foi ou não aprovado (nota >= 6 é aprovado).
//               Escreve também a média calculada.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   nota1, nota2, media: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Aprovação do Aluno --")
   Escreval("")

   Escreva("Digite a nota da primeira avaliação: ")
   Leia(nota1)
   Escreval("")

   Escreva("Digite a nota da segunda avaliação: ")
   Leia(nota2)
   Escreval("")

   media <- (nota1 + nota2) / 2

   se (media >= 6) entao
      Escreval("Você foi aprovado!")
   senao
      Escreval("Você NÃO foi aprovado!")
   fimse

   Escreval("A média calculada foi: ", media:4:2)

Fimalgoritmo`,
},

"faccat-5–6-18": {
  title: "Direito ao voto",
  prompt: "Ler o ano atual e o ano de nascimento de uma pessoa e informar se ela poderá ou não votar neste ano, sem considerar o mês de nascimento.",
  code: `Algoritmo "faccat_Pg5-6-Ex18"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o ano atual e o ano de nascimento de uma pessoa.
//               Escreve uma mensagem que diga se ela poderá ou não votar
//               este ano (não considera o mês em que a pessoa nasceu).
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   anoAtual, anoNascimento, idade: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Direito ao Voto --")
   Escreval("")

   Escreva("Digite o ano atual: ")
   Leia(anoAtual)
   Escreval("")

   Escreva("Digite o ano de nascimento: ")
   Leia(anoNascimento)
   Escreval("")

   idade <- anoAtual - anoNascimento

   se (idade < 16) entao
      Escreval("Não poderá votar este ano!")
   senao
      se(idade < 18) entao
         Escreval("Voto opcional!")
      senao
         Escreval("Voto obrigatório!")
      fimse
   fimse

Fimalgoritmo`,
},

"faccat-5–6-19": {
  title: "Maior de dois valores",
  prompt: "Ler dois valores diferentes e escrever o maior deles.",
  code: `Algoritmo "faccat_Pg5-6-Ex19"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois valores (considera que não serão lidos valores
//               iguais) e escreve o maior deles.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   a, b: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Maior de Dois Valores --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   se (a > b) entao
      Escreval("O maior valor é A =", a)
   senao
      Escreval("O maior valor é B =", b)
   fimse

Fimalgoritmo`,
},

"faccat-5–6-20": {
  title: "Ordem crescente",
  prompt: "Ler dois valores diferentes e escrevê-los em ordem crescente.",
  code: `Algoritmo "faccat_Pg5-6-Ex20"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois valores (considera que não serão lidos valores
//               iguais) e escreve-os em ordem crescente.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   a, b: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Ordem Crescente --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   se (a > b) entao
      Escreval("A ordem crescente dos valores é:",b," |",a)
   senao
      Escreval("A ordem crescente dos valores é:",a," |",b)
   fimse

Fimalgoritmo`,
},

"faccat-5–6-21": {
  title: "Duração do jogo",
  prompt: "Ler a hora de início e a hora de fim de um jogo de xadrez e calcular sua duração em horas. Considerar apenas horas inteiras, duração máxima de 24 horas e possibilidade de o jogo começar em um dia e terminar no dia seguinte.",
  code: `Algoritmo "faccat_Pg5-6-Ex21"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê a hora de início e a hora de fim de um jogo de Xadrez
//               (apenas horas inteiras) e calcula a duração do jogo em
//               horas, sabendo-se que o tempo máximo de duração é de 24
//               horas e que o jogo pode iniciar em um dia e terminar no
//               dia seguinte.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 24/09/2026
Var
   // Seção de Declarações das variáveis
   horaInicio, horaFim, duracao: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Duração da Partida de Xadrez --")
   Escreval("")

   Escreva("Digite a hora de início (0 a 23): ")
   Leia(horaInicio)
   Escreval("")

   Escreva("Digite a hora de fim (0 a 23): ")
   Leia(horaFim)
   Escreval("")

   se (horaFim >= horaInicio) entao
      duracao <- horaFim - horaInicio
   senao
      duracao <- (24 - horaInicio) + horaFim
   fimse

   Escreval("A duração da Partida de Xadrez foi de:", duracao, " horas")

Fimalgoritmo`,
},

"faccat-5–6-22": {
  title: "Hora extra",
  prompt: "Ler o número de horas trabalhadas em um mês e o salário por hora. Calcular o salário total, acrescentando hora extra para as horas que ultrapassarem 40 horas semanais, considerando um mês com 4 semanas exatas e adicional de 50%.",
  code: `Algoritmo "faccat_Pg5-6-Ex22"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : A jornada de trabalho semanal é de 40 horas (mês com 4
//               semanas exatas = 160 horas). Lê o número de horas
//               trabalhadas no mês e o salário por hora, e escreve o
//               salário total, acrescido de 50% para as horas extras.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   horasTrabalhadas: inteiro
   salarioHora, salarioTotal, horasExtras: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Hora Extra --")
   Escreval("")

   Escreva("Digite o número de horas trabalhadas no mês: ")
   Leia(horasTrabalhadas)
   Escreval("")

   Escreva("Digite o salário por hora: R$ ")
   Leia(salarioHora)
   Escreval("")

   se (horasTrabalhadas > 160) entao
      horasExtras <- horasTrabalhadas - 160
      salarioTotal <- (160 * salarioHora) + (horasExtras * salarioHora * 1.5)
   senao
      salarioTotal <- horasTrabalhadas * salarioHora
   fimse

   Escreval("O salário total do funcionário é: R$", salarioTotal:6:2)

Fimalgoritmo`,
},

"faccat-5–6-23": {
  title: "Erros no algoritmo, peso ideal",
  prompt: "Identificar os erros existentes em um algoritmo que recebe nome, altura e sexo de uma pessoa e calcula seu peso ideal. Para homens, utilizar (72,7 × altura) - 58; para mulheres, utilizar (62,1 × altura) - 44,7.",
  code: `Algoritmo "faccat_Pg5-6-Ex23"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Identificação e correção dos erros do algoritmo original
//               (peso ideal), que recebia nome, altura e sexo (M ou F)
//               de uma pessoa e calculava o peso ideal.
// - para sexo masculino: peso ideal = (72.7 * altura) - 58
// - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
//inicio
//   ler nome
//   ler sexo
//   se sexo = M então
//      peso_ideal <- (72.7 * altura) - 58
//   senão
//      peso_ideal <- (62.1 * altura) – 44.7
//      fim_se
//      escrever peso_ideal
//fim
//
// ERROS ENCONTRADOS no algoritmo original:
//  1) Não existia a Seção "Var" com a declaração das variáveis
//     (nome, sexo, altura, peso_ideal).
//  2) A variável "altura" nunca era lida (faltava o comando Leia(altura)).
//  3) A comparação "se sexo = M" está incorreta, pois M deveria estar
//     entre aspas simples (sexo = 'M'), já que sexo é do tipo caractere.
//  4) O algoritmo não seguia a sintaxe do VisuAlg (Algoritmo/Fimalgoritmo,
//     Escreva/Escreval e Leia com parênteses).
//
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   nome: caractere
   sexo: caractere
   altura, peso_ideal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Peso Ideal --")
   Escreval("")

   Escreva("Digite o nome: ")
   Leia(nome)
   Escreval("")

   Escreva("Digite o sexo (M/F): ")
   Leia(sexo)
   Escreval("")

   Escreva("Digite a altura (Ex: 1.70): ")
   Leia(altura)
   Escreval("")

   se (sexo = "M") ou (sexo = "m") entao
      peso_ideal <- (72.7 * altura) - 58
   senao
      peso_ideal <- (62.1 * altura) - 44.7
   fimse

   Escreval("O peso ideal de ", nome, " é: ", peso_ideal:4:2)

Fimalgoritmo`,
},

"faccat-5–6-24": {
  title: "Comissão do vendedor",
  prompt: "Ler o salário fixo e o valor das vendas efetuadas por um vendedor. Calcular o salário total considerando comissão de 3% sobre as vendas até R$ 1.500,00 e 5% sobre o valor que ultrapassar R$ 1.500,00.",
  code: `Algoritmo "faccat_Pg5-6-Ex24"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o salário fixo e o valor das vendas efetuadas por um
//               vendedor. Ele recebe 3% de comissão sobre o total das
//               vendas até R$ 1.500,00, mais 5% sobre o que ultrapassar
//               este valor. Calcula e escreve o salário total.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   salarioFixo, valorVendas, comissao, salarioTotal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Comissão do Vendedor --")
   Escreval("")

   Escreva("Digite o salário fixo do(a) vendedor(a): R$ ")
   Leia(salarioFixo)
   Escreval("")

   Escreva("Digite o valor das vendas do(a) vendedor(a): R$ ")
   Leia(valorVendas)
   Escreval("")

   se (valorVendas <= 1500) entao
      comissao <- valorVendas * 3 / 100
   senao
      comissao <- (1500 * 3 / 100) + ((valorVendas - 1500) * 5 / 100)
   fimse

   salarioTotal <- salarioFixo + comissao

   Escreval("O salário total do vendedor é: R$", salarioTotal:6:2)

Fimalgoritmo`,
},

"faccat-5–6-25": {
  title: "Saldo bancário",
  prompt: "Ler o número da conta, saldo, débito e crédito de um cliente. Calcular o saldo atual usando saldo - débito + crédito e informar se o saldo é positivo ou negativo.",
  code: `Algoritmo "faccat_Pg5-6-Ex25"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o número da conta, saldo, débito e crédito de um
//               cliente. Calcula e escreve o saldo atual (saldo - débito
//               + crédito) e informa se o saldo é positivo ou negativo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numeroConta: inteiro
   saldo, debito, credito, saldoAtual: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Saldo Bancário --")
   Escreval("")

   Escreva("Digite o número da conta: ")
   Leia(numeroConta)
   Escreval("")

   Escreva("Digite o saldo: R$ ")
   Leia(saldo)
   Escreval("")

   Escreva("Digite o débito: R$ ")
   Leia(debito)
   Escreval("")

   Escreva("Digite o crédito: R$ ")
   Leia(credito)
   Escreval("")

   saldoAtual <- saldo - debito + credito

   se (saldoAtual >= 0) entao
      Escreval("Saldo Positivo")
   senao
      Escreval("Saldo Negativo")
   fimse

   Escreval("O saldo atual é: R$", saldoAtual:6:2)

Fimalgoritmo`,
},

"faccat-5–6-26": {
  title: "Controle de estoque",
  prompt: "Ler a quantidade atual, máxima e mínima em estoque de um produto. Calcular a quantidade média entre a máxima e a mínima e informar se deve efetuar compra ou não.",
  code: `Algoritmo "faccat_Pg5-6-Ex26"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê a quantidade atual, máxima e mínima em estoque de um
//               produto. Calcula a quantidade média ((máxima+mínima)/2) e
//               informa se deve ou não efetuar compra.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   quantidadeAtual, quantidadeMaxima: inteiro
   quantidadeMinima, quantidadeMedia: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Controle de Estoque --")
   Escreval("")

   Escreva("Digite a quantidade atual em estoque: ")
   Leia(quantidadeAtual)
   Escreval("")

   Escreva("Digite a quantidade máxima em estoque: ")
   Leia(quantidadeMaxima)
   Escreval("")

   Escreva("Digite a quantidade mínima em estoque: ")
   Leia(quantidadeMinima)
   Escreval("")

   quantidadeMedia <- (quantidadeMaxima + quantidadeMinima) / 2

   se (quantidadeAtual >= quantidadeMinima) entao
      Escreval("Não efetuar compra!")
   senao
      Escreval("Efetuar compra!")
   fimse

Fimalgoritmo`,
},

"faccat-6–8-27": {
  title: "Positivo, negativo ou zero",
  prompt: "Ler um valor e escrever se ele é positivo, negativo ou zero.",
  code: `Algoritmo "faccat_Pg6-8-Ex27"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê um valor e escreve se ele é positivo, negativo ou zero.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numero: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Positivo, Negativo ou Zero --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   se (numero > 0) entao
      Escreval("Positivo")
   senao
      se (numero < 0) entao
         Escreval("Negativo")
      senao
         Escreval("Zero")
      fimse
   fimse

Fimalgoritmo`,
},

"faccat-6–8-28": {
  title: "Maior de três valores",
  prompt: "Ler três valores diferentes e escrever o maior deles.",
  code: `Algoritmo "faccat_Pg6-8-Ex28"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê três valores diferentes e escreve o maior deles.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Maior de Três Valores --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   se (a > b) entao
      se (a > c) entao
         Escreval("O maior valor é A =", a)
      senao
         Escreval("O maior valor é C =", c)
      fimse
   senao
      se (b > c) entao
         Escreval("O maior valor é B =", b)
      senao
         Escreval("O maior valor é C =", c)
      fimse
   fimse

Fimalgoritmo`,
},

"faccat-6–8-29": {
  title: "Soma dos dois maiores",
  prompt: "Ler três valores diferentes e escrever a soma dos dois maiores valores.",
  code: `Algoritmo "faccat_Pg6-8-Ex29"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê três valores diferentes e escreve a soma dos dois
//               maiores valores.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c, soma: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma dos Dois Maiores --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   se (a < b) e (a < c) entao
      soma <- b + c
      Escreval("A soma dos dois maiores valores (",b," +", c," ) é: ", soma)
   senao
      se (b < a) e (b < c) entao
         soma <- a + c
         Escreval("A soma dos dois maiores valores (",a," +",c," ) é: ", soma)
      senao
         soma <- a + b
         Escreval("A soma dos dois maiores valores (",a," +",b," ) é: ", soma)
      fimSe
   fimSe

Fimalgoritmo`,
},

"faccat-6–8-30": {
  title: "Ordem crescente de três valores",
  prompt: "Ler três valores diferentes e escrevê-los em ordem crescente.",
  code: `Algoritmo "faccat_Pg6-8-Ex30"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê três valores diferentes e escreve-os em ordem
//               crescente.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c, auxiliar: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Ordem Crescente de Três Valores --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   se (a > b) entao
      auxiliar <- a
      a <- b
      b <- auxiliar
   fimse

   se (a > c) entao
      auxiliar <- a
      a <- c
      c <- auxiliar
   fimse

   se (b > c) entao
      auxiliar <- b
      b <- c
      c <- auxiliar
   fimse

   Escreval("A ordem crescente dos valores é:",a," ->",b," ->",c)

Fimalgoritmo`,
},

"faccat-6–8-31": {
  title: "Formação de triângulo",
  prompt: "Ler três valores A, B e C representando as medidas dos lados de um triângulo e informar se eles formam ou não um triângulo. Para formar um triângulo, cada lado deve ser menor que a soma dos outros dois lados.",
  code: `Algoritmo "faccat_Pg6-8-Ex31"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê três valores (A, B e C) representando as medidas dos
//               lados de um triângulo e escreve se formam ou não um
//               triângulo. Para formar um triângulo, cada lado deve ser
//               menor que a soma dos outros dois lados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Formação de Triângulo --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   se (a < b + c) e (b < a + c) e (c < a + b) entao
      Escreval("Os valores formam um triângulo")
   senao
      Escreval("Os valores não formam um triângulo")
   fimse

Fimalgoritmo`,
},

"faccat-6–8-32": {
  title: "Vencedor da partida",
  prompt: "Ler o nome de dois times e o número de gols marcados por cada um. Escrever o nome do time vencedor ou a palavra 'EMPATE' caso não haja vencedor.",
  code: `Algoritmo "faccat_Pg6-8-Ex32"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o nome de 2 times e o número de gols marcados na
//               partida (para cada time). Escreve o nome do vencedor, ou
//               a palavra EMPATE caso não haja vencedor.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   nomeTime1, nomeTime2: caractere
   golsTime1, golsTime2: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Vencedor da Partida --")
   Escreval("")

   Escreva("Digite o nome do Time 1: ")
   Leia(nomeTime1)
   Escreval("")

   Escreva("Digite os gols do Time 1: ")
   Leia(golsTime1)
   Escreval("")

   Escreva("Digite o nome do Time 2: ")
   Leia(nomeTime2)
   Escreval("")

   Escreva("Digite os gols do Time 2: ")
   Leia(golsTime2)
   Escreval("")

   se (golsTime1 > golsTime2) entao
      Escreval("O vencedor é:", nomeTime1, "!")
   senao
      se (golsTime2 > golsTime1) entao
         Escreval("O vencedor é: ", nomeTime2, "!")
      senao
         Escreval("EMPATE")
      fimse
   fimse

Fimalgoritmo`,
},

"faccat-6–8-33": {
  title: "Comparação de números",
  prompt: "Ler dois valores e imprimir 'Números iguais' caso sejam iguais, 'Primeiro é maior' caso o primeiro seja maior ou 'Segundo maior' caso o segundo seja maior.",
  code: `Algoritmo "faccat_Pg6-8-Ex33"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois valores e imprime 'Números iguais' caso sejam
//               iguais, 'Primeiro é maior' caso o primeiro seja maior que
//               o segundo, ou 'Segundo maior' caso o segundo seja maior
//               que o primeiro.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   numero1, numero2: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Comparação de Números --")
   Escreval("")

   Escreva("Digite o primeiro número: ")
   Leia(numero1)
   Escreval("")

   Escreva("Digite o segundo valor: ")
   Leia(numero2)
   Escreval("")

   se (numero1 = numero2) entao
      Escreval("Números iguais!")
   senao
      se (numero1 > numero2) entao
         Escreval("Primeiro é maior!")
      senao
         Escreval("Segundo maior!")
      fimse
   fimse

Fimalgoritmo`,
},

"faccat-6–8-34": {
  title: "Análise de algoritmo",
  prompt: "Analisar o algoritmo apresentado no exercício e identificar os erros existentes em sua estrutura e instruções.",
  code: `Algoritmo "faccat_Pg6-8-Ex34"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula a variável Z baseado em X e Y e define uma resposta
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026

Var
   // Seção de Declarações das variáveis
   x, y, z: real
   resposta: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Teste de Condicionais --")
   Escreval("")

   Escreva("Digite o valor de X: ")
   Leia(x)
   Escreval("")

   Escreva("Digite o valor de Y: ")
   Leia(y)
   Escreval("")

   z <- (x * y) + 5

   se (z <= 0) entao
      resposta <- "A"
   senao
      se (z <= 100) entao
         resposta <- "B"
      senao
         resposta <- "C"
      fimse
   fimse

   Escreval("Z = ", z)
   Escreval("Resposta = ", resposta)

Fimalgoritmo
`,
},

"faccat-6–8-35": {
  title: "Posto de combustíveis",
  prompt: "Ler o número de litros vendidos e o tipo de combustível, sendo A para álcool e G para gasolina. Calcular o valor a pagar considerando álcool a R$ 2,90, gasolina a R$ 3,30 e os descontos definidos para até 20 litros e acima de 20 litros.",
  code: `Algoritmo "faccat_Pg6-8-Ex35"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o número de litros vendidos e o tipo de combustível
//               (A-álcool, G-gasolina). Calcula e imprime o valor a ser
//               pago pelo cliente, sabendo-se que o preço do litro da
//               gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90,
//               com os descontos definidos para até 20 litros e acima de
//               20 litros.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   litros: real
   tipoCombustivel: caractere
   precoLitro, desconto, valorPagar: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Posto de Combustíveis --")
   Escreval("")

   Escreva("Digite a quantidade de litros vendidos: ")
   Leia(litros)
   Escreval("")

   Escreva("Digite o tipo de combustível (A-álcool, G-gasolina): ")
   Leia(tipoCombustivel)
   Escreval("")

   se (tipoCombustivel = "A") ou (tipoCombustivel = "a") entao
      precoLitro <- 2.90

      se (litros <= 20) entao
         desconto <- 0.03
      senao
         desconto <- 0.05
      fimse
   senao
      precoLitro <- 3.30

      se (litros <= 20) entao
         desconto <- 0.04
      senao
         desconto <- 0.06
      fimse
   fimse

   valorPagar <- litros * precoLitro * (1 - desconto)

   Escreval("O valor a ser pago pelo cliente é: R$", valorPagar:6:2)

Fimalgoritmo`,
},

"faccat-6–8-36": {
  title: "Idades de homens e mulheres",
  prompt: "Ler as idades de dois homens e duas mulheres. Calcular e escrever a soma da idade do homem mais velho com a mulher mais nova e o produto da idade do homem mais novo com a mulher mais velha.",
  code: `Algoritmo "faccat_Pg6-8-Ex36"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê as idades de 2 homens e de 2 mulheres (idades dos
//               homens sempre diferentes entre si, bem como as das
//               mulheres). Calcula e escreve a soma das idades do homem
//               mais velho com a mulher mais nova, e o produto das
//               idades do homem mais novo com a mulher mais velha.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2: inteiro
   homemVelho, homemNovo, mulherVelha, mulherNova: inteiro
   soma, produto: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Idades de Homens e Mulheres --")
   Escreval("")

   Escreva("Digite a idade da 1° mulher: ")
   Leia(idadeMulher1)
   Escreval("")

   Escreva("Digite a idade da 2° mulher: ")
   Leia(idadeMulher2)
   Escreval("")

   Escreva("Digite a idade do 1° homem: ")
   Leia(idadeHomem1)
   Escreval("")

   Escreva("Digite a idade do 2° homem: ")
   Leia(idadeHomem2)
   Escreval("")

   se (idadeMulher1 > idadeMulher2) entao
      mulherVelha <- idadeMulher1
      mulherNova <- idadeMulher2
   senao
      mulherVelha <- idadeMulher2
      mulherNova <- idadeMulher1
   fimse

   se (idadeHomem1 > idadeHomem2) entao
      homemVelho <- idadeHomem1
      homemNovo <- idadeHomem2
   senao
      homemVelho <- idadeHomem2
      homemNovo <- idadeHomem1
   fimse

   soma <- homemVelho + mulherNova
   produto <- homemNovo * mulherVelha

   Escreval("A soma do homem mais velho com a mulher mais nova é:", soma)
   Escreval("O produto do homem mais novo com a mulher mais velha é:", produto)

Fimalgoritmo`,
},

"faccat-6–8-37": {
  title: "Fruteira",
  prompt: "Ler a quantidade de morangos e maçãs adquiridas. Calcular o valor da compra usando os preços por quilo definidos para até 5 kg e acima de 5 kg. Se a quantidade total ultrapassar 8 kg ou o valor da compra ultrapassar R$ 25,00, aplicar desconto de 10%.",
  code: `Algoritmo "faccat_Pg6-8-Ex37"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê a quantidade (em Kg) de morangos e a quantidade (em Kg)
//               de maçãs adquiridas e escreve o valor a ser pago pelo
//               cliente. Se comprar mais de 8 Kg em frutas ou o valor
//               total ultrapassar R$ 25,00, recebe desconto de 10%.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 26/09/2026
Var
   // Seção de Declarações das variáveis
   kgMorango, kgMaca: real
   valorMorango, valorMaca, totalKg, valorTotal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Fruteira --")
   Escreval("")

   Escreva("Digite a quantidade de morangos (Kg): ")
   Leia(kgMorango)
   Escreval("")

   Escreva("Digite a quantidade de maçãs (Kg): ")
   Leia(kgMaca)
   Escreval("")

   se (kgMorango <= 5) entao
      valorMorango <- kgMorango * 2.50
   senao
      valorMorango <- kgMorango * 2.20
   fimse

   se (kgMaca <= 5) entao
      valorMaca <- kgMaca * 1.80
   senao
      valorMaca <- kgMaca * 1.50
   fimse

   totalKg <- kgMorango + kgMaca
   valorTotal <- valorMorango + valorMaca

   se (totalKg > 8) ou (valorTotal > 25) entao
      valorTotal <- valorTotal * 0.90
   fimse

   Escreval("O valor a ser pago pelo cliente é: R$", valorTotal:6:2)

Fimalgoritmo`,
},
  
  "faccat-6–8-38": {
    title: "Acesso por código",
    prompt: "Validar código 1234 e senha 9999, informando acesso permitido ou erro.",
    code: `Algoritmo "faccat_Pg6-8-Ex38"
// Disciplina  : [Lógica de Programação de JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê um número que é um código de usuário. Caso este código
//               seja diferente de um código armazenado internamente no
//               algoritmo (igual a 1234) é apresentada a mensagem
//               ‘Usuário inválido!’. Caso o Código seja correto, é
//               lido outro valor que é a senha. Se esta senha estiver
//               incorreta (a certa é 9999) é mostrada a mensagem
//               ‘senha incorreta’. Caso a senha esteja correta, é
//               mostrada a mensagem ‘Acesso permitido’.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   codigoArmazenado, codigoDigitado: inteiro
   senhaArmazenada, senhaDigitada: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Acesso Por Código --")
   Escreval("")

   codigoArmazenado <- 1234
   senhaArmazenada <- 9999

   Escreva("Digite o código: ")
   Leia(codigoDigitado)
   Escreval("")

   se (codigoDigitado <> codigoArmazenado) entao
      Escreval("Usuário Inválido!")
   senao
      Escreva("Digite a senha: ")
      Leia(senhaDigitada)
      Escreval("")

      se (senhaArmazenada <> senhaDigitada) entao
         Escreval("Senha Incorreta!")
      senao
         Escreval("Acesso Permitido!")
      fimse
   fimse

Fimalgoritmo`,
  },
  
  "faccat-8-39": {
    title: "Expressões lógicas",
    prompt: "Para A=V, B=V e C=F, avaliar as expressões lógicas apresentadas no exercício.",
    code: `Algoritmo "faccat_Pg8-Ex39"
// Disciplina  : [Lógica de Programação de JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Para A=V, B=V e C=F, avalia as expressões lógicas apresentadas.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c: logico
   resultadoA, resultadoB, resultadoC: logico

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Expressões lógicas --")
   Escreval("")

   a <- verdadeiro
   b <- verdadeiro
   c <- falso

   resultadoA <- (a e b) ou (a xou b)
   resultadoB <- (a ou b) e (a e c)
   resultadoC <- a ou c e b xou a e nao b
   
   Escreval("Resultado a): ",resultadoA)
   Escreval("Resultado b): ",resultadoB)
   Escreval("Resultado c): ",resultadoC)

Fimalgoritmo`,
  },
};
