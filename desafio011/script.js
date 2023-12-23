let continuar

do {
    let nome = prompt("Digite o seu nome")
    let idade = prompt("Digite sua idade")
    let salario = prompt("Digite seu salário atual")
    
    const resposta = prompt("Você digitou algo errado? (s/n)")
    
    continuar = resposta === 's'
} while (continuar)

//loop de for