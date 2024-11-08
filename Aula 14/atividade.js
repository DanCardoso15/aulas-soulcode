console.log("--------------------");
console.log("Atividade 1");
// 1. Escreva uma função anônima que recebe um número e retorna o dobro desse número. Atribua a função a uma variável chamada dobro e teste-a com alguns valores.

const dobro = function(n) {
    return n * 2;
}

console.log(dobro(5)); // 10

console.log("--------------------");
console.log("Atividade 2");
// 2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. Teste a função com diferentes valores para verificar se o resultado está correto.

const cubo = n => n ** 3; 

// const cubo = (n) => { 
//     return n ** 3;
// }

console.log(cubo(2)); // 8

console.log("--------------------");
console.log("Atividade 3");
// 3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto (com valor padrão de 5%). A função deve retornar o preço com o desconto aplicado. Teste a função passando apenas o preço e depois passando o preço e a taxa.

function calculaDesconto(preco, txDesconto = 5) {
    return preco - ((txDesconto / 100) * preco);
}

console.log(calculaDesconto(50)); // 47.5
console.log(calculaDesconto(50, 45)); // 27.5

console.log("--------------------");
console.log("Atividade 4");
// 4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback como parâmetros. A função deve executar a operação fornecida pelo callback com os dois números. Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.

const soma = (n1, n2) => n1 + n2;
const subtracao = (n1, n2) => n1 + n2;
const mult = (n1, n2) => n1 + n2;

function executaOperacao(n1, n2, operacao) {
    return operacao(n1, n2);
}

console.log(executaOperacao(35, 15, soma)); // 50
console.log(executaOperacao(25, 11, subtracao)); // 36
console.log(executaOperacao(41, 23, mult)); // 64

console.log("--------------------");
console.log("Atividade 5");
// 5. Dado um vetor de números [1, 2, 3, 4, 5], utilize o método forEach e uma função de callback para imprimir cada número multiplicado por 2. Use uma função anônima ou uma arrow function como callback para simplificar o código.

let vetor = [1, 2, 3, 4, 5];
let novoVetor = [];

vetor.forEach(function (n) {
    // novoVetor.push(n * 2);
    novoVetor.push(dobro(n));
    // return console.log(n * 2);
    return console.log(dobro(n));
});

console.log(novoVetor); // 2 4 6 8 10 


