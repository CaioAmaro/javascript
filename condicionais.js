const idade = 18;

/* if(idade >= 18){
    console.log('É maior de idade.')
}else{
    console.log('É menor de idade.')
} */

idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')


// entre 9 e 10 excelente
// entre 7 e 8 bom 
// entre 4 e 6 médio
// entre 0 e 3 ruim

const notaDoAluno = 8;

if(notaDoAluno >= 9 && notaDoAluno <= 10){
    console.log('Excelente')
}else if(notaDoAluno >= 7){
    console.log('Bom')
}else if(notaDoAluno >= 4){
    console.log('Médio')
}else if(notaDoAluno >= 0){
    console.log('Ruim')
}