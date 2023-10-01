const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const stopCursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt)=>{
    console.log("clicou")
    console.log(evt)
})

stopCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})
