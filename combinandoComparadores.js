const idade = 18
const maiorDeIdade = idade >=18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH //AND
console.log('Pode dirigir?', podeDirigir)


const podeViajarSozinha = maiorDeIdade || possuiCNH
console.log('Pode viajar Sozinha?', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade
console.log('Precisa de Acompanhante? ',precisaDeAcompanhante)

// AND &&
// OR ||
// NOT !