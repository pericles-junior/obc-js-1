let primeiroNome = prompt("Qual o seu primeiro nome?")
let sobrenome = prompt("Qual o seu sobrenome?")
let campoDeEstudo = prompt("Qual o seu campo de estudo?")
let anoDeNascimento = 2024 - Number(prompt("Qual o seu ano de nascimento?"))
const mostrar = document.querySelector(".mostrar")

alert("Recruta cadastrado com sucesso!\n" +
"\nNome completo: " + primeiroNome + " " + sobrenome +
"\nCampo de estudo: " + campoDeEstudo +
"\nIdade: " + anoDeNascimento)