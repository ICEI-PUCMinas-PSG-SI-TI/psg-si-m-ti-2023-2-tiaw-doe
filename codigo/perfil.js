function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);

    }
    else {
        objDados = {
            perfil: [
                {
                    foto: 'https://plus.unsplash.com/premium_photo-1672297543351-17987c5c9361?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    nome: "José",
                    sobrenome: "Máximo Resende",
                    biografia: "Sou arquiteto formado pela Puc Minas, trabalhei por muitos anos e hoje já estou aposentado.",
                    email: "joseresende@gmail.com",
                    telefone: "(31)986451236",
                    endereco: "Rua Santa Luzia 956, Centro, Santa Luzia - MG"
                },
                {
                    foto: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    nome: "Maria",
                    sobrenome: "Resende Xavier",
                    biografia: "Sou estudante de psicologia, estou no sétimo período e faço estágio em um pequeno consultório.",
                    email: "mariaresende@gmail.com",
                    telefone: "(31)987541283",
                    endereco: "Rua Francisco Viana, Adeodato, Belo Horizonte - MG"
                },
                {
                    foto: 'https://images.unsplash.com/photo-1615538785945-6625ccdb4b25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    nome: "Sandra",
                    sobrenome: "Carla de Oliveira",
                    biografia: "Sou advogada trabalhista, formada pela Federal de Minas Gerais. Trabalho, atualmente em um pequeno escritório em Santa Luzia.",
                    email: "sandracarla@gmail.com",
                    telefone: "(31) 999756413",
                    endereco: "Rua Direita, Centro, Santa Luzia - MG"
                }
            ]

        }

    }

    return objDados;
}

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const defaultImageSrc = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const pictureImageTxt = "Escolha";

// Função para abrir o seletor de arquivo
function openFileSelector() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Função para carregar a imagem a partir da URL no modal
function loadImageFromUrl() {
  const imageUrlInput = document.getElementById("image-url-modal");
  const imageUrl = imageUrlInput.value;

  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("picture__img");

    pictureImage.innerHTML = "";
    pictureImage.appendChild(img);

    closeModal();  
  } else {
    alert("Por favor, insira a URL da imagem.");
  }
}

// Adiciona eventos de clique aos elementos
pictureImage.addEventListener("click", openFileSelector);
document.getElementById("vermelho").addEventListener("click", openFileSelector);
document.getElementById("icon").addEventListener("click", openFileSelector);
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = `<img src="${defaultImageSrc}" alt="${pictureImageTxt}" class="picture__img">`;
  }
});

// Limpa o formulário e exibe a imagem padrão ao iniciar
limparFormulario();

function incluirDados() {
    // Obtém os valores dos campos do formulário
    let biografia = document.getElementById('biografia').value;
    let nome = document.getElementById('firstname').value;
    let sobrenome = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;

    // Obtém a referência para o campo de entrada da URL da imagem no modal
    let imageUrlInput = document.getElementById('image-url-modal');

    // Obtém a URL da imagem a partir do campo de entrada
    let foto = imageUrlInput.value;

    // Verifica se todos os campos estão preenchidos
    if (biografia && nome && sobrenome && email && telefone && endereco && foto) {
        
        let objDados = leDados();

        let novoperfil = {
            foto: foto,
            nome: nome,
            sobrenome: sobrenome,
            biografia: biografia,
            email: email,
            telefone: telefone,
            endereco: endereco
        };

        objDados.perfil.push(novoperfil);

        salvaDados(objDados);
        alertas();

        imprimeDados();
    } else {
        alert("Por favor, preencha todos os campos do formulário antes de salvar.");
    }
}



function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados))



}







function limparFormulario() {
    // Limpa os valores dos campos do formulário
    document.getElementById('biografia').value = '';
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('endereco').value = '';

    // Limpa o valor do campo de entrada da URL da imagem no modal
    document.getElementById('image-url-modal').value = '';

    // Remove a imagem exibida na pictureImage
    pictureImage.innerHTML = `<img src="${defaultImageSrc}" alt="${pictureImageTxt}" class="picture__img">`;
}



function alertas() {
    alert('Salvo com sucesso!');
    
}






document.getElementById('salvar').addEventListener('click', incluirDados)

document.getElementById('armazena').addEventListener('click', imprimeDados)

