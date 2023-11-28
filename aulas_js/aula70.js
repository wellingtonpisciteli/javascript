const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tclear = document.getElementById("tclear")

let decimal = false
let sinal = false

teclasNum.map((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        // 4° quando clicar em um num o sinal retornará a falso, podendo ativar os operadores novamente.
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click", (evt)=>{
        decimal = false
        if(!sinal){
            // 1° quando o sinal esta falso ele realiza esses comandos
            sinal = true
            // 2° sinal ficou verdadeiro
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
        // 3° aqui no final o sinal estará verdadeiro, o que impede de realizar os comandos acima caso clique num op novamente.
    })
})

tclear.addEventListener("click", (evt)=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

ton.addEventListener("click", (evt)=>{
   
})
