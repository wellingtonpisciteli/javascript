const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnCopiar = document.querySelector("#botaoCopiar")
const btnVoltar = document.querySelector("#botaoVoltar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btnCopiar.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

btnVoltar.addEventListener("click", ()=>{
    const cursosVoltar = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosVoltar.map((ele)=>{
        caixa1.append(ele)
    })
})