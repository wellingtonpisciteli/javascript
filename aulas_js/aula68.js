class carro{
    constructor(tipo, estagio){
        if(tipo == 1){
            this.velMax = 120
            this.nome = "normal"
        }else if(tipo == 2){
            this.velMax = 160
            this.nome = "Sport"
        }else if(tipo == 3){
            this.velMax = 200
            this.nome = "SuperSport"
        }
        this.turbo = new turbo(estagio)
        this.velMax += this.turbo.potencia
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("----------------------")
    }
}

class turbo{
    constructor(estagio){
        if(estagio == 0){
            this.potencia = 0
        }else if(estagio ==1){
            this.potencia = 50
        }else if(estagio == 2){
            this.potencia = 70
        }else if(estagio == 3){
            this.potencia = 100
        }else if(estagio == 4){
            this.potencia = 200
        }
    }
}

class carroEspecial extends carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.tipoInfo = 0
        this.nome = "Carro Especial"
        this.vel = 250
        this.velMax = 250 + this.turbo.potencia
    }
    info(){ 
        // Aqui esta o conceito de polimorfismo
        if(this.tipoInfo==1){
            super.info()
        }else{
            console.log(`Nome: ${this.nome}`)
            console.log(`Velociade: ${this.vel}`)
            console.log(`Turbo: ${this.turbo.potencia}`)
            console.log(`VelMax: ${this.velMax}`)
            console.log("----------------------")
        }
    }
}

const c1 = new carro(2, 2)
const c2 = new carro(2, 0)
const c3 = new carroEspecial(4)


c1.info()
c2.info()
c3.info()
