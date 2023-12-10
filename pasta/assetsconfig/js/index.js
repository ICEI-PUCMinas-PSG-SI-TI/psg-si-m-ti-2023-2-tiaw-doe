let usuarioLogado = {
    cadastros: [
        {
            nome: "HemoLife",
            email: "lifehemo@gmail.com",
            password: "he874369",
            confirmPassword: "he874369"
        }
    ]
}

localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado))

document.querySelector("#user_perfil h1").innerHTML = usuarioLogado.cadastros[0].nome

function exibir(){
    usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    let tabela = document.querySelector(".exibicaoDeDados .tabela")

    tabela.innerHTML = 
    `
    <tbody>
        <tr>
            <th>Nome</th>
            <th>E-Mail</th>
            <th>Senha</th>
        </tr>
        <tr>
            <td>${usuarioLogado.cadastros[0].nome}</td>
            <td>${usuarioLogado.cadastros[0].email}</td>
            <td>${usuarioLogado.cadastros[0].password}</td>
        </tr>
    </tdoby>
    `
}

function limpar(){
    let tabela = document.querySelector(".exibicaoDeDados .tabela")
    tabela.innerHTML=""
}

function alterarDados(){
    usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))

    let newMail = document.getElementById("Newmail").value
    let newPassword = document.getElementById("Newpassword").value
    let newconfirmPassword = document.getElementById("NewconfirmPassword").value

    if(newMail != ""){
        usuarioLogado.cadastros[0].email = newMail
    }

    if(newPassword != "" && newPassword == newconfirmPassword){
        usuarioLogado.cadastros[0].password = newPassword
    }

    alert("Preferências alteradas com sucesso!")

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado))
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
        
        const emailIltimo=ultimoCadastro.email;
  
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
  