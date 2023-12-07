function leDados() {
    let strDados = localStorage.getItem('db')
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados)

    }

    else {
        objDados = {
            agendamentos: [
                {
                    nome: "Laura Resende",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "01/01/2003",
                    sexo: "Feminino",
                    sangue: "O+",
                    data: "12/08/2013",
                    horario: "07:30"
                },
                {
                    nome: "Livia Resende",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "02/02/2003",
                    sexo: "Feminino",
                    sangue: "O+",
                    data: "12/08/2013",
                    horario: "08:30"
                },
                {
                    nome: "Maria Oliveira",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "04/01/2004",
                    sexo: "Feminino",
                    sangue: "A+",
                    data: "13/08/2013",
                    horario: "09:30"
                }



            ]
        }
    }
    return objDados;
}

function salvaDados(dados) {

    localStorage.setItem('db', JSON.stringify(dados))

}

function incluirAgendamento() {
    let objDados = leDados();

    let nome = document.getElementById('name').value;
    let documento = document.getElementById('number').value;
    let hemocentro = document.getElementById('hemocentro').value;
    let nascimento = document.getElementById('data').value;
    let sexo = document.getElementById('sexo').value;
    let sangue = document.getElementById('sangue').value;
    let data = document.getElementById('data1').value;
    let horario = document.getElementById('hora').value;

    if (nome && documento && hemocentro && nascimento && sexo && sangue && data && horario) {
        let novoAgendamento = {
            nome: nome,
            hemocentro: hemocentro,
            documento: documento,
            nascimento: nascimento,
            sexo: sexo,
            sangue: sangue,
            data: data,
            horario: horario
        };
        objDados.agendamentos.push(novoAgendamento);

        salvaDados(objDados);
       
        alert("Agendamento realizado com sucesso!");
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('hemocentro').selectedIndex = 0;
        document.getElementById('data').value = '';
        document.getElementById('sexo').selectedIndex = 0;
        document.getElementById('sangue').selectedIndex = 0;
        document.getElementById('data1').value = '';
        document.getElementById('hora').value = '';
        document.getElementById('cbx').checked = false;
    } else {
        alert('Preencha todos os campos antes de adicionar o agendamento.');
    }
}


function alterarAgendamento(index) {
    let objDados = leDados();
    if (index >= 0 && index < objDados.agendamentos.length) {
        document.getElementById('confirmar').addEventListener('click', alerta1)
        let agendamento = objDados.agendamentos[index];
        document.getElementById('name').value = agendamento.nome;
        document.getElementById('number').value = agendamento.documento;
        document.getElementById('hemocentro').value = agendamento.hemocentro;
        document.getElementById('data').value = agendamento.nascimento;
        document.getElementById('sexo').value = agendamento.sexo;
        document.getElementById('sangue').value = agendamento.sangue;
        document.getElementById('data1').value = agendamento.data;
        document.getElementById('hora').value = agendamento.horario;
        deleteAgendamento(index);

    } else {
        alert("O índice fornecido é inválido. Por favor, tente novamente com um índice válido.");
    }
}


document.getElementById('confirmar').addEventListener('click', incluirAgendamento);






document.getElementById('confirmar').addEventListener('click', incluirAgendamento);


function alerta() {
    alert("Agendamento realizado com sucesso!");
}
function alerta1() {
    alert("Agendamento alterado com sucesso!");
}




document.getElementById('confirmar').addEventListener('click', incluirAgendamento)


function alerta() {
    alert("Agendamento realizado com sucesso!");
}

