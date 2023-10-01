const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica1", "musica boa", "musica10"])

musicas.add("Musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")
// adicionando novos elementos para mostrar que não duplica

console.log(musicas)