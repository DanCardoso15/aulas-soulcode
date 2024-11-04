console.log("Olá Mundo II!")

let nome;
let idade;
let nota;

nome = "Danilo Cardoso"
idade = 31;
nota = 8.7;

// Novos valores atribuidos para "idade" e "nota"

idade = 23;
nota = 6.5;

// Valores podem ser atribuidos na linha de atribuição

let sobreNome = "Silva"

console.log(nome, sobreNome, idade, nota)

// Atribuição de variáveis na mesma linha 

let aa = 5, bb = 6, cc= 3;

// let aa = 5;
// let bb = 6;
// let cc = 3;

// Variável constante não muda
const maskCPF = "000.000.000-00"
// maskCPF = "000"; -> Retorna erro 
// variável com caixa alta é uma constante

console.log(maskCPF);

let tipo // undefined
console.log(typeof tipo); // "typeof" mostra o tipo da variável
tipo = "Lorem"; // string
console.log(typeof tipo); 
tipo = 24; // number
console.log(typeof tipo);
tipo = false // boolean
console.log(typeof tipo);
tipo = null; // null
console.log(typeof tipo);

// Operadores

const x = 12, y = 6;
console.log(x + y);  // 18
console.log(x - y);  // 6
console.log(x * y);  // 72
console.log(x / y);  // 2
console.log(x % y);  // 0
console.log(x ** y); // 2985984

const per = 75;
const num = 200;
console.log(num * (per/100)); // 150


let a = 5, b = 6, c= 3;
let delta = (b ** 2) + (4 * a * c);
console.log(delta); // 96

let numero = 7;
console.log(numero);
numero += 5;
console.log(numero);  // 12
numero *= 3;
console.log(numero);  // 36
numero /= 9;
console.log(numero);  // 4
numero -= 12;
console.log(numero);  // -8

numero = 2;
console.log(numero++); // 2++, numero = 3 pós-incremento
console.log(numero); // 3

numero = 2;
console.log(++numero); // 2 + 1 = 3 pré-incremento
console.log(++numero); // 3 + 1 = 4
console.log(numero--); // 4, numero = 3 pós-incremento
console.log(--numero); // 3 - 1 = 2
numero++; // 2++, numero = 3
console.log(numero); // 3, numero = 3

console.log(6 == 6); // true
console.log("6" == 6); // true
console.log("6" === 6); // false -> está comparando o tipo da variável
console.log(4 > 7); // false
console.log(7 > 4); // true
console.log(9 > 9); // false
console.log(9 >= 9); // true
console.log(7 <= 7); // true
console.log("6" != 6); // false
console.log("6" != 7); // true
console.log("6" !== 6); // true
console.log("Danilo" == "danilo"); // false
console.log("Danilo" != "danilo"); // true

let p = true;
let q = false;

// Conjunção -> E / END / &&
// Disjunção -> OU / OR / ||
// Negação -> NÃO / NOT / !

console.log(p); // true
console.log(q); // false

console.log(p && q); // false
console.log(p || q); // true
console.log(p || p); // true
console.log(q || q); // false
console.log(!p || q); // false
console.log(q || !q); // true
console.log(!(p || q)); // false

// aritmético > comparação > lógico
console.log((4*3) > 125 || (6 % 3 == 1) || (90 * 2 * 0.5) == (110 - 20)); // true

