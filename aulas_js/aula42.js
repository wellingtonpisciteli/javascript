const idades = [10, 25, 40, 13, 55, 28]

const maior = idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})

console.log(idades)
console.log(maior)
