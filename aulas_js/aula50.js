const p_array = document.getElementById("array")
const btnReduzir = document.getElementById("btnReduzir")
const resultado = document.getElementById("resultado")

const elementos_Array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + elementos_Array + "]"

btnReduzir.addEventListener("click", (evt)=>{
    dobro.push(elementos_Array[0] * 2)
    resultado.innerHTML = elementos_Array.reduce((anterior, atual, posi)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)
        // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

        return anterior + atual
    })
    resultado.innerHTML += "<br/>Anterior: " + ant + "<br/>Atual: " + atu + "<br/>Dobro: " + dobro
})