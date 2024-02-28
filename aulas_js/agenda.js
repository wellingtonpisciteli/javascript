import { contato } from "./agenda_contatos.js" 

const lista_contatos=document.getElementById("lista_contatos")
const btn_gravar=document.getElementById("btn_gravar")
const destino_apagar=document.getElementById("destino_apagar")
const nome=document.getElementById("f_nome")
const tel=document.getElementById("f_telefone")
const email=document.getElementById("f_email")
const btn_ver=document.getElementById("btn_ver")

let sinal=0

btn_gravar.addEventListener("click", (evt)=>{
    if(nome.value==""){
        alert("PREENCHA OS CAMPOS!")
    }else if(tel.value==""){
      alert("PREENCHA OS CAMPOS!")
    }else{
      alert("CONTATO SALVO!")
        const conts={
            nome:document.getElementById("f_nome").value,
            telefone:document.getElementById("f_telefone").value,
            email:document.getElementById("f_email").value
        }
        contato.add_contato(conts,lista_contatos,destino_apagar)
    }
    nome.value=""
    tel.value=""
    email.value=""
})

lista_contatos.style.display="none";

btn_ver.addEventListener("click",()=>{
    if(sinal==0){
        btn_ver.innerHTML="FECHAR"
        lista_contatos.style.display="flex"
        sinal=1
    }else{
        btn_ver.innerHTML="ABRIR"
        lista_contatos.style.display="none"
        sinal=0
    }
})


