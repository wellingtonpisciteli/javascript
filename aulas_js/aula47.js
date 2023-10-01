const p_array = document.getElementById("array")
const txt_pesquisar = document.getElementById("txt_pesquisar")
const btnPesquisar = document.getElementById("btnPesquisar")
const resultado = document.getElementById("resultado")
const btn_limpar = document.getElementById("btn_limpar")

const elementos_Array = [10, 4, 55, 7, 8, 3, 22]
p_array.innerHTML = elementos_Array

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = "Valor não encontrado!"
    elementos_Array.find((e, i)=>{
        if(e == txt_pesquisar.value){
            resultado.innerHTML = "Valor encontrado: " + e + " | Na posição: " + i
        }
    })        
})




