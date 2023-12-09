function leDados() {
    let strDados = localStorage.getItem('dbcadastro');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);

    }
    else {
        objDados = {
            cadastros: [
                {
                    nome: "José",
                    sobrenome: "Máximo Resende",
                    sexo: "Masculino",
                    idade: "45",
                    peso: "68",
                    email: "joseresende@gmail.com",
                    password: "jm874369",
                    confirmPassword: " jm874369" 
            },
            {
                nome: "Maria",
                sobrenome: "Resende Batista",
                sexo: "Feminino",
                idade: "23",
                peso: "60",
                email: "maria.cicilia@gmail.com",
                password: "mc874369#",
                confirmPassword: "mc874369#" 
        },
        {
            nome: "Laura",
            sobrenome: "Ferreira Viana",
            sexo: "Feminino",
            idade: "30",
            peso: "55",
            email: "lauraviana@gmail.com",
            password: "l78964",
            confirmPassword: "l78964" 
    }
        ]

    }

} 

   return objDados;
}



let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

function validarSenha() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Senhas diferentes!");
    confirmPassword.reportValidity();
    return false;
  } else {
    confirmPassword.setCustomValidity("");
    return true;
  }
}


confirmPassword.addEventListener('input', validarSenha);

let inputpassword = document.querySelector('#password');
let inputconfirmPassword = document.querySelector('#confirmPassword');

inputconfirmPassword.addEventListener('focusout', () => {
   if( inputpassword.value !== inputconfirmPassword.value){
      
   }
})
    

function incluirDados() {
    let nome = document.getElementById('firstname').value;
    let sobrenome = document.getElementById('lastname').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let sexo = document.getElementById('sexo').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (!nome || !sobrenome || !idade || !peso || !sexo || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, insira as senhas iguais nos campos correspondentes.');
        return;
    }

    let objDados = leDados();

    let novocadastro = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso,
        sexo: sexo,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    objDados.cadastros.push(novocadastro);

    salvaDados(objDados);


    alert('Cadastro realizado com sucesso!');

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('sexo').value = 'Masculino';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}



function salvaDados(dados) {
    localStorage.setItem('dbcadastro', JSON.stringify(dados))

    

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



document.getElementById('cadastro').addEventListener('click', incluirDados);
