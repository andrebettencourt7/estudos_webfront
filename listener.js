//Criando um componente HTML
//usar o innerHTML
//Usar a concatenação de javascript


const titulo = document.getElementById("titulo");
const minhaDiv = document.getElementById("minha-div");
const buttonAdd = document.getElementById("button");
const userName = document.getElementById("nome");
const userEmail = document.getElementById("email");
const userProfissao = document.getElementById("profissao");
const feminino = document.getElementById("fam");
const masculino = document.getElementById("masc");


buttonAdd.addEventListener('click', () => {
   

    const novaTag = document.createElement("div");
    novaTag.classList.add("flip-card")

 
    if(masculino.checked === true){
        novaTag.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./avatar/avatar2.jpg" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>${userName.value}</h1>
                <p>${userEmail.value}</p>
                <p>${userProfissao.value}</p>
            </div>
        </div>
        
    `
    }else if(masculino.checked === false){
        novaTag.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./avatar/avatar3.jpg" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>${userName.value}</h1>
                <p>${userEmail.value}</p>
                <p>${userProfissao.value}</p>
            </div>
        </div>
        
    `
    }else{
        alert("Precisa escolher algum gênero");
    }


    minhaDiv.appendChild(novaTag);

})


