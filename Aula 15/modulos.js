import { dividir, multiplicar as mult, somar, subtrair } from "./calculadora.js" // "multiplicar as mult" forma de dar um apelido para a função
import calculadora from "./calculadora.js"

// bibliotecas / modulos

// Math.tan, sin, cos // Math -> Biblioteca nativo do JS
console.log(Math.sqrt(4)); // square root/Raiz quadrada
console.log(Math.ceil(4.4)); // arredonda para cima
console.log(Math.floor(4.4)); // arredonda para baixo
console.log(Math.round(4.5)); // arredonda para o mais próximo
console.log(Math.cos(1.5708)); // cos 90
console.log(Math.pow(6, 3)); // potenciação 216
console.log(Math.cbrt(64)); // cubic root
console.log(Math.abs(-9)); // valor absoluto
console.log(Math.random()); // valor aleatório // pseudoaleatório // Vai do 0 até < 9 [0-9[
const rand = Math.random();
console.log("Valor Aleatório de 1 ao 100:", Math.floor(rand * 100) + 1);
console.log(Math.max(1, 6, 9, 3)); // 9
console.log(Math.min(1, 6, 9, 3)); // 1

console.log(mult(4, 5)); // 20   
console.log(dividir(21, 3)); // 7
console.log(somar(15, 5)); // 20
console.log(subtrair(35, 11)); // 24
console.log(calculadora(5, 5)); // por padrão, está realizando o calculo de soma conforme definido em "export default somar" no arquivo "calculadora.js"

// Funções Recursivas
// Fatorial !5 = 5 * 4 * 3 * 2 * 1;
function fatorial(numero) {
    if (numero == 1 || numero == 0) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
} 

console.log(fatorial(5));





