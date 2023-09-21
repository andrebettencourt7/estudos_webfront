const elementDad = document.getElementById("container");

const temperatura = [
    {
        "image":"img/img_london1.jpg",
        "nome":"LONDON",
        "temp":"60º F",
        "days": {
            "mon":"img/rain.PNG",
            "tue":"img/sun-cloud.PNG",
            "wed":"img/moon.PNG"
        }
    },
    {
        "image":"img/img_newyork.jpg",
        "nome":"NEW YORK",
        "temp":"55º F",
        "days": {
            "mon":"img/rain2.PNG",
            "tue":"img/sun.PNG",
            "wed":"img/wind.PNG"
        }
    },
    {
        "image":"img/img_tokio.jpg",
        "nome":"TOKIO",
        "temp":"63º F",
        "days": {
            "mon":"img/moon2.PNG",
            "tue":"img/rain2.PNG",
            "wed":"img/ray.PNG"
        }
    }
]


temperatura.forEach(element => {

    const container = document.createElement("div");
    container.innerHTML = `<div class="w3-card-4 w3-margin" style="width:50%">
        <div class="w3-display-container w3-text-white">
        <img src="${element.image }" alt="Lights" style="width:100%">
        <div class="w3-xlarge w3-display-bottomleft w3-padding">${element.nome} ${element.temp}</div>
        </div>
        <div class="w3-row">
        <div class="w3-third w3-center">
        <h3>MON</h3>
        <img src="${element.days.mon}" alt="sun" style="width:80px">
        </div>
        <div class="w3-third w3-center">
        <h3>TUE</h3>
        <img src="${element.days.tue}" alt="cloud" style="width:80px">
        </div>
        <div class="w3-third w3-center w3-margin-bottom">
        <h3>WED</h3>
        <img src="${element.days.wed}" alt="clouds" style="width:80px">
        </div>
        </div>
        </div>`

        elementDad.appendChild(container);
})