let quantidade
let valor

window.alert('Seja bem-vindo(a) ao nosso posto, escola uma das opções a seguir.')
let opção = prompt('Se você quiser abastecer com gasolina, digite: Gasolina. Caso queira abastecer com álcool, digite: Álcool. Caso queira calibrar os pneus, digite: Calibrar.')

switch(opção){
    case "gasolina":
        valor = parseInt(prompt('Digite o valor de quanto deseja abastecer? Valor do litro: R$5?'))
        quantidade = valor / 5
        console.log (`Foram abastecidos ${quantidade}L de gasolina`)
        break
    case "alcool":
        valor = parseInt(prompt('Digite o valor de quanto deseja abastecer? Valor do litro: R$3?'))
        quantidade = valor / 3
        console.log (`Foram abastecidos ${quantidade}L de alcool`)
        break
    default:
        console.log(`Você calibrou os pneus`)
        break
}