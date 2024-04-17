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
const senha=document.getElementById("senha")
const telefone=document.getElementById("telefone")
const email=document.getElementById("email")
const criar=document.getElementById("criar")
const carregando=document.getElementById("carregando")
const mensagem=document.getElementById("mensagem")
const dentroBanco=document.getElementById("dentroBanco")
const cartao=document.getElementById("cartao")
const perfil=document.getElementById("perfil")
const sair=document.getElementById("sair")

let controle=0

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
        mensagem.textContent="Carregando..."
        mensagem.style.display="flex"
        setTimeout(function(){
            mensagem.style.display="none"
            carregando.style.display="none"
            dentroBanco.style.display="flex"

            let header=document.createElement("h1")
            header.textContent="Bem vindo ao YaYaBank "
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

            let perfilDinamic=document.createElement("div")
            perfilDinamic.style.display="none"
            perfil.addEventListener("click",()=>{
                cartao.style.display="none"
                header.style.display="none"
                perfilDinamic.style.display="flex"
                perfilDinamic.classList.add("perfilDinamic")
                dentroBanco.appendChild(perfilDinamic)

                let perfilInfo=document.createElement("div")
                perfilInfo.classList.add("perfilInfo")
                perfilDinamic.appendChild(perfilInfo)
                let nomeInfo=document.createElement("input")
                let labelNome=document.createElement("label")
                labelNome.textContent="Nome"
                nomeInfo.value=nome.value
                nomeInfo.classList.add("inputInfo")
                let teleInfo=document.createElement("input")
                teleInfo.value=telefone.value
                teleInfo.classList.add("inputInfo")
                let emailInfo=document.createElement("input")
                emailInfo.value=email.value
                emailInfo.classList.add("inputInfo")
                let senhaInfo=document.createElement("input")
                senhaInfo.value="********"
                senhaInfo.classList.add("inputInfo")
                let alterarInfo=document.createElement("button")
                alterarInfo.textContent="Alterar"
                perfilInfo.appendChild(labelNome)
                perfilInfo.appendChild(nomeInfo)
                perfilInfo.appendChild(teleInfo)
                perfilInfo.appendChild(emailInfo)
                perfilInfo.appendChild(senhaInfo)
                perfilInfo.appendChild(alterarInfo)
            })
    
            sair.style.display="flex"
            sair.classList.add("sair")
        },3000)   
    } )

    imgVolta.addEventListener("click", ()=>{
        telaBtnCriar.style.display="flex"
        telaImagem.style.display="none"
        cadastrar.style.display="none"
        telaDireita.style.display="flex"
        cadastrar02.style.display="none"
    })

    sair.addEventListener("click", ()=>{
        sair.style.display="none"
        dentroBanco.style.display="none"
        telaImagem.style.display="none"
        carregando.style.display="flex"
        mensagem.textContent="Saindo..."
        mensagem.style.display="flex"
        setTimeout(function(){
            carregando.style.display="none"
            mensagem.style.display="none"
            telaBtnCriar.style.display="flex"
            telaDireita.style.display="flex"
            nome.value=""
            telefone.value=""
            email.value=""
            nomeUser.value=""
            senha.value=""
        },3000)   
})
})



