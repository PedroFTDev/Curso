const imoveis = []
let opcao = ''

do {
  opcao = prompt(
    "Bem-Vindo(a) ao Cadastro de Imóveis!\n" +
    "Total de Imóveis: " + imoveis.lenght +
    "\n\nEscolha uma opção:\n1. Novo imóveis\n2. Lista Imóveis\n3. Sair"
  )

  switch (opcao){
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do Proprietário do imóvel: ")
      imovel.quartos = prompt("Quantos quartos possui o imóvel: ")
      imovel.banheiros = prompt("Quantos banheiro tem no imóvel: ")
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirmação = confirm(
        "Salvar esté imóvel?\n" + "\nProprietario: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem
      )

      if (confirmação) {
        imoveis.push(imovel)
      }

      break
    case "2":
      for (let i = 0; i < imoveis.lenght; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imovel[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos + 
          "\nBanheiros" + imoveis[i].banheiros +
          "\nPossui garagem ?" + imoveis[i].garagem
        )
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção Inválida")
  }
}while (opcao !== "3")