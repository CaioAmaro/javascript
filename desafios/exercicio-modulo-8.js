/* Pratique a criação de funções simples e reaproveitáveis, 
para entender parâmetros e retornos, arrow functions e 
explorar o conceito de callbacks em situações controladas. 
Vamos lá! */

/* Tente realizar os seguintes exercícios:

1. Função de saudação
Crie uma função chamada saudacao que exibe a mensagem 
"Olá! Seja bem-vindo(a)!" ao ser chamada. */

function saudacao(){
    console.log('Olá! Seja bem-vindo(a)!')
}

saudacao()

/* 2. Função com parâmetros
Crie uma função apresentarPessoa(nome, idade)
que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos." 
*/

function apresentarPessoa(nome, idade){
    console.log('Olá, meu nome é ',nome,' e tenho ',idade,' anos.')
}

apresentarPessoa('Caio', 25)

/* 3. Cálculo de IMC
Crie uma função que receba peso e altura e retorne o valor do
IMC. Mostre também uma frase com o resultado. */

function calculoIMC(peso, altura){
    return peso / (altura * altura)
}

const IMC = calculoIMC(120, 1.79)
console.log('Imc deu: ', IMC)

/* 4. Verificar aprovação
Crie uma função verificarAprovacao(nota) que retorna 
"Aprovado" se nota >= 7 ou "Reprovado" caso contrário. */

function verificarAprovacao(nota){
    if(nota >= 7){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

console.log(verificarAprovacao(7))
console.log(verificarAprovacao(8))
console.log(verificarAprovacao(6))

/* 5. Número par ou ímpar
Crie uma função ehPar(numero) que retorna true se o 
número for par e false se for ímpar. Teste a função com 
diferentes valores. */

function ehPar(numero){
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }
}

console.log(ehPar(7))
console.log(ehPar(6))
console.log(ehPar(3))
console.log(ehPar(2))
console.log(ehPar(3.50))
console.log(ehPar(1))

/* 6. Função soma
Crie uma função que recebe dois números e retorna a 
soma deles. Exiba o resultado no console com uma frase completa. */

function somarNumeros(numero1, numero2){
    return numero1 + numero2
}

const soma = somarNumeros(5,3)

console.log('Soma foi :', soma)

/* 7. Reutilizando código
Reescreva o exercício da calculadora de troco usando 
uma função calcularTroco(compra, pagamento). */

function calcularTroco(compra, pagamento){
    if(pagamento < compra){
        return 'Não foi possivel processar a compra.'
    }else{
        return pagamento - compra
    }
}

let troco = calcularTroco(200, 200)
console.log('Troco: ',troco)
troco = calcularTroco(201, 200)
console.log('Troco: ',troco)
troco = calcularTroco(200, 201)
console.log('Troco: ',troco)

/* 8. Arrow function
Transforme a função do exercício 6 em uma arrow
function com sintaxe reduzida. */

const somarNumeroArrow = (numero1, numero2) => numero1 + numero2

let somaArrow = somarNumeroArrow(2,3)
console.log('Soma Arrow: ', somaArrow)

/* 9. Callback simples
Crie uma função executarAcao(acao) que 
recebe uma função como parâmetro e a executa. 
Teste passando uma função que imprime "Executando ação!". */

function executarAcao(acao){
    acao()
}

const acao = () => console.log('Executando ação!')


executarAcao(acao)

/* 10. Desafio do quiz
Crie uma função fazerPergunta(pergunta, respostaCorreta). 
A função deve exibir a pergunta e depois mostrar se a 
resposta está certa ou errada (simule a resposta com uma variável). 
*/

function fazerPergunta(pergunta, respostaCorreta){
    console.log(pergunta)
    let resposta = 6
    if(resposta == respostaCorreta){
        console.log('Parabéns, você acertou!')
    }else{
        console.log('Infelizmente você errou!')
    }
}

const pergunta = 'Quanto é 3+3?'
const respostaCorreta = 6

fazerPergunta(pergunta, respostaCorreta)



