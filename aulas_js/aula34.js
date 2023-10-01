// const c1 = document.querySelector("#c1")

// c1.addEventListener("click", () => {
//     alert("Clicou")
// })

const cursoTodos = [...document.querySelectorAll(".curso")]

cursoTodos.map((el) =>{
    el.addEventListener("click", (evt) => {
        const ele = evt.target
        ele.classList.add("destaque")
        console.log(el.id + " foi clicado")
    })
})