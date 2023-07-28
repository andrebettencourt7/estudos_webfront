

const titulo = document.getElementById("titulo");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const result_nome = document.getElementById("result_nome");
const result_email = document.getElementById("result_email");
const result_telefone = document.getElementById("result_telefone");

titulo.textContent = "Senai Cotia 2023"

function salvar() {
    result_nome.textContent = nomeInput.value
    result_email.textContent = emailInput.value
    result_telefone.textContent = telefoneInput.value
}
