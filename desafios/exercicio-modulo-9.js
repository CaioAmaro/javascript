/* Pratique a criação, manipulação e iteração de arrays usando 
for, for...of e métodos funcionais como forEach, map e 
filter, aplicando esses conceitos em problemas do cotidiano. 
Vamos lá! */

/* Tente realizar os seguintes exercícios:
1. Lista de nomes
Crie um array com 5 nomes. Use for para 
imprimir cada nome no console, um por linha. */

const nomes = ['Caio', 'Brunna', 'Ewelly', 'Pinto', 'Amaro']

for(let i=0; i < nomes.length; i++){
    console.log('[',i,'] -> ',nomes[i])
}

console.log()
console.log('-----')
console.log()

/* 2. Adicionar e remover itens
Comece com um array de frutas. Adicione 
uma nova fruta ao final com push() e remova a primeira
com shift(). Mostre o array antes e depois. */

const frutas = ['Melancia', 'Banana', 'Uva']

console.log('Começo: ', frutas)
frutas.push('Maçã')
console.log('Depois de inserir: ', frutas)
frutas.shift()
console.log('Depois de deletar a primeira: ', frutas)

console.log()
console.log('-----')
console.log()

/* 3. Contar itens do array
Crie um array com nomes de cidades e exiba no console a 
quantidade total de itens usando .length. */

const cidades = ['Manaus', 'Blumenau', 'Curitiba']
console.log('Total de itens na array é: ', cidades.length)

console.log()
console.log('-----')
console.log()

/* 4. Somar todos os números
Crie um array com 10 números. Use for para somar
todos os valores e mostrar o total no final. */

const numerosSomar = [1, 5, 3, 4, 2, 2, 4, 6, 4, 3]
let totalSoma = 0

for(const numero of numerosSomar){
    totalSoma += numero
}

console.log('O total somado é: ', totalSoma)

console.log()
console.log('-----')
console.log()

/* 5. Média de notas
Crie um array com 4 notas. Some os valores e calcule a 
média, exibindo uma mensagem de "Aprovado" ou "Reprovado" 
com base na média >= 7. */

const notas = [7,7,7,7]
let somaNotas = 0

for(const nota of notas){
    somaNotas+= nota
}

const mediaNota = somaNotas / notas.length

console.log('Média: ', mediaNota)

if(mediaNota >= 7){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

console.log()
console.log('-----')
console.log()

/* 6. Mensagens personalizadas com forEach
Crie um array com nomes de usuários. Use forEach para 
imprimir "Olá, [nome]!" para cada um. */

const nomesSaudacao = ['Brunna', 'Caio', 'Ewelly']

for(const nome of nomesSaudacao){
    console.log('Olá ', nome, '!')
}

console.log()
console.log('-----')
console.log()

/* 7. Descontos com map
Crie um array com preços de produtos. 
Use map para aplicar 10% de desconto em cada um 
e mostre os preços com desconto. */

const precosOriginal = [100, 1000, 10000]

const precosComDesconto = precosOriginal.map((preco) => {
    return preco * 0.1
})

console.log('Preços com Desconto: ', precosComDesconto)

console.log()
console.log('-----')
console.log()

/* 8. Filtrar valores altos
Crie um array com idades. Use filter para retornar
apenas as idades maiores ou iguais a 18 e exiba o resultado. */

const idades = [2, 3, 4, 18, 19, 2, 25, 3, 1, 28, 3, 45,45]
const idadesAdultos = idades.filter((idade) => {
    return idade >= 18
})

console.log('Idades maiores que 18 anos: ', idadesAdultos)
 
/* 9. Simulando carrinho de compras
Crie um array de preços e calcule o valor total da 
compra. Depois, aplique um cupom de 20% de 
desconto e mostre o valor final. */

const carrinho = [34,20, 10, 200, 34, 23]
let somaCarrinho = 0

for(const item of carrinho){
    somaCarrinho += item
}

const valorComDesconto = somaCarrinho - (somaCarrinho * 0.2)

console.log('Valor do carrinho: R$', somaCarrinho)
console.log('Valor do desconto: R$', somaCarrinho * 0.2)
console.log('Valor aplicado desconto 20% R$', valorComDesconto)

/* 10. Lista de tarefas
Crie um array com 5 tarefas (strings). 
Use filter para mostrar apenas as tarefas
que ainda não foram marcadas como concluídas
(use uma convenção como "[x]" para concluídas).  */

const tarefas = ['[x] Lavar Roupa', '[x] Estudar', '[x] Trabalhar', '[] Jogar', '[] Namorar']

const tarefasPedentes = tarefas.filter( (tarefa) => {
    return tarefa.startsWith('[]')
})

console.log('Tarefas Pedentes: ', tarefasPedentes)