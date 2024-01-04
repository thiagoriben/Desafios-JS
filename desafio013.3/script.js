let arrayNormal = [] 
let indiceArray = 0
let novoNumero = 0
let qtdn = 0

qtdn = prompt('quantos números você deseja inserir?')

while (novoNumero < qtdn){
    let addNumero = prompt(`Insira ${qtdn} números inteiros e positivos.`)
    // convertendo em inteiro
    addNumero = parseInt(addNumero) 

    // Verificando se o número é válido (inteiro e positivo)
    if (!isNaN(addNumero) && addNumero > 0 && Number.isInteger(addNumero)){
    arrayNormal[indiceArray] = addNumero 
    indiceArray++
    novoNumero++

    // Se o número inserido não for válido, pede para inserir novamente
    }else {alert('Por favor, insira um número inteiro e positivo.')}
    
    if (novoNumero === qtdn) {
        break
    }
}

console.log("Array normal:", arrayNormal)

let arrayInvertido = arrayNormal.slice().reverse()
console.log("Array invertido:", arrayInvertido)

