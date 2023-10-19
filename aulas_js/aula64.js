const f_tipoMilitar = document.querySelector("#F_tipoMilitar")
const f_tipoNormal = document.querySelector("#F_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

const removerCarro = (quem)=>{
    a_carros = a_carros.filter((el)=>{
        return el.nome != quem
    })
}


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
        const btn = document.createElement("button")
        btn.addEventListener("click",(evt)=>{
            const selecionadoRemover = evt.target.parentNode.dataset.nome
            removerCarro(selecionadoRemover)
            GerenciarExibicoesCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome: ${c.nome}<br/>portas: ${c.portas}<br/>
        blindagem: ${c.blindagem}<br/>Munição: ${c.municao}`
        btn.innerHTML = "Remover"
        carros.appendChild(div)
        div.appendChild(btn)
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

const c2 = new militar("Lutador", 6, 100, 50)