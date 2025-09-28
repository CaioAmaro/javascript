const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa){
    console.log('Chaves: ', chave)
    console.log('Valor: ', pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entrada: ', entradas)