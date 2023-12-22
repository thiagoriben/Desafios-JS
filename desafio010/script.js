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

//FUNÇÃO DE PULAR LINHA

function pularLinha() {
    document.write ("<br>")
}