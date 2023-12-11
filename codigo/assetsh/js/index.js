function leDados() {
    let strDados = localStorage.getItem('dbcadastrohemocentro');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            cadastros: [
                {
                    nome: "HemoLife",
                    email: "lifehemo@gmail.com",
                    password: "he874369",
                    confirmPassword: "he874369"
                },
                {
                    nome: "Vita",
                    email: "vita@gmail.com",
                    password: "he874369",
                    confirmPassword: "he874369"
                },
                {
                    nome: "Centrus Saúde",
                    email: "centrussaude@gmail.com",
                    password: "he874369",
                    confirmPassword: "he874369"
                }
            ]
        };
    }

    return objDados;
}

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

// Função para validar senhas
function validarSenha() {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Senhas diferentes!");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

// Evento de envio do formulário
document.getElementById('cadastro-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado

    validarSenha(); // Chama a função de validação de senhas

    let isValid = document.getElementById('cadastro-form').checkValidity();

    if (isValid) {
        incluirDados();
        alertas();
    }
});


confirmPassword.addEventListener('input', validarSenha);

let inputpassword = document.querySelector('#password');
let inputconfirmPassword = document.querySelector('#confirmPassword');

inputconfirmPassword.addEventListener('focusout', () => {
   if( inputpassword.value !== inputconfirmPassword.value){
      alert('As senhas não coincidem');
   }
})

function incluirDados() {

    let nome = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (!nome || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, insira as senhas iguais nos campos correspondentes.');
        return;
    }

    // Obtenha os dados existentes do localStorage
    let objDados = leDados();

    let novocadastro = {
        nome: nome,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    objDados.cadastros.push(novocadastro);

    salvaDados(objDados);

   

    alert('Cadastro realizado com sucesso!');

    document.getElementById('firstname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    
}

function salvaDados(dados) {
    localStorage.setItem('dbcadastrohemocentro', JSON.stringify(dados)) 

}



document.getElementById ('cadastro').addEventListener ('click', incluirDados);



function mostrarsenha(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btnsenha')

    if(inputPass.type === 'password'){
         inputPass.setAttribute('type','text')
         btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
         btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function mostrarsenha2(){
    var inputPass = document.getElementById('confirmPassword')
    var btnShowPass = document.getElementById('btnsenha2')

    if(inputPass.type === 'password'){
         inputPass.setAttribute('type','text')
         btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
         btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function limparFormulario() {
    document.getElementById('firstname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}

document.getElementById('cadastro').addEventListener('click', incluirDados);




