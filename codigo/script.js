document.getElementById('publicar').addEventListener('click', function() {
    // Obter os valores do formulário
    var nome = document.getElementById('nome').value;
    var tipoSangue = document.getElementById('tipo_sangue').value;
    var descricao = document.getElementById('descricao').value;
    var imagemInput = document.getElementById('imagem'); // Supondo que 'imagem' é um campo de entrada de arquivo

    // Armazenar os dados no Local Storage
    localStorage.setItem('nome', nome);
    localStorage.setItem('tipoSangue', tipoSangue);
    localStorage.setItem('descricao', descricao);

    // Recuperar o elemento de imagem
    var imagemElement = document.getElementById('imagemPublicada');

    // Verificar se um arquivo de imagem foi selecionado
    if (imagemInput.files && imagemInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Definir o atributo src da imagem para exibir a imagem carregada
            imagemElement.src = e.target.result;
        };

        // Ler a imagem do campo de entrada de arquivo
        reader.readAsDataURL(imagemInput.files[0]);
    }

    // Recuperar a div das informações
    var informacoesDiv = document.querySelector('.informacoesDiv');

    // Inserir os dados nas divs
    document.getElementById('nomePublicado').textContent = nome;
    document.getElementById('tipoSanguePublicado').textContent = tipoSangue;
    document.getElementById('descricaoPublicada').textContent = descricao;

    // Exibir a div com os dados
    informacoesDiv.style.display = 'block';


});

document.getElementById('cancelar').addEventListener('click', function() {
    location.reload();
});

