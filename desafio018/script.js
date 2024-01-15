const carros = []
let contador = 0
repetir = true
let distancia = prompt("Digite qual a distância.")

while (repetir === true){

class Carro {
        constructor (nome, potencia, velocidadeMaxima, aceleracao, distancia){
            this.nome = prompt("Digite qual a equipe do carro.")
            this.potencia = prompt("Digite qual a potência do carro.")
            this.velocidadeMaxima = prompt("Digite qual a velocidade Maxima do carro.")
            this.aceleracao = prompt("Digite qual a aceleração do carro.")
        }
        exibirInformações(){
            console.log(`CARRO:${contador}`)
            console.log(`${this.nome}`)
            console.log(`${this.potencia}`)
            console.log(`${this.velocidadeMaxima}`)
            console.log(`${this.aceleracao}`)
            console.log(`${this.distancia}`)
        }
        tempoSegundosDistancia(){
            let resultado = distancia / (this.velocidadeMaxima / this.aceleracao) 
            console.log (resultado)
        }
    }

    const novoCarro = new Carro()
    carros.push(novoCarro)

    let pergunta = prompt("Deseja adicionar mais informações? (S/N).")
    if (pergunta.toUpperCase() !== "S"){
        repetir = false
    }else{
        contador ++
    }
}

console.log(carros)

class Corrida {
    constructor (nome,tipo, distancia, participantes, vencedor){
        this.nome = nome//do local da corrinda
        this.tipo = tipo//formula 1, stock car
        this.distancia = distancia//distancia q é um valor q recebemos anteriormente
        this.participantes = participantes//o array de objeto da classe carro
        this.vencedor = vencedor// qual equipe ganhou a corrida
    }

    
}



//ver qual equipe ganhou pelo resultado.
//fzr parte 3 do cod