let num = 0
let n = 0
let pares = 0

while(num < 10){
    num += 1
    console.log(num)
    if(num == 5){
        break
    }
}

while(n<100){
    n += 1
    if(n%2!=0){
        continue
    }
    pares += 1
}

console.log("Quantidade de numeros pares: " + pares)

