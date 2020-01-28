document.getElementById('btnSaveUser').addEventListener('click', saveUser);

function saveUser(){
    var name = document.getElementById('inputName');
    birthday = document.getElementById('inputBirthday');
    gender = document.getElementById('inputGender');
    email = document.getElementById('inputEmail');

    addUserToSystem(name, birthday, gender, email)
};