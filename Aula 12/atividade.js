console.log("-----------------------------");
console.log("Atividade 1");

// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.
{let numeros = [15, 20, 35, 12, 5, 10, 7, 52, 3];
let i = 0;
let tamanho = numeros.length;
let soma = 0;

while (i < tamanho) {
    soma += numeros[i]    
    i++
}

console.log("Soma:", soma);}

console.log("-----------------------------");
console.log("Atividade 2");
// 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.

{let numeros = [15, 20, 35, 12, 5, 10, 7, 52, 3];
let i = 0;
let tamanho = numeros.length;
let cont = 0; 
let pares = [];

while (i < tamanho) {
  if (numeros[i] % 2 == 0) {
    cont++;
    pares.push(numeros[i])
  }
  i++;
}

console.log("Quantidade de número pares:", cont);
console.log("Vetor com pares:", pares);
}

console.log("-----------------------------");
console.log("Atividade 3");
// 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.

{let frutas = ["Morango", "Uva", "Abacaxi", "Banana", "Melão", "Goiaba", "Manga", "Melancia"]

for (let fruta of frutas) {
    console.log("Item:", fruta);
}}

console.log("-----------------------------");
console.log("Atividade 4");
//4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.

{let numeros = [15, 20, 35, 12, 5, 10, 7, 52, 3];
let mult = 2;
let novVet = [];

  for (let i = 0; i < numeros.length; i++) {
    novVet[i] = numeros[i] * mult;
  }

  console.log(novVet);
}

console.log("-----------------------------");
console.log("Atividade 5");
//5.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.

let numeros = [15, 20, 35, 12, 5, 10, 7, 52, 3];
let i = 0;
let maior = 0;

for (let i = 0; i < numeros.length; i++) {
    if (maior < numeros[i]) {
        maior = numeros[i];
    }
}

console.log("O maior valor é:", maior);
