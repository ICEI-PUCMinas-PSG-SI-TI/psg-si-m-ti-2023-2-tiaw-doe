document.addEventListener('DOMContentLoaded', function () {
    const hemocentros = document.querySelectorAll('.donate_names .hemocentro');
    const ShowMoreButton = document.getElementById('ShowMore');

    const maxToShow = 4;
    let hemocentrosToShow = maxToShow;

    function showHemocentros() {
        hemocentros.forEach((hemocentro, index) => {
            if (index < hemocentrosToShow) {
                hemocentro.style.display = 'flex';
            } else {
                hemocentro.style.display = 'none';
            }
        });
    }

    ShowMoreButton.addEventListener('click', function () {
        if (hemocentrosToShow === maxToShow) {
            hemocentrosToShow = hemocentros.length;
            ShowMoreButton.innerHTML = '<strong>Ver menos</strong> <i class="fa-solid fa-chevron-up"></i>';
        } else {
            hemocentrosToShow = maxToShow;
            ShowMoreButton.innerHTML = '<strong>Ver mais</strong> <i class="fa-solid fa-chevron-down"></i>';
        }

        showHemocentros();
    });

    showHemocentros();
});

var dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];

var people = document.querySelector(".people");
var showAll = false;
var contador = 0;

function showPeople() {
    people.innerHTML = "";

    var limit = showAll ? dadosSalvos.length : 3;

    for (var i = 0; i < limit; i++) {
        var pessoa = dadosSalvos[i];
        if (pessoa) {
            var { nome, descricao, tipoSangue } = pessoa;
            people.innerHTML += `
            <div class="person">
                <div class="person_info">
                    <img src="imagem/user_photo_0.png" alt="">
                    <h1>${nome}</h1>
                    <p>${descricao}</p>
                    <h2>${tipoSangue}</h2>
                </div>
            </div>`;
        }
    }
}

function togglePeople() {
    showAll = !showAll;
    showPeople();

    var button = document.querySelector(".NeedShow");
    button.textContent = showAll ? "Ver menos" : "Visualizar todas";
}

showPeople();



/*Java Script do mapa */


let hemoBH = [
    {
        id: 1,
        descricao: 'Hemominas',
        endereco: 'Hospital Júlia Kubitschek - R. Dr. Cristiano Rezende, 2505 - Bonsucesso',
        cidade: 'Belo Horizonte',
        latlong: [ -43.99662294742863,-19.98925714031072],
        url: 'https://maps.app.goo.gl/EDWfE3adTKmcBsSM7?g_st=iw',
        cor: 'red'
    },
    {
        id: 2,
        descricao: 'Doação De Sangue',
        endereco: 'Rua Juiz de Fora, 861 - Barro Preto',
        cidade: 'Belo Horizonte',
        latlong: [ -43.95398972977381, -19.92550025397705],
        url: 'https://maps.app.goo.gl/Pdirn5KrdDt9DKwN6?g_st=iw',
        cor: 'red'
    },
    {
        id: 3,
        descricao: 'Hemocentro de Belo Horizonte - Fundação Hemominas',
        endereco: 'Rua Alameda Ezequiel Dias, 321 - Santa Efigênia',
        cidade: 'Belo Horizonte',
        latlong: [-43.93178856196358, -19.924635141384183],
        url: 'https://maps.google.com?q=Hemocentro%20de%20Belo%20Horizonte%20-%20Funda%C3%A7%C3%A3o%20Hemominas%20-%20Alameda%20Ezequiel%20Dias,%20321%20-%20Santa%20Efig%C3%AAnia,%20Belo%20Horizonte%20-%20MG,%2030130-110&ftid=0xa699ee5324ffc9:0x5d94184f53743e35&hl=pt-BR&gl=br&entry=gps&lucs=,47071704&g_st=iw',
        cor: 'red'
    },
    {
        id: 4,
        descricao: 'Fundação Centro de Hematologia e Hemoterapia de Minas Gerais',
        endereco: 'Rua Grão Pará, 882 - Funcionários',
        cidade: 'Belo Horizonte',
        latlong: [-43.92370801597981, -19.92954335834476],
        url: 'https://maps.google.com?q=Funda%C3%A7%C3%A3o%20Centro%20de%20Hematologia%20e%20Hemoterapia%20de%20Minas%20Gerais%20-%20R.%20Gr%C3%A3o%20Par%C3%A1,%20882%20-%20Funcion%C3%A1rios,%20Belo%20Horizonte%20-%20MG,%2030150-340&ftid=0xa69994bb70bdc1:0x1fd9924f91448a68&hl=pt-BR&gl=br&entry=gps&lucs=,47071704&g_st=iw',
        cor: 'red'
    },
    {
        id: 5,
        descricao: 'Hemoservice - Grupo H.Hemo',
        endereco: 'Rua Ceará, 195 - Santa Efigênia',
        cidade: 'Belo Horizonte',
        latlong: [-43.92553263246391, -19.922928419635117],
        url: 'https://maps.app.goo.gl/bM7kM1dtwHzyT1Uz9?g_st=iw',
        cor: 'red' 
    },
    {
        id: 6,
        descricao: 'Vita Homoterapia',
        endereco: 'Rua Juiz de Fora, 941 - Barro Preto',
        cidade: 'Belo Horizonte',
        latlong: [-43.954215855442826, -19.92621889143359],
        url: 'https://maps.app.goo.gl/2xzAYqH9iPASAUBX7?g_st=ic',
        cor: 'red'    
    },
    {
        id: 7,
        descricao: 'AFC Hemoterapia Ltda',
        endereco: 'Av. Barbacena, 653 - Barro Preto',
        cidade: 'Belo Horizonte',
        latlong: [-43.95288817160527, -19.92397482130766],
        url: 'https://maps.app.goo.gl/au5ijDjkax3WVGxZ6?g_st=iw',
        cor: 'red'    
    }
]

const centralLatLong= [-43.93178856196358, -19.924635141384183]

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhZG9yYXhhdmllciIsImEiOiJjbHBmaWExc3cwcGY0MmtvMGd0d3M2anRpIn0.2tNFxB8MJpLS5eoQ0RbFWQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centralLatLong,
    zoom: 13
});

hemoBH.forEach ((uni) => {
    var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                  ${uni.endereco} <br> ${uni.cidade}`);
    const marker = new mapboxgl.Marker({ color: uni.cor })
        .setLngLat(uni.latlong)
        .setPopup(popup)
        .addTo(map);     
});
