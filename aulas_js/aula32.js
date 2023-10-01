const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("curso c1")]
const cursosC2 = [...document.getElementsByClassName("curso c2")]
const cursosEspecial = document.getElementsByClassName("curso")[6]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)

cursosC2.map((el)=>{
    el.classList.add("destaque")
})