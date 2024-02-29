import { contatos } from "./agenda_bancoContatos.js";

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

    destino_dom.innerHTML=""

    contatos.map((c, indice)=>{ 
      if(c.nome!=undefined){
        let div=document.createElement("div")
        div.setAttribute("class", "contato")
        const btn_apagar=document.createElement("button")
        btn_apagar.setAttribute("class", "apagar")
        btn_apagar.textContent="APAGAR";
        const p_nome=document.createElement("p")
        p_nome.innerHTML=c.nome
        const p_telefone=document.createElement("p")
        p_telefone.innerHTML=c.telefone
        const p_email=document.createElement("p")
        p_email.innerHTML=c.email 
        div.appendChild(p_nome)   
        div.appendChild(p_telefone)   
        div.appendChild(p_email)
        div.appendChild(btn_apagar)
        destino_dom.appendChild(div) 

        let percorre_contato=document.querySelectorAll(".contato")

        percorre_contato.forEach((s)=>{
          btn_apagar.addEventListener("click",(evt, p)=>{
            let resposta_apagar=confirm("APAGAR CONTATO")
            if(resposta_apagar==true){
              div.remove()
              contatos.splice(p, 1)
            }
          })
        })  
      }
    })
  }
}

export{contato}
