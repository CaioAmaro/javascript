const frutas = ['Maçã', 'Banana', 'Goiaba']
const maisFrutas = ['Uva', 'Morango', 'Kiwi']
const clone = [...frutas]
const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga')

console.log('Frutas: ', frutas)
console.log('maisFrutas: ', maisFrutas)
console.log('clone: ', clone)
console.log('todasAsFrutas: ', todasAsFrutas)

const [primera, segunda, ...restante] = todasAsFrutas

console.log(primera)
console.log(segunda)
console.log(restante)