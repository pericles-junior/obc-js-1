const palavra = prompt("Bem-vindo ao Procurando Palíndromos\n\nDigite uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!\n" +
    palavra + " é igual a " + palavraInvertida)
} else {
    alert(palavra + " não é um palíndromo!\n" +
    palavra + " é diferente de " + palavraInvertida)
}