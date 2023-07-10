const imgNavBar = document.querySelector('img#icon-nav');

imgNavBar.addEventListener('click', function() {
    alert('Calma irmão, muito orçamento pro pai.');
});

const textFieldset = document.querySelector('legend');
const inputLogin = document.querySelector('input#login');
const inputSenha = document.querySelector('input#senha');
const buttonSubmit = document.querySelector('button');

const verificaEmails = ['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', '@icloud.com'];

buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    let verificaLogin = inputLogin.value.trim();
    let verificaSenha = inputSenha.value.trim();

    if (verificaLogin === '') {
        inputLogin.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputLogin.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'Informe seu e-mail pra fazer o login.';
    } else if (!verificaLogin.includes(verificaEmails[0]) && !verificaLogin.includes(verificaEmails[1]) && !verificaLogin.includes(verificaEmails[2]) && !verificaLogin.includes(verificaEmails[3]) && !verificaLogin.includes(verificaEmails[4])) {
        inputLogin.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputLogin.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'E-mail inválido, informe o e-mail corretamente.';
    } else if (verificaSenha === '') {
        inputLogin.style.border = '1px solid #4B4B4B';
        inputLogin.style.border = '1px solid #4B4B4B';
        
        inputSenha.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'Informe sua senha pra fazer o login.';
    } else if (verificaSenha.length < 12) {
        inputLogin.style.border = '1px solid #4B4B4B';
        inputLogin.style.border = '1px solid #4B4B4B';
        
        inputSenha.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'Senha inválida, a senha deve ter no minímo 12 caracteres.';
    } else {
        inputLogin.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        textFieldset.style.color = 'red';
        textFieldset.innerText = 'Usuário não encontrado, tente novamente.';
    }
})