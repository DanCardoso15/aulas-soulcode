const linguagem = "JavaScript";
console.log(linguagem[0]); // J

for (let letra of linguagem) {
    console.log(letra); // imprime cada letra da variável "linguagem"
}

console.log(linguagem);
console.log(linguagem.toLowerCase()); // ".toLowerCase()" retorna o valor da variável com caixa baixa (minúsculo)
console.log(linguagem.toUpperCase()); // ".toUpperCase()" retorna o valor da variável com caixa alta (MAIÚSCULA)
console.log(linguagem.endsWith("Script")); // true -> ".endsWith()" verifica se a variável finaliza com determinado elemento
console.log(linguagem.endsWith("PHP")); // false -> "endsWith()" verifica se a variável inicia com determinado elemento
console.log(linguagem.includes("ava")); // true -> ".includes()" verifica se a variável contêm determinado elemento
console.log(linguagem.indexOf("a")); // 1 -> ".indexOf()" retorna o index/posição de determinado elemento na variável
console.log(linguagem.lastIndexOf("a")); // 3 -> ".lastIndexOf()" retorna o index/posição do último determinado elemento na variável
console.log(linguagem.replace("Java", "Type")); // TypeScript -> ".replace("Atual", "Novo")" substitui determinado elemento por outro elemento dentro da variável.
console.log(linguagem.slice(2,7)); // vasScr -> "slice(posição inicial, posição de corte)" retorna a variavel de forma "cortada"'

const nome = "Danilo Cardoso";
const curso = "Full Stack";
console.log(`Bem-Vindo, ${nome}, ao curso ${curso}`); // template string -> Permite realizar a interpolação da varável dentro do texto

const numero1 = 45;
const numero2 = 15
console.log(`A soma de ${numero1} e ${numero2} é igual a ${numero1 + numero2}`);

const pessoa = {
    nome: "Danilo", // "," deve ser colocada sempre após o final do valor da propriedade. Não é necessário a virgula na última propriendade
    dataNascimento: "00/00/0000",
    cpf: "000.000.000-00",
    altura: 1.67,
    corCabelo: "Preto" 
};

console.log(pessoa);
console.log(pessoa.nome); // Danilo
console.log(pessoa.dataNascimento); // 00/00/0000
console.log(pessoa.cpf); // 000.000.000-00
console.log(pessoa.altura); // 1.67
console.log(pessoa.corCabelo); // Preto
console.log(pessoa["corCabelo"]); // objeto[""] -> Outra forma para referênciar a propriedade do objeto
console.log(pessoa.curso); // undefined -> porque a propriedade "curso" não existe
pessoa.email = "danilo@gmail.com"; // propriedade "email" adicionada ao objeto
pessoa.nome = "Danilo Cardoso"; // propriedade alterada para "Danilo Cardoso"
console.log(pessoa);
delete pessoa.cpf; // "delete" vai apagar a propriedade "cpf" do objeto
console.log(pessoa);

let a1 = {nome: "João"}
let a2 = a1 // "a2" está recebendo o endereço de "a1", portanto, "a2" e "a1" tem o mesmo endereço do objeto

a2.nome = "Maria" // O objeto que está endereçado em "a1" e "a2" mudou a propriedade "nome" para "Maria" 

console.log(a1, a2);
