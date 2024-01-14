const data_tela=document.getElementById("data")
const relogio_tela=document.getElementById("relogio")

const data=new Date()

let dia_m=data.getDate()
if(dia_m<10){
    dia_m="0"+dia_m
}
const data_s=dia_m+"/"+data.getMonth()+1+"/"+data.getFullYear()
let horas=data.getHours()
let minutos=data.getMinutes()
let segundoos=data.getSeconds()
data_tela.innerHTML=data_s
relogio_tela.innerHTML=data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()

const atualiza_relogio=()=>{
    if(horas<10){
        horas="0"+horas
    }
    if(minutos<10){
        minutos="0"+minutos
    }
    if(segundos<10){
        segundos="0"+segundos
    }
    console.log(horas)
    console.log(minutos)
    console.log(segundos)
}

atualiza_relogio()

// .getDate() = Retorna dia do mês
// .getDay() = dia da semana (numero)
// .getFullYear() = ano com 4 digitos
// .getHours() = horas
// .getMilliseconds() = milisegundos
// .getMinutes() = minutos
// .getMonth() = mês
// .getSeconds() = segundos
// .getTime() = Timestamp (milisegundos desde 01/01/1970, 00:00:00 UTC)
// .getTimezoneOffset() = Timezone da localidade
// Date.now() = Timestamp (milisegundos desde 01/01/1970, 00:00:00 UTC)
// .setDate() = define um dia do mês para data
// .setMonth() = define um mes para data
// .setFullYear() = define um ano para data
// .setHours() = define horas
// .setMinutes() = define minutos
// .setSeconds() = define segundos
// .setMilliseconds() = define milisegundos
// .toDateString() = retorna somente a data
