let numeros = [] 
let indiceArray = 0
let novoNumero = 0

while (novoNumero < 5){
    // convertendo em inteiro
    let addNumero = prompt('Insira cinco número inteiro e positivo.')
    addNumero = parseInt(addNumero) 

    // Verificando se o número é válido (inteiro e positivo)
    if (!isNaN(addNumero) && addNumero > 0 && Number.isInteger(addNumero)){
    numeros[indiceArray] = addNumero 
    indiceArray++
    novoNumero++

    // Se o número inserido não for válido, pede para inserir novamente
    }else {alert('Por favor, insira um número inteiro e positivo.')}
    
    if (novoNumero === 5) {
        break
    }
}

//invertendo array
numeros.reverse()

console.log(numeros)