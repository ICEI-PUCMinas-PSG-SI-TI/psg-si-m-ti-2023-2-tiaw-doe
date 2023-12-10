
/*
document.getElementById('publicar').addEventListener('click', function() {

    var nome = document.getElementById('nome').value;
    var tipoSangue = document.getElementById('tipo_sangue').value;
    var descricao = document.getElementById('descricao').value;
    var imagemInput = document.getElementById('imagem'); 

    localStorage.setItem('nome', nome);
    localStorage.setItem('tipoSangue', tipoSangue);
    localStorage.setItem('descricao', descricao);

});

document.getElementById('cancelar').addEventListener('click', function() {
    location.reload();
});
*/


document.addEventListener('DOMContentLoaded', function () {
    // 1. Obter os dados do local storage
    const db1Data = JSON.parse(localStorage.getItem('db1')) || {};
    const sangues = db1Data.sangues || [];
    console.log(localStorage.getItem('db1'));
    // 2. Declare a variável donateNamesSection
    const donateNamesSection = document.querySelector('.donate_names');

    sangues.forEach((grupoSanguineo) => {
        // Para cada grupo sanguíneo, criamos um hemocentro
        const hemocentroDiv = document.createElement('div');
        hemocentroDiv.classList.add('hemocentro');
        console.log('Criando hemocentro:', grupoSanguineo);
        // Iterar sobre as propriedades do grupo sanguíneo
        Object.entries(grupoSanguineo).forEach(([nome, nomeHemocentro]) => {
            // Criar um botão com o tipo de sangue
            const tipoSangueButton = document.createElement('button');
            tipoSangueButton.textContent = nomeHemocentro;
            hemocentroDiv.appendChild(tipoSangueButton);

            // Criar a div com o nome do hemocentro e o link de endereço
            const nameAdressDiv = document.createElement('div');
            nameAdressDiv.classList.add('name_adress');

            const h4Element = document.createElement('h4');
            h4Element.textContent = "Hemocentro";
            nameAdressDiv.appendChild(h4Element);

            const aElement = document.createElement('a');
            aElement.href = '#'; // Adicione a lógica real para o link de endereço, se necessário
            aElement.textContent = 'ver endereço';
            nameAdressDiv.appendChild(aElement);

            // Adicionar a div de nome e endereço à div do hemocentro
            hemocentroDiv.appendChild(nameAdressDiv);
        });

        // Adicionar a div do hemocentro à seção de doações
        donateNamesSection.appendChild(hemocentroDiv);
    });
});