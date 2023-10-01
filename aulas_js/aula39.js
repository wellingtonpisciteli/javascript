const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const btn_c1 = document.querySelector("#c1_2")

console.log(btn_c1.parentElement.parentElement.children[4])

console.log(caixa1.hasChildNodes() /*true ou false se o elemento ter/não filho*/)
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "Possui filhos": "Não possui filhos")
// utilizando o operador ternario