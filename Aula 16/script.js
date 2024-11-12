console.log("Há quanto tempo, html. Tudo bem?");
console.log(document.head); // "document" -> objeto que é incorporado pelo navegador que incorpora todos os elementos do navegador
// DOM não é um recurso do Node.js

// document.getElementById(); // busca pelo id
// document.getElementsByName(); // busca pela tag
// document.getElementsByClassName(); // busca pela classe
// document.getElementsBySelector(); // busca pelo seletor
// document.getElementsByNameAll(); // busca pelo seletor

const titulo = document.getElementById("titulo");
console.log(titulo);

const paragrafo = document.getElementsByTagName("p"); // retornar uma lista
console.log(paragrafo);

const itens = document.getElementsByClassName("item"); // retornar uma lista
console.log(itens);

const titulo2 = document.querySelector("#titulo");
console.log(titulo2);

const itens2 = document.querySelectorAll(".item");
console.log(itens2);


// titulo2.textContent = "JavaScript é mel."; // Está alterando o texto de "titulo2"

// titulo2.innerText = "JavaScript é <em>mel</em>."; // "innerText" só faz a alteração do texto sem considerar as tags especiais

titulo2.innerHTML = "JavaScript é <em>mel</em>."; // "innerHTML" considera todas as tags de transformação de texto 

const capa = document.querySelector("#capa");

 
setTimeout(() => {  // "setTimeout" função de delay que faz a alteração após tempo determinado 

    titulo2.style.color = "red";
    titulo2.style.fontFamily = "Arial"; // "fontFamily" sempre utileze camelCase nos elementos
    titulo2.style.backgroundColor = "pink"

    capa.style.border = "5px dashed purple"

    capa.src = "https://plus.unsplash.com/premium_photo-1731021470631-255095ce4045?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // ".src" faz a troca da imagem 
}, 3000); 

const msg = document.querySelector("#msg"); // método que usamos para buscar o elemento no HTML

setTimeout(() => {
    msg.classList.add("erro"); // "classList.add" adiciona classe
    msg.innerHTML = "Algo deu errado"
}, 2000);

setTimeout(() => {
    msg.classList.remove("erro"); // "classList.remove" remove a classe
    msg.classList.add("ok");
    msg.innerText = "Agora tá tudo OK!"
}, 4000);

