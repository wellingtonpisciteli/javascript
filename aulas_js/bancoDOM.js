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
const nomeUser=document.getElementById("nomeUser")
const telefone=document.getElementById("telefone")
const criar=document.getElementById("criar")
const carregando=document.getElementById("carregando")
const mensagem=document.getElementById("mensagem")
const dentroBanco=document.getElementById("dentroBanco")
const cartao=document.getElementById("cartao")



btnAbrir.addEventListener("click", ()=>{
    telaDireita.style.display="none"
    cadastrar.style.display="flex"
    telaBtnCriar.style.display="none"
    telaImagem.style.display="flex"
    
    proximo.addEventListener("click",()=>{
        if(nome.value=="" || telefone.value==""){
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

    criar.addEventListener("click", ()=>{
        cadastrar02.style.display="none"
        carregando.style.display="flex"
        mensagem.style.display="flex"
        console.log(nome.value)
        setTimeout(function(){
            mensagem.style.display="none"
            carregando.style.display="none"
            dentroBanco.style.display="flex"

            let header=document.createElement("h1")
            header.textContent="Bem vindo "+nomeUser.value
            header.classList.add("headerDinamic")
            dentroBanco.appendChild(header)

            let saldoVisor=document.createElement("div")
            saldoVisor.classList.add("saldoDinamic")
            saldoVisor.textContent="R$ "+1567+",00"
            cartao.appendChild(saldoVisor)

            let nomeVisor=document.createElement("div")
            nomeVisor.classList.add("nomeVisor")
            nomeVisor.textContent=nome.value
            cartao.appendChild(nomeVisor)
        },3000)
     
    } )

    imgVolta.addEventListener("click", ()=>{
        telaBtnCriar.style.display="flex"
        telaImagem.style.display="none"
        cadastrar.style.display="none"
        telaDireita.style.display="flex"
        cadastrar02.style.display="none"
    })
})



