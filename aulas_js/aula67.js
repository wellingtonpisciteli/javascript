const nave = function(energia){
    this.energia = energia
    this.disparo = 3
}

const n1 = new nave(50)

nave.prototype.vida = 3
nave.prototype.disparar = function(){
    if(this.disparo > 0){
        this.disparo--
    }
}

n1.disparar()
n1.disparar()


console.log(nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.disparo)
console.log(n1.vida)