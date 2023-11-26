const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tclear = document.getElementById("tclear")


teclasNum.map((el)=>{
    el.addEventListener("click", (evt)=>{
        while(display.textContent == 0){
            display.firstChild.remove() 
            break   
        }
        display.innerHTML += evt.target.innerHTML
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

tclear.addEventListener("click", (evt)=>{
    display.innerHTML = "0"
})

ton.addEventListener("click", (evt)=>{
    display.innerHTML = `${"<br/>"}`
})