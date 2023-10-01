const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_Array = [1, 4, 5, 8, 8, 3, 2, 19]
p_array.innerHTML = "[" + elementos_Array + "]"

btnVerificar.addEventListener("click", (evt)=>{
    const ret = elementos_Array.some((el, i , ar)=>{
        if(el <= 18){
            resultado.innerHTML = "Array não conforme na posição " + i 
        }
        return el >= 18
    }) 
    if(ret == true){
        resultado.innerHTML = "OK!"
    }
})