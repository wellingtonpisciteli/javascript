import { contato } from "./contatos.js" 
const lista_contatos=document.getElementById("lista_contatos")
const btn_gravar=document.getElementById("btn_gravar")

btn_gravar.addEventListener("click", (evt)=>{
    const conts={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    contato.add_contato(conts, lista_contatos)
    console.log(contato.todos_contatos())
})