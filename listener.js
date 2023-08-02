//Criando um componente HTML
//usar o innerHTML
//Usar a concatenação de javascript


const titulo = document.getElementById("titulo");
const minhaDiv = document.getElementById("minha-div");
const buttonAdd = document.getElementById("button");
const userName = document.getElementById("nome");

let idade = 26

buttonAdd.addEventListener('click', () => {
    minhaDiv.innerHTML = `

        <h2>${idade}</h2>
        <button>Pode clicar...</button>

    `
    
})


