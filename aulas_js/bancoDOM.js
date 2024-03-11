import { Banco } from "./banco.js";

const btnAbrir=document.getElementById("btnAbrir")
const telaDireita=document.getElementById("telaDireita")
const cadastrar=document.getElementById("cadastrar")
const telaBtnCriar=document.getElementById("telaBtnCriar")
const telaImagem=document.getElementById("telaImagem")
const imgVolta=document.getElementById("imgVolta")


btnAbrir.addEventListener("click", ()=>{
    telaDireita.style.display="none"
    cadastrar.style.display="flex"
    telaBtnCriar.style.display="none"
    telaImagem.style.display="flex"
})

imgVolta.addEventListener("click", ()=>{
    telaBtnCriar.style.display="flex"
    telaImagem.style.display="none"
    cadastrar.style.display="none"
    telaDireita.style.display="flex"
})