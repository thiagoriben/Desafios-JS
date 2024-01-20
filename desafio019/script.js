function perguntar (){
    var nome
    var salario

    nome = prompt("Qual o seu nome?")
    salario = parseFloat(prompt("Qual o seu salário?"))
    calcular(nome, salario)
}

function calcular (nome, salario){
    var aumento = 0
    if(salario < 1500){
        var porcentagem = "20%"
        aumento = salario * 0.2
    }else if(salario > 1501 && salario <= 2000){
        var porcentagem = "15%"
        aumento = salario * 0.15
    }else if(salario > 2001 && salario <= 3000){
        var porcentagem = "10%"
        aumento = salario * 0.1
    }else{
        aumento = salario * 0.05
        var porcentagem = "5%"
    }

    var novoSalario = salario + aumento
novoSalarioFix = novoSalario.toFixed(2)
console.log(`Nome do colaborador: ${nome}`)
console.log(`Salário: R$${salario}`)
console.log(`Aumento: ${porcentagem}`)
console.log(`Salário reajustado R$${novoSalarioFix}`)

perguntarNovamente()
}

function perguntarNovamente(){
    var resposta = prompt("Deseja calcular novamente? (s/n)")
    if(resposta == "s"){
        perguntar()
    }else {
        console.log("Programa encerrado")
 }
}

perguntar()