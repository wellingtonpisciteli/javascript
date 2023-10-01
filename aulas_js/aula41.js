const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "C++", "PYTHON", "PHP", "LARAVEL", "REACT"]

cursos.map((el, chave)=>{
    const criarNovo = document.createElement("div")
    criarNovo.setAttribute("id", "c" + (chave + 1))
    criarNovo.setAttribute("class", "curso c1")
    criarNovo.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/126/126468.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    
    criarNovo.appendChild(btn_lixeira)
    caixa1.appendChild(criarNovo)
})