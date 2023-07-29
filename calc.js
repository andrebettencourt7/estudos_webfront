const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");


resultado.textContent = "Resultado";

function somar() {

    resultado.textContent = Number(numero1.value) + Number(numero2.value);
    
}

function subtrair() {

    resultado.textContent = Number(numero1.value) - Number(numero2.value);
    
}

function dividir() {

    resultado.textContent = Number(numero1.value) / Number(numero2.value);
    
}

function multiplicar() {

    resultado.textContent = Number(numero1.value) * Number(numero2.value);
    
}
