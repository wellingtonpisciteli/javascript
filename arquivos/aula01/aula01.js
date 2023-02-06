"use strict"

const objs = document.getElementsByTagName("div")
const objs1 = [...document.getElementsByTagName("div")]

objs1.forEach(element => {
    console.log(element)
    element.style.fontSize="40px"
})

console.log(objs)
console.log(objs1)