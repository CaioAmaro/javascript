const nome = 'Caio'

if (nome) {
    console.log('Olá ', nome)
} else {
    console.log('Ainda não sei o seu nome')
}

const idade = 3

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else if (idade < 18) {
        console.log('Menor de idade')
    }
}