const olhos=[...document.getElementsByClassName("olho")]
const olho_fechado=document.getElementById("olho_fechado")
const olho_e=document.getElementById("olho_e")
const olho_d=document.getElementById("olho_d")
const btn_abrir=document.getElementById("btn_abrir")

let abrir_fechar=false
let pos_x=0 // posição x do olho
let pos_y=0 // posição y do olho

btn_abrir.addEventListener("click", function(){
  if(abrir_fechar==false){ // se o olho estiver fechado
    abrir_fechar=true
    console.log("abriu")
    olho_fechado.style.display="none" // esconde o olho fechado
    olho_e.style.display="block" // mostra o olho esquerdo
    olho_d.style.display="block" // mostra o olho direito
    btn_abrir.innerHTML="Fechar"
  }else{ // se o olho estiver aberto
    abrir_fechar=false
    console.log("fechou")
    olho_fechado.style.display="block" // mostra o olho fechado
    olho_e.style.display="none" // esconde o olho esquerdo
    olho_d.style.display="none" // esconde o olho direito
    btn_abrir.innerHTML="Abrir"
  }
})

window.addEventListener("mousemove", function(evt){ // captura a posição do mouse
  pos_x=evt.clientX //posição x do mouse
  pos_y=evt.clientY //posição y do mouse

  const rotacao=Math.atan2(pos_y, pos_x)*180/Math.PI // calcula a rotação do olho
  
  olhos.map((o)=>{ // percorre o array de olhos
    o.style.transform="rotate("+rotacao+"deg)" // aplica a rotação ao olho
  })
})