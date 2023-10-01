function soma(...valores){
    let total = 0
    for(let i of valores){
        total += i
    }
    return total
}

console.log(soma(10, 10, 30, 5, 5, 40))