/* Pratique a criação e manipulação de objetos. 
Acesse e modifique propriedades, use loops com 
for...in e aplique a estrutura de objeto a cenários 
do dia a dia. Vamos lá! */

/* Tente realizar os seguintes exercícios:
1. Criando um objeto pessoal
Crie um objeto com seu nome, idade e profissão. */

const eu = {
    nome: 'Caio',
    idade: 25,
    profissao: 'QA'
}

/* 2. Acessando propriedades
Acesse e exiba o valor da propriedade "nome" no console. */

console.log(eu.nome)


/* 3. Atualizando valores
Modifique a propriedade "idade" com um novo valor. */

eu.idade = 26
console.log(eu['idade'])

/* 4. Adicionando uma nova propriedade
Adicione ao objeto uma nova propriedade chamada "cidade". */

eu.cidade = 'Blumenau'

console.log(eu)

/* 5. Função com objeto
Crie uma função que recebe um objeto pessoa e retorna 
uma frase com seus dados. */

function apresentacaoPessoa(pessoa){
    console.log('Olá, meu nome é ', pessoa.nome)
    console.log('Tenho ',pessoa.idade,' anos')
    console.log('Moro em ', pessoa.cidade)
    console.log('Estou começando meu nome cargo em ', pessoa.profissao)
}

apresentacaoPessoa(eu)

/* 6. Lista de pessoas
Crie um array com 3 objetos, cada um 
representando uma pessoa com nome e idade. */

const pessoas = [
    {nome: 'Caio', idade: 2},
    {nome: 'Brunna', idade: 19},
    {nome: 'Ewelly', idade: 18}
]

console.log(pessoas)

/* 7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das 
pessoas com 18 anos ou mais. */

const pessoasMaioresIdade = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18
})

console.log('As pessoas com maior idade são: ', pessoasMaioresIdade)

/* 8. Objeto com método
Crie um objeto com um método chamado "saudacao" 
que imprime "Olá, eu sou [nome]". */

const pessoa = {
    nome: 'Caio Amaro',
    saudacao: function () {
        console.log('Olá meu nome é', this.nome)
    }
}

pessoa.saudacao()
console.log(pessoa)

/* 9. Listando propriedades com for...in
Use um laço for...in para listar todas as 
propriedades e seus valores do objeto pessoal criado no exercício */

for(chave in eu){
    console.log(chave,': ', eu[chave])
}

const chaves = Object.keys(eu)
const valores = Object.values(eu)
const pares = Object.entries(eu)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Pares: ', pares)


/* 10. Cálculo de compra
Crie um objeto produto com preco e quantidade, e 
calcule o valor total da compra(preco * quantidade). */ 

const produto = {
    preco: 4.55,
    quantidade: 3
}

const valorTotal = produto.preco * produto.quantidade

console.log('O total do produto é : R$', valorTotal)

