const p_array = document.getElementById("array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.getElementById("resultado")

const elementos_Array = [18, 48, 55, 78, 88, 3, 22]
p_array.innerHTML = "[" + elementos_Array + "]"

btnVerificar.addEventListener("click", (evt)=>{
    const ret = elementos_Array.every((el, i , ar)=>{
        if(el <= 18){
            resultado.innerHTML = "Array não conforme na posição " + i 
        }
        return el >= 18
    }) 
    if(ret == true){
        resultado.innerHTML = "OK!"
    }
})