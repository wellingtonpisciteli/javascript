let cores = ["Azul", "preto", "vermelho"]
let cursos = ["HTML", "CSS", "JavaScript", cores]
const caixa = document.querySelector("#caixa")

cursos.push("Python")
// para adicionar um novo elemento ao fim do array
cursos.pop()
// para retirar o ultimo elemento
cursos.unshift("Python")
// para adicionar no primeiro lugar
cursos.shift()
// para retirar o primeiro elemento



cursos.map((el)=>{
    const p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

