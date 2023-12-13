let nomeUltimoCadastro = '';

try {
    const cadastrosData = JSON.parse(localStorage.getItem('dbcadastrohemocentro')) || {};
    const cadastros = cadastrosData.cadastros || [];

    const ultimoCadastro = cadastros[cadastros.length - 1];
    nomeUltimoCadastro = ultimoCadastro.nome;

} catch (error) {
    console.error('Erro ao obter o último cadastro:', error);
}

let sangueJSON = JSON.parse(localStorage.getItem('db1')) || {};
let sangueData = sangueJSON.sangues || [];

CarregaSangue();

async function CarregaSangue() {
    try {
        let str = "";
        for (let i = 0; i < sangueData.length; i++) {
            let tiposSanguineos = Object.values(sangueData[i]); // Obtém os valores dos tipos de sangue

            for (let j = 0; j < tiposSanguineos.length; j++) {
                str += `
                <div class="hemocentro">
                <button>${tiposSanguineos[j]}</button>
                <div class="name_adress">
                    <h4>${nomeUltimoCadastro}</h4>
                    <a href="#">ver endereço</a>
                </div>
                </div>`;
            }
        }
        document.querySelector(".donate_names").innerHTML = str;
    } catch (error) {
        console.error('Erro ao carregar tipos sanguíneos', error);
    }
}