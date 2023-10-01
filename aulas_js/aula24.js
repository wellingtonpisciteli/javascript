const f = function soma(...valores){
    let total = 0
    for(let i of valores){
        total += i
    }
    return total
}

console.log(f(10,5))

const c = new Function("v1,v2,v3", "return v1+v2+v3")

console.log(c(1,2,3))
