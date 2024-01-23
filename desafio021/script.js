const arrayA = [13,20,10,22,24,20,27,17,19,14]
const arrayB = [24,22,23,11,15,17,29,14,16,21]

function numerosEmComum (arrayA, arrayB){
    return arrayA.filter(elemento => arrayB.includes(elemento))    
}

let resultado = numerosEmComum(arrayA, arrayB)
console.log (resultado)
