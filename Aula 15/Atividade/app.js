console.log("--------------------");
console.log("Atividade 1");
// 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
import { soma, multiplica as mult } from "./operacoes.js"

console.log(soma(5, 2)); // 7
console.log(mult(5, 3)); // 15

console.log("--------------------");
console.log("Atividade 2");
// 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.
import divide, { subtrai as sub } from "./math.js";

console.log(sub(5, 2)); // 3
console.log(divide(15, 3)); // 5

console.log("--------------------");
console.log("Atividade 3");
// 3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.
const vet1 = [5, 2, 13, 8, 9, 21];
const vet2 = [7, 14, 35, 2, 4, 50];
const vet3 = [...vet1, ...vet2] // Vetor com o conteúdo de "vet1" e "vet2"

function vetNovo(v1, v2) { // Função que cria novo vetor com o conteúdo de "vet1" e "vet2"
    return [...v1, ...v2]
};

console.log(vetNovo(vet1, vet2));
console.log(vet3);

console.log("--------------------");
console.log("Atividade 4");
// 4. Crie um objeto usuario com as propriedades nome, idade, e email. Crie um novo objeto usuarioCompleto que contenha todas as propriedades de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades.
const usuario = {
    nome: "Danilo Cardoso",
    idade: 31,
    email: "dancardoso15@hotmail.com",
};

console.log(usuario);


const usuarioCompleto = {
    ...usuario,
    telefone: "(11) 95669-8545",
};

console.log(usuarioCompleto);

console.log("--------------------");
console.log("Atividade 5");
// 5. Crie um objeto livro com as propriedades titulo, autor, ano e genero. Use destructuring para extrair titulo e autor em variáveis separadas e exiba essas variáveis no console.
const livro = {
    titulo: "O alquimista",
    autor: "Paulo Coelho",
    ano: 2017,
    genero: "Ficcao",
};

const { titulo, autor } = livro;

console.log(titulo);
console.log(autor);




