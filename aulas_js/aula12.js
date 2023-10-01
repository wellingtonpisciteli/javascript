/* operador spread (espalhar) */

const jog1= {nome:"Well", energia: 100, vidas:3, magia:80}
const jog2= {nome:"Igor", energia: 90, vidas:2, velocidade:100}
const jog3= {...jog1,...jog2}

console.log(jog3)



