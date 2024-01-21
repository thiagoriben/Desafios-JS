let taComFome = prompt('Você está com fome? Sim/Não')
let temDinheiro = prompt('Você tem dinheiro? Sim/Não')
let restauranteAberto = prompt('O restaurante está aberto? Sim/Não')

if (taComFome === "não" && temDinheiro === "não") {
    console.log('Hoje a janta será em casa.')
}else if(temDinheiro === "sim" || restauranteAberto === "sim") {
    console.log('Hoje o jantar será em seu restaurante preferido!')
}else {
    console.log('Peça um Delivery')
}