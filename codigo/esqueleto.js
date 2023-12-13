document.getElementById('publicar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var tipoSangue = document.getElementById('tipo_sangue').value;
    var descricao = document.getElementById('descricao').value;

    var dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];

    var novoDado = {
        nome: nome,
        tipoSangue: tipoSangue,
        descricao: descricao
    };

    dadosSalvos.push(novoDado);

    localStorage.setItem('dados', JSON.stringify(dadosSalvos));

    document.getElementById('nome').value = '';
    document.getElementById('tipo_sangue').value = '';
    document.getElementById('descricao').value = '';

    alert('O seu pedido de doação foi publicado!');
});

document.getElementById('cancelar').addEventListener('click', function() {
    location.reload();
});

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