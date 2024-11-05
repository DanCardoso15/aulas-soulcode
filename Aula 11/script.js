let idade = 15;
let autorizacaoPais = false;

// Estrutura condicional -> IF/ELSE
if (idade >= 18 || autorizacaoPais) {
    console.log("Pode viajar");
} else {
    console.log("Não pode viajar");
}

console.log("---------------");

// Estrutura condicional -> IF/ELSE com multiplas condicionais 
let clima = "amêno";

if (clima == "ensolarado") {
    console.log("Hoje vou pescar!");
} else if (clima == "nublado") {
    console.log("Hoje vou fazer compras!");
} else if (clima == "amêno") {
    console.log("Hoje vou caminhar");
} else {
    console.log("Hoje vou dormir");
}

console.log("---------------");

// Estrutura condicional -> Operador Ternário
let num = 5;
console.log(num % 2 == 0 ? "Par" : "Ímpar");
console.log(num < 0 ? "Nagativo" : "Positivo");

console.log("---------------");

// Estrutura de Seleção
let dia = 15;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Esse dia não existe");
}

// Considerando três números diferentes, construa um programa que determine quem será o maior, o menor e o intermediário.
let a = 5, b = 10, c = 2;
