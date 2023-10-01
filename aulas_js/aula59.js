const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")
const del = document.querySelector("#del")

let pessoas = []


class pessoa{
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade  
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
    info(){
        let traco = "-------------------------------------------------"
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nFim!`)
    }
}

const addPessoa = ()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}</br>--------------------`
        res.appendChild(div)
    })
}

del.addEventListener("click", ()=>{
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
    console.log(pessoas)
    addPessoa()
})

