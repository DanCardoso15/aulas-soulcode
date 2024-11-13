// Programação Assicrona -> Funções Executando em Paralelo

console.log("Antes");

setTimeout(() => { // "setTimeout()" é assicrona. Não espera para ser executado
    console.log("Atrasado");
}, 2000);

console.log("Depois");

console.log("---------------------");

let a = 2;
a++;
setTimeout(() => ++a, 1000);

console.log(a); // 3


// async e await
// Promise - Promessa (instruções executadas de forma assicrona)

// axios.get("https://api.github.com/users/DanCardoso15").then(resposta => {
//     console.log(resposta);
// });

// async e await
async function buscarDadosGithub() {
    const resposta = await axios.get("https://api.github.com/users/DanCardoso15");
    console.log(resposta);
}

buscarDadosGithub();

console.log("Depois da requisição");

