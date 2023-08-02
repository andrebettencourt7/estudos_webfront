const pergunta = document.getElementById("pergunta");
const qtdMorango = document.getElementById("qtdMorango");
const qtdMaca = document.getElementById("qtdMaca");
const valorFinal = document.getElementById("valor");
var valorMaca
var valorMorango
var valorDesc
var kiloTotal


pergunta.textContent = "Quantos kilos ira comprar?"
valorFinal.textContent = "Valor total"

function comprar() {

    if (qtdMorango.value <= 5) {
        valorMorango = qtdMorango.value * 2.50;

    } else {
        valorMorango = qtdMorango.value * 2.20;
    }

    if (qtdMaca.value <= 5) {
        valorMaca = qtdMaca.value * 1.80;

    } else {
        valorMaca = qtdMaca.value * 1.50;
    }

    valorFinal.textContent = valorMaca + valorMorango;

    valorDesc = valorFinal.textContent*0.1;

    kiloTotal = qtdMaca.value + qtdMorango.value;

    if(valorFinal.textContent >= 25 || kiloTotal > 8){
        valorFinal.textContent = valorFinal.textContent - valorDesc;
    }

}