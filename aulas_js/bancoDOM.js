const btnAbrir=document.getElementById("btnAbrir")
const telaDireita=document.getElementById("telaDireita")
const cadastrar=document.getElementById("cadastrar")
const telaBtnCriar=document.getElementById("telaBtnCriar")
const telaImagem=document.getElementById("telaImagem")
const imgVolta=document.getElementById("imgVolta")
const cadastrar02=document.getElementById("cadastrar02")
const proximo=document.getElementById("proximo")
const anterior=document.getElementById("anterior")
const nome=document.getElementById("nome")


btnAbrir.addEventListener("click", ()=>{
    telaDireita.style.display="none"
    cadastrar.style.display="flex"
    telaBtnCriar.style.display="none"
    telaImagem.style.display="flex"
    
    proximo.addEventListener("click",()=>{
        if(nome.value==""){
            alert("PREENCHA OS CAMPOS!")
        }else{
            cadastrar.style.display="none"
            cadastrar02.style.display="flex"
        }
        
        anterior.addEventListener("click",()=>{
            cadastrar02.style.display="none"
            cadastrar.style.display="flex"
        })
    })
    imgVolta.addEventListener("click", ()=>{
        telaBtnCriar.style.display="flex"
        telaImagem.style.display="none"
        cadastrar.style.display="none"
        telaDireita.style.display="flex"
        cadastrar02.style.display="none"
    })
})



