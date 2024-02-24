import { contatos } from "./banco_contatos.js";

let contato={
  todos_contatos:function(){
    return contatos
  },
  i_contato:function(i){
    return contatos[i]
  },
  add_contato:function(novo_contato,destino_dom){
    const cont={
        nome:novo_contato.nome,
        telefone:novo_contato.telefone,
        email:novo_contato.email
    }
    contatos.push(cont)

    const div=document.createElement("div")
    div.setAttribute("class", "contato")
    const p_nome=document.createElement("p")
    p_nome.innerHTML=novo_contato.nome
    const p_telefone=document.createElement("p")
    p_telefone.innerHTML=novo_contato.telefone
    const p_email=document.createElement("p")
    p_email.innerHTML=novo_contato.email 
    div.appendChild(p_nome)   
    div.appendChild(p_telefone)   
    div.appendChild(p_email)   
    destino_dom.appendChild(div)
  }
}

export{contato}
