const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "PHP", "PYTHON", "C++", "LARAVEL", "DJANGO"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAddNovoCursoAntes = document.getElementById("btnAddNovoCursoAntes")
const btnAddNovoCursoDepois = document.getElementById("btnAddNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")


let indice = 0

const tirarSelecao = ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" +indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const cursoSelecionado = ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    try{
        alert("Curso Selecionado: " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    try{
        cursoSelecionado().remove()
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
    
})

btnAddNovoCursoAntes.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
            // aqui é adicionado o novo curso antes do curso selecionado
        }else{
            alert("Digite um curso!")
        }
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})

btnAddNovoCursoDepois.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling) 
            // aqui é adicionado o novo curso após o curso selecionado
        }else{
        alert("Digite um curso!")
        }
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})