/* Pratique o uso de laços for, while e do...while 
para repetir ações de forma controlada. 
Resolva situações em que o código precisa 
executar várias vezes, como em jogos, 
listas ou cálculos progressivos. Vamos lá!
 */

/* Tente realizar os seguintes exercícios:
1. Contador de 1 a 10
Use um for para mostrar no console os 
números de 1 até 10, um por linha. */

for(let i = 1; i <= 10; i++){
    console.log(i)
}

console.log('Exercicio 01')
console.log('')

/* 2. Soma de 1 a 100
Some todos os números de 1 a 100. 
Mostre o resultado no final com uma mensagem explicativa. */

let soma = 0

for(let i = 1; i <= 100; i++){
    soma +=i
}

console.log('Soma dos números de 1 a 100 foi: ', soma)
console.log('Exercicio 02')
console.log('')

/* 3. Tabuada personalizada
Peça um número e mostre a tabuada desse número (de 1 a 10) 
usando um for. */

const numeroTabuada = 5

for(let i = 1; i <= 10; i++){
    const resultado = 5 * i 
    console.log(numeroTabuada, ' x ', i, ' = ' , resultado)
}

console.log('Exercicio 03')
console.log('')



/* 4. Contagem regressiva
Use while para contar de 10 até 0 no console. 
Mostre uma mensagem no fim: "Contagem finalizada!". */

let contagemRegressiva = 10

while(contagemRegressiva >= 0){
    console.log(contagemRegressiva)

    if(contagemRegressiva === 0){
        console.log('Contagem finalizada!')
    }

    contagemRegressiva--
}

console.log('Exercicio 04')
console.log('')

/* 5. Receber números até digitar 0
Use do...while para simular a entrada de números. 
O programa deve continuar até que o usuário digite 0. 
Ao final, mostre quantos números foram digitados. */

let numeros = [2, 3, 4, 0]
let index = 0;
let resultado = numeros[index]

do{

    console.log('Valor avaliado: ', resultado)
    if(resultado !== 0){
        index++
        resultado = numeros[index]
    }

}while(resultado !== 0);

console.log('Exercicio 05')
console.log('')


/* 6. Jogo do número secreto
Defina uma variável numeroSecreto com o valor 7. 
O usuário tem 3 tentativas para acertar 
(simule essas tentativas com variáveis).
Mostre mensagens de "Acertou!" ou "Tente novamente". */

let numeroSecreto = 7
let tentativas = 3
let chutes = [2,1,1,2]
let chute = -1
let indexJogoSecreto = 0

while(chute !== numeroSecreto && tentativas > 0){
    chute = chutes[indexJogoSecreto];

    if(chute === numeroSecreto){
        console.log('Acertou!')
    }else{
        tentativas--
        indexJogoSecreto++

        console.log('Você errou');

        if(tentativas >= 1){
            console.log('Tentativas restantes: ', tentativas)
        }
    }

    if(tentativas === 0){
        console.log('Você perdeu todas suas tentativas :(')
    }
}


console.log('Exercicio 06')
console.log('')

/* 7. Idade ao longo dos anos
Crie uma variável anoNascimento e anoAtual. 
Use um for para listar a idade da pessoa ano a ano até o ano atual. */

let anoNascimento = 2000
let anoAtual = 2025
let idade = 0

for(let i = anoNascimento; i <= anoAtual; i++){
    console.log('Em ',i,' tinha ',idade,' anos.')
    idade++
}

console.log('Exercicio 07')
console.log('')

/* 8. Listando números pares
Mostre todos os números pares entre 1 e 50 
usando for. */

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

console.log('Exercicio 08')
console.log('')

/* 9. Contar múltiplos de 3 entre 1 e 100
Mostre no console quantos números entre 1 e 
100 são divisíveis por 3. */

let multiplosDeTres = 0
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        multiplosDeTres++
    }
}

console.log('Existem ',multiplosDeTres, 'Multiplos de 3 nesse intervalo')
console.log('Exercicio 09')
console.log('')

/* 10. Menu com repetição
Crie um menu simples que exibe opções como
 "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". 
 Use do...while para repetir o menu até o usuário escolher sair.  */

let opcoes = [2,2,2,2,2,2,1]
let indexMenu = -1
let opcao = 0

 do{

    if(indexMenu < opcoes.length-1){
        indexMenu++
        opcao = opcoes[indexMenu]
    }
    
    console.log('1 - Ver saldo')
    console.log('2 - Fazer Depósito ')
    console.log('3 - Sair')


    if(opcao === 3){
        console.log('Você saiu do Sistema!')
    }else{
        console.log('Você ainda está navegando')
    }

    if(indexMenu === opcoes.length-1){

        if(opcoes[indexMenu] !== 3){
            console.log('Usuario não teve nenhuma interação para sair')
            opcao = 3;
        }
    }

 }while(opcao !== 3);