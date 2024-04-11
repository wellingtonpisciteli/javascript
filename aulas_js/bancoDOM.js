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
const telefone=document.getElementById("telefone")
const criar=document.getElementById("criar")
const carregando=document.getElementById("carregando")
const mensagem=document.getElementById("mensagem")
const dentroBanco=document.getElementById("dentroBanco")



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
            header.textContent="Bem vindo "+nome.value
            header.classList.add("headerDinamic")
            dentroBanco.appendChild(header)

            let saldo=document.createElement("div")
            let saldoValor=0
            saldo.textContent="Saldo: "+saldoValor+ ",00"
            saldo.classList.add("saldo")
            dentroBanco.appendChild(saldo)

            let depositar=document.createElement("button")
            depositar.textContent="Depositar"
            depositar.classList.add("depositar")
            dentroBanco.appendChild(depositar)

            let sacar=document.createElement("button")
            sacar.textContent="Sacar"
            sacar.classList.add("sacar")
            dentroBanco.appendChild(sacar)
            
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



