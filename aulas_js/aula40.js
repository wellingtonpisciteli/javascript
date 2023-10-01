const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "C++", "PYTHON", "PHP", "LARAVEL", "REACT"]

cursos.map((el, chave)=>{
    const criarNovo = document.createElement("div")
    criarNovo.setAttribute("id", "c" + (chave + 1))
    criarNovo.setAttribute("class", "curso c1")
    criarNovo.innerHTML = el
    caixa1.appendChild(criarNovo)
})