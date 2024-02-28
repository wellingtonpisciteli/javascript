import { contatos } from "./agenda_bancoContatos.js";

let contato={
  todos_contatos:function(){
    return contatos
  },
  
  i_contato:function(i){
    return contatos[i]
  },

  add_contato:function(novo_contato,destino_dom,destino_apagar){
    const cont={
        nome:novo_contato.nome,
        telefone:novo_contato.telefone,
        email:novo_contato.email
    }

    contatos.push(cont)

    destino_dom.innerHTML=""
    destino_apagar.innerHTML = ""

    contatos.map((c, indice)=>{
      console.log(indice)
      
      if(c.nome!=undefined){
        let div=document.createElement("div")
        div.setAttribute("class", "contato")
        const p_nome=document.createElement("p")
        p_nome.innerHTML=c.nome
        const p_telefone=document.createElement("p")
        p_telefone.innerHTML=c.telefone
        const p_email=document.createElement("p")
        p_email.innerHTML=c.email 
        div.appendChild(p_nome)   
        div.appendChild(p_telefone)   
        div.appendChild(p_email)
        destino_dom.appendChild(div) 

        let btn_apag=document.createElement("button")
        btn_apag.setAttribute("id","btn_apaga")
        btn_apag.setAttribute("class","btn_apaga")
        btn_apag.innerHTML="Apagar"
        destino_apagar.appendChild(btn_apag) 

        let percorre_contato=document.querySelectorAll(".contato")

        percorre_contato.forEach((s)=>{
          s.addEventListener("click",(evt, p)=>{
            s.classList.add("selecionada")
            btn_apag.addEventListener("click",()=>{
              s.remove()
              contatos.splice(p, 1)
            })
          })
        })
      }
    })
  }
}

export{contato}
