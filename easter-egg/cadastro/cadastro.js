const imgNavBar = document.querySelector('img#icon-nav');

imgNavBar.addEventListener('click', function() {
    alert('Sério mesmo? é só uma decoração kkkkk.');
});

const textFieldset = document.querySelector('legend');
const inputNome = document.querySelector('input#nome');
const inputSobrenome = document.querySelector('input#sobrenome');
const inputEmail = document.querySelector('input#email');
const inputEmailVerifica = document.querySelector('input#email-verifica');
const inputSenha = document.querySelector('input#senha');
const buttonSubmit = document.querySelector('button');

const verificaEmails = ['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', '@icloud.com'];

buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    let verificaNome = inputNome.value.trim();
    let verificaSobrenome = inputSobrenome.value.trim();
    let verificaEmail = inputEmail.value.trim();
    let verificaEmailVerifica = inputEmailVerifica.value.trim();
    let verificaSenha = inputSenha.value.trim();

    if (verificaNome === '') {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';
        
        inputNome.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O campo nome está vazio.';
    } else if (verificaNome.length < 3) {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputNome.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O nome deve ter no minímo 3 caracteres.';
    } else if (verificaSobrenome === '') {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputSobrenome.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O campo sobrenome está vazio.';
    } else if (verificaSobrenome.length < 2) {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputSobrenome.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O sobrenome deve ter no minímo 2 caracteres.';
    } else if (verificaEmail === '') {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputEmail.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O campo e-mail está vazio.';
    } else if (!verificaEmail.includes(verificaEmails[0]) && !verificaEmail.includes(verificaEmails[1]) && !verificaEmail.includes(verificaEmails[2]) && !verificaEmail.includes(verificaEmails[3]) && !verificaEmail.includes(verificaEmails[4])) {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputEmail.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'E-mail inválido, informe o e-mail corretamente.';
    } else if (verificaEmailVerifica === '') {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputEmailVerifica.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O campo verificar e-mail está vazio.';
    } else if (verificaSenha === '') {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputSenha.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'O campo senha está vazio.';
    } else if (verificaSenha.length < 12) {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        inputSenha.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'A senha deve ter no minímo 12 caracteres.';
    } else if (verificaEmail != verificaEmailVerifica) {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';
        
        inputEmail.style.border = '1px solid red';
        inputEmailVerifica.style.border = '1px solid red';
        textFieldset.style.color = 'red';
        textFieldset.innerText = 'Os e-mails não são iguais.';
    } else {
        inputNome.style.border = '1px solid #4B4B4B';
        inputSobrenome.style.border = '1px solid #4B4B4B';
        inputEmail.style.border = '1px solid #4B4B4B';
        inputEmailVerifica.style.border = '1px solid #4B4B4B';
        inputSenha.style.border = '1px solid #4B4B4B';

        textFieldset.style.color = 'green';
        textFieldset.innerText = 'Conta criada!';
        inputNome.value = '';
        inputSobrenome.value = '';
        inputEmail.value = '';
        inputEmailVerifica.value = '';
        inputSenha.value = '';
    }
})