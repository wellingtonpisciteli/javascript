const caixa = document.querySelector("#caixa")

class carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }      
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    info(){
        let traco = "-------------------------------------------------"
        console.log(`Nome do carro: ${this.nome}\nTipo: ${this.tipo}\nV.Max: ${this.velmax}km/h\n${traco}\nFim da lista!`)
    }
}

let c1 = new carro("Rapidao", 1)
let c2 = new carro("Serviçal", 2)
let c3 = new carro("Elegante", 3)
let c4 = new carro("Bombadao", 4)

c1.setNome("Lerdão")

c1.info()
c2.info()
c3.info()
c4.info()