const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");
const porcent = document.getElementById("porcent");

resultado.textContent = "Resultado";
porcent.textContent = "*No caso de porcentagem, colocar o valor q deseja saber no primeiro campo e quanto e o porcento no segundo"


function calculo(operacao) {

    const finalResult = eval("Number(numero1.value)" + operacao + "Number(numero2.value)");

    if(isNaN(finalResult) || !isFinite(finalResult)){
        alert("Algo errado aconteceu")
        return
    }

    resultado.textContent = finalResult;

}

