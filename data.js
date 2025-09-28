const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês 0 - 11: ', agora.getMonth())
console.log('Dia do Mês: ', agora.getDate())
console.log('Horas: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())

const nascimento = new Date('2000-01-10T02:00:00.000Z')

console.log(nascimento)

console.log('Data formatada (BR) :', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US) :', nascimento.toLocaleDateString('en-US'))