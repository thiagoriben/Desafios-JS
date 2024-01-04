let numeros = [] 
let indiceArray = 0
let novoNumero = true

while (novoNumero === true){
    // convertendo em inteiro
    let addNumero = prompt('Insira um número inteiro e positivo.')
    addNumero = parseInt(addNumero) 

    // Verificando se o número é válido (inteiro e positivo)
    if (!isNaN(addNumero) && addNumero > 0 && Number.isInteger(addNumero)){
    numeros[indiceArray] = addNumero 
    indiceArray++

    // Se o número inserido não for válido, pede para inserir novamente
    }else {alert('Por favor, insira um número inteiro e positivo.')}
    
    
    let continuar = prompt('Você deseja continuar? (S/N)')
        if(continuar.toUpperCase() !== "S"){
            novoNumero = false
        }
    }

console.log(numeros)