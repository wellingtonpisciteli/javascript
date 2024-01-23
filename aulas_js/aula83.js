const container=document.getElementById("container")
const num_objetos=document.getElementById("num_objetos")
const quantidade=document.getElementById("quantidade")
const btn_add=document.getElementById("btn_add")
const btn_remover=document.getElementById("btn_remover")

let largura_container=container.offsetWidth  
let altura_container=container.offsetHeight
let bolas=[] 
let num_bolas=0 

class Bola{
  constructor(arraysBolas,container){
    this.tam=Math.floor(Math.random()*15)+10
    this.r=Math.floor(Math.random()*255)
    this.g=Math.floor(Math.random()*255)
    this.b=Math.floor(Math.random()*255)
    this.px=Math.floor(Math.random()*(largura_container-this.tam)) 
    this.py=Math.floor(Math.random()*(altura_container-this.tam)) 
    this.velx=Math.floor(Math.random()*2)+0.5
    this.vely=Math.floor(Math.random()*2)+0.5
    this.dx=(Math.random()*10)>5?1:-1
    this.dy=(Math.random()*10)>5?1:-1 
    this.container=container
    this.arraysBolas=arraysBolas
    this.id=Date.now()+"_"+Math.floor(Math.random()*10000000000000)
    this.desenhar()
    this.controle=setInterval(this.controlar,10)
    this.eu=document.getElementById(this.id)
    num_bolas++
    num_objetos.innerHTML=num_bolas
  }
  
  minhaPos=()=>{
    return this.arraysBolas.indexOf(this)
  }
  
  remover=()=>{
    clearInterval(this.controle)
    bolas=bolas.filter((b)=>{
      if(b.id!=this.id){
        return b 
      }
    })
    this.eu.remove()
    num_bolas--
    num_objetos.innerHTML=num_bolas
  }
  
  desenhar=()=>{
    const div=document.createElement("div")
    div.setAttribute("id",this.id)
    div.setAttribute("class","bola")
    div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`) 
    this.container.appendChild(div)
  }
  
  controle_bordas=()=>{
    if(this.px+this.tam>=largura_container){ 
      this.dx=-1
    }else if(this.px<=0){
      this.dx=1
    }
    if(this.py+this.tam>=altura_container){
      this.dy=-1
    }else if(this.py<=0){
      this.dy=1
    }
  }

  controlar=()=>{
    this.controle_bordas()
    this.px+=this.velx*this.dx
    this.py+=this.vely*this.dy
    this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
    if((this.px>largura_container) || (this.py>altura_container)){ 
      this.remover()
    }
  }
}
  
window.addEventListener("resize",(evt)=>{
  largura_container=container.offsetWidth
  altura_container=container.offsetHeight
})

btn_add.addEventListener("click",(evt)=>{
  const qtde=quantidade.value
  for(let i=0;i<qtde;i++){
    bolas.push(new Bola(bolas,container))
  }
}) 

btn_remover.addEventListener("click",(evt)=>{
  bolas.map((b)=>{
    b.remover()
  })
})