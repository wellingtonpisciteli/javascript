const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React" ]
cursos.map((el, i) =>{
    console.log("Curso: " + el + " - Posição do curso: " + i)
})

let el = document.getElementsByTagName("div")
el = [...el]
console.log(el)
el.map((e, i)=>{
    e.innerHTML= "CFBcursos"
})

const ele = document.getElementsByTagName("div")
const val = Array.prototype.map.call(ele, ({innerHTML})=> innerHTML)
console.log(val)

const convertInt = (e) => parseInt(e)
let num = ["1","2","3","4","5"].map(convertInt)
console.log(num)




