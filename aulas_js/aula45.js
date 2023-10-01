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

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" +indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++

})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
        // (retorna o elemento marcado)
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        // aqui foi pego o texto do rádio selecionado
        alert("Curso Selecionado: " + cursoSelecionado)
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
    
})

btnAddNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
            // aqui é adicionado o novo curso antes do curso selecionado
        }else{
            alert("Digite um curso!")
        }
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})

btnAddNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling) 
            // aqui é adicionado o novo curso após o curso selecionado
        }else{
        alert("Digite um curso!")
        }
    }catch(ex){
        alert("Por favor, selecione uma opção.")
    }
})