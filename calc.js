const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");
const porcent = document.getElementById("porcent");

resultado.textContent = "Resultado";
porcent.textContent = "*No caso de porcentagem, colocar o valor q deseja saber no primeiro campo e quanto e o porcento no segundo"


function calculo(operacao) {

    try {
        const finalResult = eval("Number(numero1.value)" + operacao + "Number(numero2.value)");

    if(isNaN(finalResult) || !isFinite(finalResult)){
        alert("Algo errado aconteceu")
        return
    }else if(finalResult < 0){
        resultado.style.color = "red";
    }else if(finalResult > 50 && finalResult < 100){
        resultado.style.color = "blue";
    }else if(finalResult >= 100){
        resultado.style.color = "green";
    }

    resultado.textContent = finalResult;
        
    } catch (error) {
        alert(error)
    }

    

}

