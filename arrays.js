const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango']
console.log(frutas)

// console.log('Primeira Fruta ', frutas[0])
// console.log('Utima Fruta ', frutas[frutas.length-1])

// console.log('Total de frutas: ', frutas.length)

// frutas.push('Melancia')
// console.log('Utima Fruta ', frutas[frutas.length-1])
// console.log('Total de frutas: ', frutas.length)

frutas.splice(2,1)
console.log('Depois de remover: ', frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('Indicie: ',i,' -> ',frutas[i])
}

frutas.forEach((valor, indice) => {
    console.log('Indice: ', indice,' -> ', valor)
})

for(const fruta of frutas){
    console.log('fruta da vez: ', fruta)
}

