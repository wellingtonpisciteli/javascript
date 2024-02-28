import { contato } from "./contatos.js" 

const lista_contatos=document.getElementById("lista_contatos")
const btn_gravar=document.getElementById("btn_gravar")
const destino_apagar=document.getElementById("destino_apagar")
const nome=document.getElementById("f_nome")
const tel=document.getElementById("f_telefone")
const email=document.getElementById("f_email")


btn_gravar.addEventListener("click", (evt)=>{
    if(nome.value==""){
        alert("Preencha os campos a seguir")
    }else if(tel.value==""){
        alert("Preencha os campos a seguir")
    }
    else if(email.value==""){
        alert("Preencha os campos a seguir")
    }else{
        const conts={
            nome:document.getElementById("f_nome").value,
            telefone:document.getElementById("f_telefone").value,
            email:document.getElementById("f_email").value
        }
        contato.add_contato(conts, lista_contatos, destino_apagar)
    }
    nome.value=""
    tel.value=""
    email.value=""
})