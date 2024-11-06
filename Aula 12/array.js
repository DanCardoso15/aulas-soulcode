let lang = `Python`;

console.log(lang);
console.log(lang[5]); // n
console.log(lang[0]); // P

// vetores, array, lista, matriz
let numero = 5;
let numeros = [4, 8, 7, 1, 0, 6, 8, 0];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 14;
console.log(numeros);

numeros.push(3) // ".push()" faz com que adicione um novo número/valor no final do vetor 
console.log(numeros);

console.log(numeros[12]); // undefined -> Elemento 12 não existe
console.log(numeros.length); // 9

let last = numeros.length - 1;
console.log(numeros[last]);

let mistura = [3, 4, 5, "HTML", "CSS", true, false, [1, 2, 3], "JS", 9]; // Não recomendado fazer

const nomes = ["Leonardo", "Wesley", "Paulo", "Lais", "Igor", "Larissa"];
const tamanho = nomes.length;

for (let i = 0; i < tamanho; i++) {
    console.log("Seja bem vindo(a),", nomes[i]); 
}

console.log("-------------------");

for (let nome of nomes) { // "for each/para cada" é específico para percorrer cada item da lista/array
    console.log("Seja bem vindo(a),", nome); 
}