let menuInterativo

do {

    menuInterativo = parseInt(prompt("Olá, seja bem-vindo ao Menu Interativo!\n\nEscolha uma opção:\n1. Opção Um\n2. Opção Dois\n3. Opção Três\n4. Opção Quatro\n5. Encerrar"))
    
    switch (menuInterativo) {
        case 1:
            alert("Você escolheu a opção 1")
            break
        case 2:
            alert("Você escolheu a opção 2")
            break
        case 3:
            alert("Você escolheu a opção 3")
            break
        case 4:
            alert("Você escolheu a opção 4")
            break
        case 5:
            alert("Você escolheu encerrar.")
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!\n\nFinalizando...")
            break
    }
}   while (menuInterativo !== 5 && menuInterativo < 5)

