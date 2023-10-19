const f_tipoMilitar = document.querySelector("#F_tipoMilitar")
const f_tipoNormal = document.querySelector("#F_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

f_tipoMilitar.addEventListener("click", (evt)=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", (evt)=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const GerenciarExibicoesCarros = ()=>{
    carros.innerHTML = ""
    a_carros.map((c)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${c.nome}<br/>portas: ${c.portas}<br/>
        blindagem: ${c.blindagem}<br/>Munição: ${c.municao}`
        carros.appendChild(div)
    })
    
}

btn_addCarro.addEventListener("click", (evt)=>{
    if(f_tipoNormal.checked){
        const c = new carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else{
        const c = new militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)  
    }
    GerenciarExibicoesCarros()
})

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