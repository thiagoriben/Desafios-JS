let numerosRecebidos = []
let continuar = true
let posicaoDoArray = 0

while(continuar === true){
    var valorRecebido = prompt('Digite um número')
    numerosRecebidos[posicaoDoArray] = valorRecebido
    let dContinuar = prompt('Você deseja inserir mais um valor? (s/n)')
    posicaoDoArray++
    if (dContinuar != 's'){
        continuar = false
    }
}

console.log (numerosRecebidos.reverse())