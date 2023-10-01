function* perguntas(){
    const nome = yield "Qual seu nome?"
    const esporte = yield "Qual seu esporte favorito?"
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Well").value)
console.log(itp.next("Futebol").value)

function* contador(){
    let i = 0
    while(true){
        yield i += 1
    }
}

const itc = contador()
console.log(itc.next().value)