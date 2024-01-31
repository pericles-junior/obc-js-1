let veiculo1 = prompt("Qual o nome do veículo 1?")
let veiculo2 = prompt("Qual o nome do veículo 2?")
let velocidade1 = parseFloat(prompt("Qual a velocidade do veículo 1?"))
let velocidade2 = parseFloat(prompt("Qual a velocidade do veículo 2?"))

if (velocidade1 > velocidade2) {
    alert("Resultado:\n\n" +
    "Velocidade de " + veiculo1 + ": " + velocidade1 + "km/h" +
    "\nVelocidade de " + veiculo2 + ": " + velocidade2 + "km/h" +
    "\n\nO " + veiculo1 + " é mais rápido!")
} else if (velocidade1 < velocidade2) {
    alert("Resultado:\n\n" +
    "Velocidade de " + veiculo1 + ": " + velocidade1 + "km/h" +
    "\nVelocidade de " + veiculo2 + ": " + velocidade2 + "km/h" +
    "\n\nO " + veiculo2 + " é mais rápido!")
} else {
    alert("Resultado:\n\n" +
    "Velocidade de " + veiculo1 + ": " + velocidade1 + "km/h" +
    "\nVelocidade de " + veiculo2 + ": " + velocidade2 + "km/h" +
    "\n\nO " + veiculo1 + " e " + veiculo2 + " tem a mesma velocidade!")
}