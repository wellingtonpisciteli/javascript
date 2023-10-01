const soma = (...valores) => {
    const somar = (val) => {
        let res = 0
        for(v of val)
            res += v
        return res
    }
    return somar(valores)
}

console.log(soma(1,2,3,4,5))


const par_ou_impar = (...valor) => {
    for(v of valor)
        if(v%2==0){
            console.log(v + " é par")
        }else{
            console.log(v + " é ímpar")
        }
}

par_ou_impar(10, 6, 5, 4, 3)

