const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



let acertos = 0;

leitor.question('1) Qual palavra usamos para criar uma função? \n(a) define\n(b) function\n(c) create\n>', (resposta1) => {

    leitor.question('2) Qual dessas é uma estrutura de repetição? \n(a) loopar\n(b) repeat\n(c) for\n>', (resposta2) => {

        leitor.question('3) Qual valor é considerado falsy em Javascript? \n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3) => {


            if(resposta1 == 'b'){
                acertos++
            }

            if(resposta2 == 'c'){
                acertos++
            }

            if(resposta3 == 'b'){
                acertos++
            }


            if(acertos == 3){
                console.log('Você acertou tudo!')
            }else if(acertos == 2){
                console.log('Você acertou somente 2, continue praticando.')
            }else if(acertos == 1){
                console.log('Você acertou 1 foi ruim..')
            }else{
                console.log('Você não acertou nenhuma questão.')
            }

            console.log('Resposta 1: ',resposta1)
            console.log('Resposta 2: ',resposta2)
            console.log('Resposta 3: ',resposta3)

            leitor.close()

        })
    })
})