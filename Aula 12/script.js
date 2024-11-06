let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}

let palavra = "Danilo Cardoso";
let posicao = 0;

while (palavra[posicao] != "s") {
    console.log(palavra[posicao]);
    posicao++;
}

for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
}

// while -> É um processo de repetição indeterminado
// for -> É um processo de repetição determinado

let x = 2;
let y = 150;

for (let i = x; i < y; i++) {
    if (i % 7 == 0) {
        console.log("Achei um número divisivel por 7 entre x e y", i);
        break; //"break" faz com que o loop atual seja quebrado
    }
}

console.log("--------------------");

for (let i = 15, c = 0; i < 50; i++) {
    if (i % 6 == 0) {
        console.log(i);
        c++;
    }
    if (c == 3) {
        break;
    }
}

console.log("--------------------");

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        continue; // "Continue" quebra o loop no escopo que ele está. Neste exemplo, ele está pulando todos os número que são divisíveis por 3  
    }
    console.log(i);
}



