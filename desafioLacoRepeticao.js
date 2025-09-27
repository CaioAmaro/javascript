let totalNumerosPares = 0
let totalNumerosImpares = 0

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        totalNumerosPares++
    }else{
        totalNumerosImpares++
    }
}

console.log('Total Números Pares: ', totalNumerosPares)
console.log('Total Números Ímpares: ', totalNumerosImpares)