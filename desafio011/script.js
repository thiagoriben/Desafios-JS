let continuar

do {
    var nome = prompt("Digite o seu nome")
    var idade = prompt("Digite sua idade")
    var salario = prompt("Digite seu salário atual")

    const resposta = prompt("Você digitou algo errado? (s/n)")
    
    continuar = resposta === 's'
} while (continuar)

console.log(`Olá, ${nome}! você tem ${idade} anos, e seu salário atual é: ${salario}. Seu salário em 10 anos será:`)

//loop de for

let aumento = 0.015
console.log ("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2
    console.log(`${ano}: ${salario}`)
}