const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá, ', nome)
    console.log('Boas Vindas ao nosso Sistema!')

    leitor.question('Qual é sua idade? ', (idade) => {

        if(idade >= 18){
            console.log('Você pode tirar sua CNH!')
        }else{
            console.log('Você ainda não pode tirar a sua CHN!')
        }

        leitor.close() // Question é Assicrono, então ele não espera
    })
})