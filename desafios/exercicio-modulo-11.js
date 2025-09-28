/* Pratique os recursos modernos do JavaScript (ES6+), 
como destruturação, operadores rest e spread, uso de datas, 
modularização e objetos com construtores, aplicando essas 
ferramentas a situações do dia a dia de uma pessoa desenvolvedora. 
Vamos lá! */

/* Tente realizar os seguintes exercícios:

1. Destructuring em objetos
Crie um objeto com nome, idade e email. 
Use destructuring para extrair essas informações em variáveis 
separadas. */

const pessoa = {
    nome: 'Caio Amaro',
    idade: 25,
    email: 'caio@amaro'
}

const { nome, idade, email } = pessoa
console.log(nome, ' ', idade, ' ', email)

/* 2. Destructuring em arrays
Crie um array com 3 linguagens de programação. 
Use destructuring para criar variáveis ling1, ling2 e ling3. */

const linguagens = ['Java', 'Javascript', 'Python']
const [ling1, ling2, ling3] = linguagens
console.log(ling1, ' ', ling2, ' ', ling3)

/* 3. Rest operator em função
Crie uma função que receba um número qualquer de 
argumentos e retorne a soma de todos. Use o operador rest (...). */

function somaTudo(...numeros) {
    let soma = 0
    for (const numero of numeros) {
        soma += numero
    }

    return soma
}

const soma = somaTudo(3, 3, 3)

console.log('Soma é: ', soma)

/* 4. Spread operator com arrays
Crie dois arrays de frutas e combine-os usando o
operador spread. */

const frutas = ['Banana', 'Mamão']
const maisFrutas = ['Maçã', 'Abacaxi']
const juncao = [...frutas, ...maisFrutas]

console.log(juncao)

/* 5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. 
Combine-os em um terceiro objeto usando spread. */

const objetoComNome = {
    nome: 'Caio Amaro'
}

const objetoComIdade = {
    idade: 25
}

const objetoUnindo = {
    ...objetoComNome,
    ...objetoComIdade
}

console.log(objetoUnindo)

/* 6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". 
Se o nome não for passado, use "visitante" como valor padrão. */

function saudacao(nome = 'Visitante') {
    console.log('Seja bem vindo ', nome)
}

saudacao()
saudacao('Caio')


/* 7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano 
formatados. */

const agora = new Date()
console.log("Ano: ", agora.getFullYear())
console.log("Mês: ", agora.getMonth())
console.log("Dia: ", agora.getDate())


/* 8. Modularização com export/import
Crie uma função simples chamada somar(a, b) e exporte-a como 
módulo (modo CommonJS ou ES Modules, dependendo do ambiente). */

// export function somaExport(a, b) {
//     return a + b
// }

/* 9. Classe com construtor
Crie uma classe Livro com propriedades titulo e autor. 
Crie dois objetos dessa classe. */

class Livro {

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }



    descrever() {
        return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
    }

}


const livro1 = new Livro('Teste', 'Não sei')
const livro2 = new Livro('Teste2', 'Ninguem')


/* 10. Método dentro da classe
Adicione um método descrever() à classe Livro que retorna 
uma string com as informações do livro.  */

console.log(livro1.descrever())
console.log(livro2.descrever())