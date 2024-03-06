import { Banco } from "./banco.js";

const btnAbrir=document.getElementById("btnAbrir")
const telaDireita=document.getElementById("telaDireita")
const cadastrar=document.getElementById("cadastrar")


btnAbrir.addEventListener("click", ()=>{
    telaDireita.style.display="none"
    cadastrar.style.display="flex"

})