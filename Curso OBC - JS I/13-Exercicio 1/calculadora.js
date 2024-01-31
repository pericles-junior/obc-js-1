alert("Bem-vindo(a) a calculadora de 4 operações :D")

let numero1 = parseFloat(prompt("Insira o primeiro número:"))
let numero2 = parseFloat(prompt("Insira o segundo número:"))

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )