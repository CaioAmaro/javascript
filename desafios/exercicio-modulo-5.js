/* O objetivo aqui é aplicar operadores aritméticos, 
lógicos e de comparação em situações práticas, 
como simulações de sistemas simples e validações de dados. 
Vamos lá! */

/* 1. Verificação de maioridade
Crie uma variável idade e verifique se a pessoa é maior de idade 
(18 anos ou mais). Mostre no console uma mensagem adequada. */

const idade = 17
const maiorIdade = idade >= 18
console.log('A pessoa tem maior idade?', maiorIdade)

/* 2. Situação do aluno
Crie duas variáveis com notas de um aluno. Calcule a média. 
Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, 
mostre "Reprovado". */

const notaUm = 8.3
const notaDois = 6
const media = (notaUm + notaDois) / 2
const mediaAprovado = media >= 7

if(mediaAprovado){
    console.log('Aprovado com ',media,' na média')
}else{
    console.log('Reprovado com ',media,' na média')
}

/* 3. Simulação de troco
Crie uma variável valorCompra com 35.90 e valorPago com 50.
 Calcule e mostre o troco a ser devolvido. */

 const valorCompra = 35.90
 const valorPago = 50
 const troco = valorPago - valorCompra

 console.log('Valor a ser devolvido: R$',troco)

/* 4. Validação de senha
Crie duas variáveis com senhas digitadas em momentos diferentes. 
Verifique se são iguais usando operadores de comparação. */

const senha = "teste"
const senhaConfirmacao = "testet"
const senhasIguais = senha === senhaConfirmacao

if(senhasIguais){
    console.log('As senhas são iguais!')
}else{
    console.log('As senhas são diferentes.')
}

/* 
5. Controle de faltas
Considere totalAulas = 80 e faltas = 25. Calcule se as 
faltas ultrapassam 25% das aulas. Mostre a conclusão no console. */

const totalAulas = 80
const faltas = 10
const porcentagemFaltas = faltas / totalAulas
const limiteFalta = 0.25
const faltasUltrapassaLimite = porcentagemFaltas > limiteFalta

if(faltasUltrapassaLimite){
    console.log('As faltas ultrapassaram o limite de 25%')
}else{
    console.log('As faltas não passaram do limite')
}

console.log('Porcentagem das faltas ', porcentagemFaltas)

/* 6. Verificação de login
Crie duas variáveis temLogin e temSenha. Use operadores lógicos 
para verificar se o usuário pode acessar o sistema. */

const temLogin = true
const temSenha = true
const acessoSistema = temLogin && temSenha

if(acessoSistema){
    console.log('Acesso permitido')
}else{
    console.log('Acesso negado')
}

/* 7. Valor negado
Crie uma variável booleana chamada disponível. 
Mostre seu valor negado no console, ou seja, se estiver disponível,
 exiba que não está, e vice-versa. */

 const disponivel = true

 if(disponivel){
    console.log('Recurso disponivel')
 }

/* 8. Condições compostas
Crie duas variáveis com números. 
Verifique se os dois são pares e se são iguais. Exiba a conclusão. */

const numeroUm = 3
const numeroDois = 3
const numerosSaoPares = (numeroUm % 2 == 0) && (numeroDois % 2 == 0)
const numerosSaoIguais = numeroUm === numeroDois
const numerosSaoIguaisEPares = numerosSaoPares && numerosSaoIguais

if(numerosSaoIguaisEPares){
    console.log('Os números são iguais e pares')
}else{
    console.log('Os números não são iguais e pares')
}

/* 9. Calculadora de porcentagem
Calcule quanto é 15% de 120 usando operadores matemáticos. 
Mostre a frase: "15% de 120 é igual a X." */

const porcetagem = 15
const de = 100
const resultado = (porcetagem / de) * 100
console.log(porcetagem,'% de ',de, ' é ', resultado)

/* 10. Ordem de operações
Escreva a expressão 2 + 3 * 5.
 Mostre o resultado e explique por que a multiplicação foi 
 feita antes da soma. */ 

 const expressao = 2 + 3 * 5
 console.log('O resultado é ', expressao, " devido a ordem das operações matématicas")