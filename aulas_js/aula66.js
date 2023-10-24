class npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info = function(){
        console.log(`Energia: ${this.energia}\nAlerta: ${npc.alerta?"sim":"não"}\n--------------`)
    }
    static alertar = ()=>{
        npc.alerta = true
    }
}

const npc01 = new npc(100)
const npc02 = new npc(60)
const npc03 = new npc(80)

npc.alertar()

npc01.info()
npc02.info()
npc03.info()
