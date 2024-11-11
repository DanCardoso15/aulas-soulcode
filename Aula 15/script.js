const pessoa = {
    nome: "Danilo Cardoso", // propriedade
    idade: 22, // propriedade
    cumprimentar: function() { // método
        console.log(`Olá meu nome é ${this.nome}.`); // É necessário usar o "this" para referênciar a propriedade "nome" do objeto. Não pode usar "Arrow function" dentro do objeto porque o "this" não irá funcionar.
    }
} // Chaves do objeto não representa o escopo

console.log(pessoa);
pessoa.cumprimentar();

// Funções Construtores -> Responsáveis por criar um novo objeto (instância)
function Pessoa(nome, idade) { // Primeira letra sempre maiúscula
    this.nome = nome; // "this" faz referência ao objeto atual
    this.idade = idade;
}

const pessoa2 = new Pessoa("Daniel", 27);
console.log(pessoa2);

// Operador Spread (Espalhar) -> Copia as propriedade de um objeto para outro
const produto1 = {
    descricao: "Manga Vermelha",
    preco: 2.5,
    categoria: "Frutas e Horteliças"
}

const produto2 = {...produto1}; // Desta forma, está sendo copiando propriedades de produto1 para produto2

// const produto2 = produto; // "produto2 = produto" está fazendo a referência ao mesmo objeto, não uma cópia
produto1.descricao = "Manga Azul";
console.log(produto1.descricao);
console.log(produto2.descricao);

// Desestruturação (Destructuring) -> Forma de extrair valores de objetos ou arrays e atribuí-los a variáveis individuais.
const produto3 = {
    descricao: "SSD 512GB",
    preco: 400
};

// const descricao = produto3.descricao; // antes
const { descricao, preco, categoria } = produto3; // Depois // desestruturação de objeto
console.log(descricao); // SSD 512GB
console.log(preco); // 400
console.log(categoria);

const pessoa3 = {
    nome: "Estefane",
    endereco: {
        rua: "Rua Aqui Perto",
        UF: "CE"
    }
};

const { nome, endereco: { rua, UF} } = pessoa3;

// console.log(pessoa3.nome);
// console.log(pessoa3.endereco.rua);
// console.log(pessoa3.endereco.UF);

console.log(nome); 
console.log(rua);
console.log(UF);

const venda = {
    cliente: "Bismark Araujo",
    data: "11/11/2024",
    nota: {
        codigo: "0498503485",
        tipo: "XML"
    }
};

const { cliente, nota: { codigo } } = venda;
console.log("Cliente:", cliente);
console.log("Codigo da Nota:", codigo);

// Desestruturação de Lista/Array/Vetor
const nomes = ["Rodrigo", "Thiago", "Leonardo"];
const [primeiro, segundo, terceiro] = nomes;
console.log(segundo); // Thiago

const tarefas = [
    { desc: "Estudar JavaScript" },
    { desc: "Academia"},
    { desc: "Sair com Cachorro"},
]; 

const [prim, segund, {desc}] = tarefas;
// console.log(tarefas[0].desc);
console.log(prim);
console.log(segund);
console.log(desc);

const nomes2 = [...nomes] // Faz a cópia da lista
console.log(nomes2);









