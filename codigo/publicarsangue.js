function leDados() {
    let strDados = localStorage.getItem('db1')
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados)

    }

    else {
        objDados = {
            sangues: [
            ]
        }
    }
    return objDados;
}

function salvaDados(dados) {

    localStorage.setItem('db1', JSON.stringify(dados))

}

function incluirSangue() {

    let objDados = leDados();
    let novoSangue = {};
    if (document.getElementById('a1').checked) {
        novoSangue.tipo1 = document.getElementById('a1').value;
    }
    if (document.getElementById('a2').checked) {
        novoSangue.tipo2 = document.getElementById('a2').value;
    }
    if (document.getElementById('b1').checked) {
        novoSangue.tipo3 = document.getElementById('b1').value;
    }
    if (document.getElementById('b2').checked) {
        novoSangue.tipo4 = document.getElementById('b2').value;
    }
    if (document.getElementById('ab1').checked) {
        novoSangue.tipo5 = document.getElementById('ab1').value;
    }
    if (document.getElementById('ab2').checked) {
        novoSangue.tipo6 = document.getElementById('ab2').value;
    }
    if (document.getElementById('o1').checked) {
        novoSangue.tipo7 = document.getElementById('o1').value;
    }
    if (document.getElementById('o2').checked) {
        novoSangue.tipo8 = document.getElementById('o2').value;
    }


    objDados.sangues.push(novoSangue);

    salvaDados(objDados);
   
    limparFormulario();

}
function limparFormulario() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}







document.getElementById('confirmar').addEventListener('click', incluirSangue)
document.getElementById('confirmar').addEventListener('click', alerta)

function alerta() {
    alert("Publicado com sucesso!");
}

try {
    // Obtém os cadastros armazenados no localStorage
    const cadastrosData = JSON.parse(localStorage.getItem('dbcadastrohemocentro')) || {};
    const cadastros = cadastrosData.cadastros || [];
  
    // Verifica se há pelo menos um cadastro
    if (cadastros.length > 0) {
        // Obtém o último cadastro
        const ultimoCadastro = cadastros[cadastros.length - 1];
  
        // Obtém o nome do último cadastro
        const nomeUltimoCadastro = ultimoCadastro.nome;
        
        
  
        // Atualiza o conteúdo da tag <h1> com o nome do último cadastro
        document.getElementById('user_perfil').querySelector('h1').textContent = nomeUltimoCadastro;
        document.getElementById('firstname').placeholder = nomeUltimoCadastro;
       
        document.getElementById('email').placeholder = emailIltimo;
    } else {
        console.log('Nenhum cadastro encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter o último cadastro:', error);
  }