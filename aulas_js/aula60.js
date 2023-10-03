const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")
const btn_del = document.querySelector("#btn_del")

let pessoas = []

function pessoa(pnome, pidade){
    this.nome = pnome,
    this.idade = pidade, 

    this.getNome = function(){
        return this.nome
    },
    this.getIdade = function(){
        return this.idade
    },
    this.setNome = function(nome){
        this.nome = nome
    },
    this.setIdade = function(idade){
        this.idade = idade
    }
}

const addPessoa = ()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_del.addEventListener("click", ()=>{
    res.innerHTML = ""
})

btn_add.addEventListener("click", (evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
    if(btn_del){
        pessoas.pop()
    }
    console.log(p)
})