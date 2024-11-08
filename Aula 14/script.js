let usuario = "Danilo";
let bootcamp = "Full Stack";

function saudacao(nome, curso) {
  console.log(`Bem-vindo(a), ${nome}. Bem-vindo(a) ao curso ${curso}`);
}

saudacao(usuario, bootcamp); // Chamando a função "saudacao()". O parênteses que faz a função ser executada. O que está dentro do parênteses é o parametro da função (que também podem ser chamadas de "argumentos").

console.log("--------------------");

saudacao("Danilo", "Full Stack"); // Podemos também informar o valor diretamente na função sem a necessidade de fazer a declaração de variáveis.

console.log("--------------------");

let x = 45;
let y = 85;

function soma(a, b) {
  console.log("A soma é:", a + b); //console é objeto e .log é uma função. O que está dentro do parênteses é o parametro.
}

soma(x, y);
soma(10, 35);

function mediaNotas(n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;
  return media; // "return"  torna possível usar o retorno da função fora dela. Dessa forma, será possível declarar uma variável com a função
}

const mediaAluno = mediaNotas(6.5, 7.5, 4.5);
console.log(`A média do aluno é ${mediaAluno.toFixed(2)}`); // ".toFixed(2)" arredonda para 2 casas decimais

if (mediaAluno < 7) {
  console.log("Reprovado");
} else {
  console.log("Aprovado");
}

console.log("--------------------");

function obterDiaSemana(dia) {
  switch (dia) {
    case 1:
      return "Domingo"; // "return" finaliza a função no momento que o "dia" é encontrado. Dessa forma, não é necessário utilizar "break" no final de cada caso.
    case 2:
      return "Segunda-Feira";
    case 3:
      return "Terça-Feira"; 
    case 4:
      return "Quarta-Feira";
    case 5:
      return "Quinta-Feira";
    case 6:
      return "Sexta-Feira";
    case 7:
      return "Sábado";
    default:
        return "Dia inexistente";
  }
}

console.log(obterDiaSemana(0));

// Funções com Parâmetros
// Funções sem Parâmetros
// Funções com Retorno
// Funções sem Retorno

console.log("--------------------");

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

const imc1 = calcularIMC(70); // NaN (Not a Number)
console.log(imc1);
const imc2 = calcularIMC(70, 1.8)
console.log(imc2.toFixed(2));

function despedir(nome = "Amigo") { // nome = "", está definindo um valor padrão para o parâmetro.
    console.log(`Até logo, ${nome}!`);
}

despedir(); // Função está somente recebendo o valor padrão para o parâmetro "nome"
despedir("Danilo");

console.log("--------------------");

function calcularAreaCirculo (raio) {
    if (raio == undefined) {
        throw new Error("Raio do circulo não foi definido."); // "throw new Error()" Para o programa e adiciona mensagem de erro caso valor não seja atribuido para o parâmetro.
    }
    return 3.14 * (raio ** 2);
}

// console.log(calcularAreaCirculo()); 
console.log(calcularAreaCirculo(10)); // 314

console.log("--------------------");

// Função Anônima -> É uma função sem nome
function subtrair(n1, n2) {
    return n1 - n2;
}

const somar = function(n1, n2) { // para a função anônima funcionar, ela deve estar dentro de uma variável 
    return n1 + n2;
}

console.log(somar(10, 5)); // 15

console.log("--------------------");

// Callback -> É uma função passada com a entrada de outra função
function calcular(operacao, n1, n2) {
    return operacao(n1, n2);
}
calcular(function(n1, n2) { return n1 + n2; }, 12, 8);

console.log("--------------------");

const numeros = [3, 6, 9, 4, 1, 7];
numeros.forEach(function(n) {
    console.log(n);
});


console.log("--------------------");

// Arrow Functions (Funções de Seta) -> Função Anônima
const funcaoSemSeta = function() {}
const funcaoComSeta = () => {}

console.log("--------------------");

numeros.forEach((n) => {
    console.log(n) 
});

console.log("--------------------");

numeros.forEach((n) => console.log(n)); // Pode ser feita dessa forma para códigos com uma alinha de código

console.log("--------------------");

numeros.forEach(n => console.log(n)); // Caso tenha somente um argumento, os parênteses não são obrigatórios 

console.log("--------------------");

const ola = () => console.log("Olá!");
ola();

function potencia(base, expo) {
    return base ** expo;
}

const potenciaArrow = (base, expo) => base ** expo;

console.log(potencia(3,4)); // 81
console.log(potenciaArrow(3, 4)); // 81





