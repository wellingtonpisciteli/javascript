const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando..."
    console.log(promessa())
})

const promessa = ()=>{
    let p = new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo!")
                numero.innerHTML = "Deu tudo certo!"
                numero.classList.remove("erro")
                numero.classList.add("ok")
            }else{
                reject("Deu tudo errado!")
                numero.innerHTML = "Deu tudo errado!"
                numero.classList.add("erro")
                numero.classList.remove("ok")
            }
        }, tempo)
    })
    return p 
}

numero.innerHTML = "Esperando"
