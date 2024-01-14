class Computador {

        constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
            this.tipo = tipo
            this.processador = processador
            this.video = video
            this.armazenamento = armazenamento
            this.memoriaRam = memoriaRam
            this.SSD = SSD
        }
}

const meuComputador = new computador("notebook", "ryzen 5", "integrado", "1tb", "20gb", true )

console.log (meuComputador)