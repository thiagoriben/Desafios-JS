//declarando varáveis
let arrayHoteis = []
let arrayReservas = []
let idHotel = 1
let idReserva = 1


//criando classe hotel
class Hotel {
    constructor(id, nome, categoria, endereço, telefone){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereço = endereço
        this.telefone = telefone
    }
}

//criando classe de reserva
class Reserva {
    constructor(id, idDoHotel, nomeResponsável, diaEntrada, diaSaída){
        this.id = id
        this.idDoHotel = idDoHotel
        this.nomeResponsável = nomeResponsável
        this.diaEntrada = diaEntrada
        this.diaSaída = diaSaída
    }
}

//função para cadastrar hotel
function cadastrarHotel() {
    let nome = prompt("Digite o nome do hotel.")
    let categoria = parseInt(prompt("Digite a categoria do hotel."))
    let endereço = prompt("Digite o endereço do hotel.")
    let numeroTelefone = prompt("Digite o telefone do hotel.")

    //criando objeto de hotel
    const objHotel = new Hotel(idHotel, nome, categoria, endereço, numeroTelefone)
    idHotel++
}
//função para cadastrar reserva
function cadastrarReserva() {
    let nomeResponsável = prompt("Digite o nome do responsável.")
    let diaEntrada = parseInt(prompt("qual o dia da entrada."))
    let diaSaída = prompt("qual o dia de saída.")

    //criando objeto da reserva
    const objReserva = new Reserva(idReserva, idHotel, nomeResponsável, diaEntrada, diaSaída)
    idReserva++
}

function exibirReservasDoHotel(idHotel) {
    let pIdExibir = parseInt(prompt("Digite o id do hotel para ver as reservas ja feitas."))
    console.log(pIdExibir)
}