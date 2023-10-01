const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set(10, "oi")
mapa.set("ola", 33)
mapa.set(29, "atoa")
mapa.set("testando", "vou conseguir")
mapa.set("idade", 1)
mapa.set("idad", 3)

mapa.delete("idad")
// para deleter uma chave, valor

console.log(mapa)

caixa.innerHTML = mapa.get("testando")
// get para obter uma chave da coleção

let pes = "testano"
let res = ""
if(mapa.has(pes)){
    res = "A chave está na coleção com o valor: " + mapa.get(pes) 
}else{
    res = "A chave não está na coleção!"
}
// has verifica se à uma chave na coleção ou não

res += "<br/>" + "O tamanho da coleção é: " + mapa.size
// para obter o tamanho da coleção
caixa.innerHTML = res

mapa.forEach(element => {
    console.log(element)
});
// para percorrer a coleção