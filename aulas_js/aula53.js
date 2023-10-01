
const btn_somar = document.querySelector("#btn_somar")
const btn_multi = document.querySelector("#btn_mult")
const btn_sub = document.querySelector("#btn_sub")
const btn_divi = document.querySelector("#btn_divi")
const res = document.querySelector("#res")

const op = [
    ()=>{
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) + Number(val[1])
    },
    ()=>{
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) * Number(val[1])
    },
    ()=>{
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) - Number(val[1])
    },
    ()=>{
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) / Number(val[1])
    }
]

btn_somar.addEventListener("click", op[0])
btn_multi.addEventListener("click", op[1])
btn_sub.addEventListener("click", op[2])
btn_divi.addEventListener("click", op[3])




