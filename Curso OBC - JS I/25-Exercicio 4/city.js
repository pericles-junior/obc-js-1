const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contador = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
        let cidade = prompt("Qual o nome da cidade visitada?")
        cidades += " - " + cidade + "\n"
        contador ++
        continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidadades visitadas: " + contador + 
    "\nCidades visitadas:\n" + cidades
)