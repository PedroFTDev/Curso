const carro1 = prompt("Insira o nome do veículo: ")
const velocidade1 = prompt ("Insira a velocidade do veiculo:")

const carro2 = prompt("Insira o nome do veículo: ")
const velocidade2 = prompt ("Insira a velocidade do veiculo:")

if (velocidade1 > velocidade2){
  prompt("O(A) " + carro1 + "é mais rápido do que o(a) " + carro2)
} else if (velocidade1 < velocidade2){
  prompt ("O(A) " + carro2 + " é mais rápido do que o(a) " + carro1)
}
  else{
    prompt("Os dois tem a mesma velocidade")
  }
