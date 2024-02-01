const numero = parseFloat(prompt("Bem-vindo ao Robô da Tabuada!\n\nDigite o número que você deseja calcular:"))
let listaNumeros = ""

for (indice = 1; indice <= 20; indice++) {
    listaNumeros += numero + " x " + indice + " = " + (numero * indice) +"\n"
}

alert("Resultado:\n\n" + listaNumeros)