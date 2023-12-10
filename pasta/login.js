

document.getElementById('button').addEventListener('click', processaFormLogin);

async function processaFormLogin(event) {
    event.preventDefault();

    var email = document.getElementById('email').value; // Corrigido para 'email'
    var password = document.getElementById('password').value;

    const resultadoLogin = await loginUser(email, password);

    if (resultadoLogin) {
        window.location.href = 'perfil.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function loginUser(login, senha) {
    try {
        // Obtém os cadastros armazenados no localStorage
        const cadastrosData = JSON.parse(localStorage.getItem('dbcadastro')) || {};
        const cadastros = cadastrosData.cadastros || [];

        // Percorre os cadastros para verificar se há um usuário correspondente
        for (let i = 0; i < cadastros.length; i++) {
            const usuario = cadastros[i];

            if (login === usuario.email && senha === usuario.password) {
                // Usuário encontrado
                return true;
            }
        }

        // Usuário não encontrado
        return false;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false;
    }
}
/*
// Adicione um evento para o botão de logout
document.getElementById('btn_logout').addEventListener('click', logout);
function logout() {
    
    window.location.href = 'login.html'; // Redireciona para a página de login após o logout
}

*/
