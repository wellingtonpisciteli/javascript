const caixa = document.querySelector("#caixa")

const carros = ["polo", "golf", "HRV", "Gol"]

let ul = `<ul>`
let li = `<li>`
carros.map((el)=>{
    ul += `${li}${el}</li>`
})

caixa.innerHTML = ul