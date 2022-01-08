var numeroContadorTela = document.getElementById('numeroContador')
var numeroContador = 0

function incremento() {
  numeroContador = numeroContador + 1 
  numeroContadorTela.innerHTML = numeroContador
}

function decremento() {
  numeroContador = numeroContador - 1 
  numeroContadorTela.innerHTML = numeroContador
}

function limpar() {
  numeroContador = numeroContador = 0
  numeroContadorTela.innerHTML = numeroContador
}