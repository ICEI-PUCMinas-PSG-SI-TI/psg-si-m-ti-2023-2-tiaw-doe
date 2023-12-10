function leDados() {
    let strDados = localStorage.getItem('dbcadastrohemocentro');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);

    }
    else {
        objDados = {
            perfilhemocentro: [
                {
                    foto: 'https://media.glassdoor.com/sql/2806834/vita-hemoterapia-squarelogo-1671623448940.png',
                    nome: "Vita",
                    sobrenome: "Hemoterapia",
                    biografia: "Somos uma operação do Grupo Vita especializada em Medicina Transfusional.  Atendemos mais de 17 hospitais e clínicas credenciadas em Minas Gerais e contamos com um ambulatório que oferece conforto e qualidade aos nossos pacientes. ",
                    email: "vitahemoterapia@gmail.com",
                    telefone: "(31)986451236",
                    endereco: "Rua Santa Luzia 956, Centro, Santa Luzia - MG"
                }
            ]

        }

    }

    return objDados;
}

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const defaultImageSrc = "https://media.licdn.com/dms/image/D4D0BAQECqCI59Z6B-A/company-logo_200_200/0/1692193746599/vitapart_logo?e=2147483647&v=beta&t=_cqOAK-e1COXTBQXaR_pIndZkKIXK25efOeLTMSIsdY";
const pictureImageTxt = "Escolha uma imagem";

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
document.getElementById("picture__input").addEventListener("click", openFileSelector);
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

        objDados.perfilhemocentro.push(novoperfil);

        salvaDados(objDados);
        alertas();

        
    } else {
        alert("Por favor, preencha todos os campos do formulário antes de salvar.");
    }
}



function salvaDados(dados) {
    localStorage.setItem('dbcadastrohemocentro', JSON.stringify(dados))



}





function alertas() {
    alert('Salvo com sucesso!');
    
}






document.getElementById('salvar').addEventListener('click', incluirDados)

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

