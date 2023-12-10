let usuarioLogado1 = {
    cadastros: [
        {
            nome: "HemoLife",
            email: "lifehemo@gmail.com",
            password: "he874369",
            confirmPassword: "he874369"
        }
    ]
}

localStorage.setItem("usuarioLogado1", JSON.stringify(usuarioLogado1))

document.querySelector("#user_perfil h1").innerHTML = usuarioLogado1.cadastros[0].nome

function exibir(){
    usuarioLogado1 = JSON.parse(localStorage.getItem("usuarioLogado1"))
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
            <td>${usuarioLogado1.cadastros[0].nome}</td>
            <td>${usuarioLogado1.cadastros[0].email}</td>
            <td>${usuarioLogado1.cadastros[0].password}</td>
        </tr>
    </tdoby>
    `
}

function limpar(){
    let tabela = document.querySelector(".exibicaoDeDados .tabela")
    tabela.innerHTML=""
}

function alterarDados(){
    usuarioLogado1 = JSON.parse(localStorage.getItem("usuarioLogado1"))

    let newMail = document.getElementById("Newmail").value
    let newPassword = document.getElementById("Newpassword").value
    let newconfirmPassword = document.getElementById("NewconfirmPassword").value

    if(newMail != ""){
        usuarioLogado1.cadastros[0].email = newMail
    }

    if(newPassword != "" && newPassword == newconfirmPassword){
        usuarioLogado1.cadastros[0].password = newPassword
    }

    alert("Preferências alteradas com sucesso!")

    localStorage.setItem("usuarioLogado1", JSON.stringify(usuarioLogado1))
}

try {
    // Obtém os cadastros armazenados no localStorage
    const cadastrosData = JSON.parse(localStorage.getItem('dbcadastro')) || {};
    const cadastros = cadastrosData.cadastros || [];
  
    // Verifica se há pelo menos um cadastro
    if (cadastros.length > 0) {
        // Obtém o último cadastro
        const ultimoCadastro = cadastros[cadastros.length - 1];
  
        // Obtém o nome do último cadastro
        const nomeUltimoCadastro = ultimoCadastro.nome;
        const sobrenomeUltimo=ultimoCadastro.sobrenome;
        const emailIltimo=ultimoCadastro.email;
  
        // Atualiza o conteúdo da tag <h1> com o nome do último cadastro
        document.getElementById('user_perfil').querySelector('h1').textContent = nomeUltimoCadastro +" "+sobrenomeUltimo;
        document.getElementById('firstname').placeholder = nomeUltimoCadastro;
        document.getElementById('lastname').placeholder = sobrenomeUltimo;
        document.getElementById('email').placeholder = emailIltimo;
    } else {
        console.log('Nenhum cadastro encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter o último cadastro:', error);
  }