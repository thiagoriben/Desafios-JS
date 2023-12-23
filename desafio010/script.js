//IMPORTAR

const {pularLinha} = require('./funções')

//CONHECENDO O USUÁRIO

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let peso = Number(prompt("Qual o seu peso?"))
let altura = Number(prompt("Qual a sua altura?"))
let profissao = prompt("Qual a sua profissão?")

document.write (`Olá, ${nome}! você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

pularLinha()
pularLinha()

//VERIFICANDO IDADE

if (idade >= 18) {
    document.write (`${nome}, cê ta liberado pra tomar umas geladas!`)
}else {
    document.write(`Sem gelada para você, ${nome}.` )
}

pularLinha()
pularLinha()

//IDADE FRACIONADA

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

document.write (`sua idade em meses é: ${meses}`)
pularLinha()
document.write (`sua idade em semanas é: ${semanas}`)
pularLinha()
document.write (`sua idade em dias é: ${dias}`)

//CALCULO DE IMC

const IMC = peso / (altura * altura)

if (IMC <= 18,5) {
    document.write(`${nome}, seu imc é: ${IMC}, e seu você está muito magro. (magreza)`)
    }if (IMC >= 18,6 || IMC <= 24,9){
         document.write(`${nome}, seu imc é: ${IMC}, e seu peso está adequado para sua altura. (normal)`)
        }if (IMC >= 25 || IMC <= 30) {
             document.write(`${nome}, seu imc é: ${IMC}, e você está acima do peso. (sobrepeso)`)
            }
else{
    document.write(`${nome}, seu imc é: ${IMC}, e você é obeso. (obesidade)`)
}

//CRIANDO VARIÁVEIS

const anoAtual = 2023
let contador = 0

//INFORMANDO IDADE APARTIR DOS ANOS

for (let anoDeNascimento = anoAtual - idade; anoDeNascimento <= anoAtual; anoDeNascimento++, contador++){
    document.write (`${anoDeNascimento}: ${contador} anos de idade.`)
}




