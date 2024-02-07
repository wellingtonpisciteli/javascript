const objetos=document.getElementById("objetos")

const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },
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

objetos.innerHTML=JSON.stringify(computadores)