let nome = prompt('Qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let temCartaDeMotorista = prompt('Você tem carta de motorista? Sim/Não')
let temCarro = prompt('Você tem algum carro? Sim/Não')

let limiteDeIdade = 18



if (idade < limiteDeIdade || temCartaDeMotorista === 'Não'){
    console.log(`${nome}, você não pode dirigir.`)
}else if(idade >= limiteDeIdade && temCartaDeMotorista === 'Sim' && temCarro === 'Sim'){
    console.log (`${nome}, você será o motorista.`)
}else {
    console.log(`${nome}, você pode dirigir mas não tem um carro.`)
}