let nome = prompt('qual o seu nome?');
let idade = parseInt(prompt('qual a sua idade?'));
let altura = parseFloat(prompt('qual a sua altura?'));
let peso = parseFloat(prompt('qual o seu peso?'));  

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0


imc = peso / (altura * altura)
imcFix = imc.toFixed(1)

console.log (`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura} de altura, pesa ${peso}Kg e seu IMC é ${imcFix} Kg/m2.`)

