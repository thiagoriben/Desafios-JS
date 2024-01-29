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
    let idHotel
    let existe = false

    do {
        idHotel = parseInt(prompt("Digite o id do hotel."))
        for (let i = 0; i < arrayHoteis.length; i++)
            if (idHotel == arrayHoteis[i].id) {
                i = arrayHoteis.length
                existe = true
            } else if(i == arrayHoteis.length - 1){
                console.log("Hotel não cadastrado")
            }
        
    } while (!existe);

    let nomeResponsável = prompt("digite o nome do responsável")
    let diaEntrada = prompt("digite o dia da entrada")
    let diaSaída
    do {
        diaSaída = parseFloat(prompt("digite o dia de saída"))
        if (diaSaída < diaEntrada) {
            console.log("O dia de saida deve ser maior que o dia de entrada.")
        }
    } while (diaSaída < diaEntrada);

    let reserva = new Reserva(id, idDoHotel, nomeResponsável, diaEntrada, diaSaída)
    idReserva++
    arrayReservas.push(reserva)

}
