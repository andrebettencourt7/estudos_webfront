const introducao = document.getElementById("introdução");
const n1 = document.getElementById("number1");
const n2 = document.getElementById("number2");
const n3 = document.getElementById("number3");
const n4 = document.getElementById("number4");
const nota = document.getElementById("nota");
const notaFinal = document.getElementById("notafinal");
const notaFinal2 = document.getElementById("notafinal2");
var calculoNota 

introducao.textContent = "Notas dos Alunos !";

nota.textContent = "Nota";
notaFinal.textContent = "notafinal";

function calcular() {

    calculoNota = (Number(n1.value)+(Number(n2.value*2))+(Number(n3.value*3))+Number(n4.value))/7;
    
    notaFinal2.textContent = calculoNota;

    if (calculoNota > 9) {
        notaFinal.textContent = "A";
    }else if (calculoNota >= 7.5 && calculoNota < 9){
        notaFinal.textContent = "B";
    }else if (calculoNota >= 6 && calculoNota < 7.5){
        notaFinal.textContent = "C"
    }else{
        notaFinal.textContent = "D"
    }

}



