class carro{
    constructor(tipo, estagio){
        this.turbo = new turbo(estagio)
        if(tipo == 1){
            this.velMax = 120
        }else if(tipo == 2){
            this.velMax = 160
        }else if(tipo == 3){
            this.velMax = 200
        }
        this.velMax += this.turbo
    }
}

class turbo{
    constructor(e){
        if(e == 0){
            this.potencia = 0
        }else if(e ==1){
            this.potencia = 50
        }else if(e == 2){
            this.potencia = 70
        }else if(e == 3){
            this.potencia = 100
        }
    }
}