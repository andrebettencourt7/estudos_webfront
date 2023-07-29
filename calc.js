const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");
const porcent = document.getElementById("porcent");

resultado.textContent = "Resultado";
porcent.textContent = "*No caso de porcentagem, colocar o valor q deseja saber no primeiro campo e quanto e o porcento no segundo"



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

function porcentagem() {
    resultado.textContent = Number(numero1.value) * (Number(numero2.value)/100);
}
