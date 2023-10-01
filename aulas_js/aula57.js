const caixa = document.querySelector("#caixa")

class pessoa{
    constructor(pnome, psobrenome, pidade){
        this.nome = pnome
        this.sobrenome = psobrenome
        this.idade = pidade
    }
}

let p1 = new pessoa("Well", "Borges", 25 )



caixa.innerHTML = (`${p1.nome} </br> ${p1.sobrenome} </br> ${p1.idade}`)