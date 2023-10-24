const pessoa = {
    nome : "Well",
    canal : "CFB",
    curso: "JavaScript",
    aulas : {
        aula01 : "introdução",
        aula02 : "Variaveis",
        aula03 : "Condicional"
    }
}

const string_json = '{"nome":"Well","canal":"CFB","curso":"JavaScript","aulas":{"aula01":"introdução","aula02":"Variaveis","aula03":"Condicional"}}'

const s_json = JSON.stringify(pessoa) 
// para converter um object em um string json
const s_json2 = JSON.parse(string_json) 
// para converter uma string json em object

console.log(pessoa)
console.log(s_json)
console.log(s_json2)