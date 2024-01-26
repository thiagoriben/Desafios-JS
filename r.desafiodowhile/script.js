let saldo = 300
let continuar = true

let nome = prompt("insira o seu nome")
let cpf = prompt("insira seu cpf")
let valorInserido = parseFloat(prompt("qual o valor?"))
let opcao = parseInt(prompt("Você deseja fazer um saque[1], ou depositar?[2]"))

do {
    if (valorInserido <= 0){
        alert("Não é possivel realizar a operação.")

    }else{if (opcao === 1) {
        if (valorInserido > saldo){
            alert("Valor não disponível.")
        }else{
            valorPosSaque = valorInserido - saldo
            saldo = valorPosSaque
        }
        
    }else if(opcao === 2){
        valorPosDeposito = valorInserido + saldo
        saldo = valorPosDeposito   
    }else{
        alert("Opção inválida. Tente novamente.")
    }}
    let pergunta = prompt("Você deseja continuar?(s/n)")

    if (pergunta.toUpperCase() !== "SIM") {
        continuar = false
    }
} while (continuar);



