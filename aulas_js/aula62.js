class carro{ // classe pai
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class militar extends carro{ // extends faz com que esta classe herda a classe carro
    constructor(nome, portas, blindagem, municao){
        super(nome, portas) // serve para invocar algo da classe pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

const c1 = new carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2 = new militar("Lutador", 6, 100, 50)
c2.setCor("verde")
c2.atirar()
c2.atirar()
c2.atirar()



console.log(`nome: ${c1.nome}\nportas: ${c1.portas}\nligado: ${(c1.ligado)?"Sim":"Não"}\nvelocidade: ${c1.vel}\ncor: ${c1.cor}`)

console.log(`nome: ${c2.nome}\nportas: ${c2.portas}\nligado: ${(c2.ligado)?"Sim":"Não"}\nvelocidade: ${c2.vel}\ncor: ${c2.cor}\nmunição: ${c2.municao}
blindagem: ${c2.blindagem}`)