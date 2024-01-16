const data_tela=document.getElementById("data")
const relogio_tela=document.getElementById("relogio")
const btn_ativar=document.getElementById("btn_ativar")
const btn_parar=document.getElementById("btn_parar")
const Def_alarme=document.getElementById("Def_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const temp_alarme=document.getElementById("temp_alarme")
const comandos=document.getElementById("comandos")
const timer=document.getElementById("timer")

const som_alarme=new Audio("/aulas_js/alarme.mp3")

const data=new Date()

let dia_m=data.getDate()
if(dia_m<10){
    dia_m="0"+dia_m
}
const data_s=dia_m+"/"+data.getMonth()+1+"/"+data.getFullYear()

const atualiza_relogio=()=>{
    const relogio=new Date()
    let horas=relogio.getHours()
    let minutos=relogio.getMinutes()
    let segundos=relogio.getSeconds()
    if(horas<10){
        horas="0"+horas
    }
    if(minutos<10){
        minutos="0"+minutos
    }
    if(segundos<10){
        segundos="0"+segundos
    }
    const hora_completa=horas+":"+minutos+":"+segundos
    relogio_tela.innerHTML=hora_completa 
}

data_tela.innerHTML=data_s
const intervalo=setInterval(atualiza_relogio,1000
)


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
