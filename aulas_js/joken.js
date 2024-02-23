const play1=document.getElementById("play1")
const play2=document.getElementById("play2")
const pedra=document.getElementById("pedra")
const papel=document.getElementById("papel")
const tesoura=document.getElementById("tezoura")
const res_vence=document.getElementById("res_vence")
const btn_jogar=document.getElementById("btn_jogar")

let sinal=0
let sinal_maquina=0

pedra.addEventListener("click", ()=>{
    sinal=1
    play1.innerHTML="PEDRA"
})
papel.addEventListener("click",()=>{
    sinal=2
    play1.innerHTML="PAPEL"
})
tesoura.addEventListener("click",()=>{
    sinal=3
    play1.innerHTML="TESOURA"
})

function maquina(){
    let maquina=Math.floor(Math.random()*3)+1;
    if(maquina==1){
        sinal_maquina=1
        play2.innerHTML="PEDRA!"  
    }else if(maquina==2){
        sinal_maquina=2
        play2.innerHTML="PAPEL!"
    }else if(maquina==3){
        sinal_maquina=3
        play2.innerHTML="TESOURA!"
    }
}

function resultado(){
    if(sinal==sinal_maquina){
        res_vence.innerHTML="EMPATE!"
    }else if(sinal==1 && sinal_maquina==2 || sinal==2 && sinal_maquina==3 || sinal==3 && sinal_maquina==1){
        res_vence.innerHTML='MAQUINA!'
    }else{
        res_vence.innerHTML="PLAYER-01"
    }
}

btn_jogar.addEventListener("click",()=>{
    maquina()
    resultado()
})

