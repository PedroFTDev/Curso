const nome = prompt("Informa o nome do usuário:");
const sobnome = prompt("Informe o sobrenome do usuário:");
const areadeestudo = prompt("Qual a área que o usuário estuda?");
const anoDeNascimento = prompt("Qual o ano de nascimento do usuário?");

alert(
  "Recruta cadastrado com sucesso!\n" + 
  "\nNome Completo: " + nome + "" + sobnome +
  "\nÁrea de Estudo: " + areadeestudo +
  "\nIdade: " + (2023 - anoDeNascimento)
)
