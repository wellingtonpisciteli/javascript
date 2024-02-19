const objetos=document.getElementById("objetos")

const computador={
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador.Monitor="32pol" //uma forma de adicionar uma propriedade
delete(computador.hd) //para deletar um atributo
//console.log(computador.cpu) //para chamar apenas uma propriedade

const c1=Object.assign(computador) //serve para copiar os dados de outro elemento
c1.info()
const c2=Object.create(computador) // aqui criamos um novo objeto
c2.info()

const o1={obj1:"1"}
const o2={obj2:"2"}
const o3={obj3:"3"}
const o4=Object.assign(o1, o2, o3)
console.log(o4) //assign tbm serve para mesclar objetos

const computadores=[
{
    cpu:"i8",
    ram:"60gb",
    hd:"1tb"
},
{
    cpu:"i7",
    ram:"32gb",
    hd:"500mb"
}
]

computadores.map((c)=>{
    console.log(c)
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})

// computador.info()
// objetos.innerHTML=JSON.stringify(computadores)