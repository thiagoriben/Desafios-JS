let operaçãoMatemática = prompt("Você deseja somar, subtrair, multiplicar ou dividir?")
let numero1 = Number(prompt("Digite o primeiro Número: "))
let numero2 = Number(prompt("Digite o segundo Número: "))

let soma = numero1 + numero2
let subtrair = numero1 - numero2
let multiplicar = numero1 * numero2
let dividir = numero1 / numero2


switch(operaçãoMatemática){
    case "somar":
        console.log(`A soma dos dois números é: ${soma}`)
    break

    case "subtrair":
        console.log(`A subtração dos dois números é: ${subtrair}`)
    break
    
    case "multiplicar":
        console.log(`A multiplicação dos dois números é: ${multiplicar}`)
    break

    case "dividir":
        console.log(`A divisão dos dois números é: ${dividir}`)
    break
}