class Computador {

        constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
            this.tipo = tipo
            this.processador = processador
            this.video = video
            this.armazenamento = armazenamento
            this.memoriaRam = memoriaRam
            this.SSD = SSD
        }

    exibirInformações(){
        console.log(`==INFORMAÇÕES DO COMPUTADOR==`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Vídeo: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento}`)
        console.log(`Memória Ram: ${this.memoriaRam}`)
        console.log(`SSD: ${this.SSD}`)
    }
}

const meuComputador = new Computador("notebook", "ryzen 5", "integrado", "1tb", "20gb", true )

meuComputador.exibirInformações()