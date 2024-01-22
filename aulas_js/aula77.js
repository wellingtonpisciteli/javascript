const data_tela=document.getElementById("data")
const relogio_tela=document.getElementById("relogio")
const btn_ativar=document.getElementById("btn_ativar")
const btn_parar=document.getElementById("btn_parar")
const Def_alarme=document.getElementById("Def_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const temp_alarme=document.getElementById("temp_alarme")
const comandos=document.getElementById("comandos")
const timer=document.getElementById("timer")


const som_alarme=new Audio("alarme.mp3")
som_alarme.loop=-1 //Quantidade de vezes que o som vai tocar -1 para ser infinito

let ts_atual=null //Variável que vai armazenar o timestamp atual
let ts_alarme=null //Variável que vai armazenar o timestamp do alarme
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click",()=>{
  ts_atual=Date.now() //tempo atual
  ts_alarme=ts_atual+(temp_alarme.value*1000) //tempo atual + tempo definido
  alarme_ativado=true //Ativar o alarme
  const dt_alarme=new Date(ts_alarme) //nova data com o valor do alarme + tempo definido
  hora_alarme.innerHTML="Hora do alarme: "+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click",()=>{
  alarme_ativado=false //Desativar o alarme
  alarme_tocando=false //Parar o som
  hora_alarme.innerHTML="Hora do alarme: " //Limpar o texto da hora do alarme
  temp_alarme.value=0 //Limpar o campo de tempo do alarme
  timer.classList.remove("alarme") //Remover a classe alarme do timer
  som_alarme.pause() //Pausar o som
  som_alarme.currentTime=0 //Reiniciar o som
})

const data=new Date()

let dia_m=data.getDate()
if(dia_m<10){
    dia_m="0"+dia_m
}
const data_s=dia_m+"/"+data.getMonth()+1+"/"+data.getFullYear()

const atualiza_relogio=()=>{
    const relogio=new Date() //Data atual
    let horas=relogio.getHours() //Horas
    let minutos=relogio.getMinutes() //Minutos
    let segundos=relogio.getSeconds() //Segundos
    if(horas<10){ //Se horas for menor que 10, adicionar 0 à esquerda
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
    if(alarme_ativado && !alarme_tocando){ //se alarme estiver ativado e não estiver tocando
      if(relogio.getTime()>=ts_alarme){ //se o tempo atual for maior ou igual ao tempo do alarme
        alarme_tocando=true //alarme tocando
        som_alarme.play() //toca o som
        timer.classList.add("alarme") //adiciona a classe alarme no timer
      }
    }
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