//FUNÇÃO

function pularLinha(){
    document.write("<br>")
}
//const {pularLinha} = require('./funcoes')


//CONHECENDO O USUÁRIO

let nome = String(prompt("Qual o seu nome?"))
let idade = parseInt(prompt("Qual a sua idade?"))
let peso = parseFloat(prompt("Qual o seu peso?"))
let alturaSemPonto = parseFloat(prompt("Qual a sua altura?"))
let profissao = String(prompt("Qual a sua profissão?"))

const altura = parseFloat(alturaSemPonto.toFixed())


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

pularLinha()
pularLinha()

//CALCULO DE IMC

const IMCdesformatado = peso / (altura * altura) //FORMATAR O VALOR PRA: EX: 18,5 OU 26,8. TA SAINDO ASSIM: 0.0020515086478979927

const IMC = IMCdesformatado.toFixed(1)

if (IMC < 18,5) {
    document.write(`${nome}, seu imc é: ${IMC}, e seu você está muito magro. (magreza)`)
    }else if (IMC > 18,5 && IMC < 24,9){
         document.write(`${nome}, seu imc é: ${IMC}, e seu peso está adequado para sua altura. (normal)`)
        }else if (IMC > 25 && IMC < 30) {
             document.write(`${nome}, seu imc é: ${IMC}, e você está acima do peso. (sobrepeso)`)
            }
else{
    document.write(`${nome}, seu imc é: ${IMC}, e você é obeso. (obesidade)`)
}

pularLinha()
pularLinha()

//CRIANDO VARIÁVEIS

const anoAtual = 2023
let contador = 0

//INFORMANDO IDADE APARTIR DOS ANOS

for (let anoDeNascimento = anoAtual - idade; anoDeNascimento <= anoAtual; anoDeNascimento++, contador++){
    document.write (`${anoDeNascimento}: ${contador} anos de idade.<br>`)
}

pularLinha()
pularLinha()

//PERGUNTAR SE QUER CONTINUAR OU FINALIZAR O PROGRAMA

let continuar;

do {
  const resposta = prompt('Deseja inserir novos dados? (s/n): ');
  
  continuar = resposta.toLowerCase() === 's';
} while (continuar);

document.write('Programa finalizado.');


//ADIOCIONAR QUEBRA DE LINHA COM FUNÇÃO, E TENTAR IMPLEMENTAR O funcoes.js NO HTML




