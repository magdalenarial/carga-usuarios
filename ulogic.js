document.getElementById('btnSaveUser').addEventListener('click', saveUser);
drawUsersTable();

function saveUser(){
    var name = document.getElementById('inputName');
    birthday = document.getElementById('inputBirthday');
    gender = document.getElementById('inputGender');
    email = document.getElementById('inputEmail');

    addUserToSystem(name, birthday, gender, email);
    drawUsersTable();
};

function drawUsersTable(){
    var list = getUserList(),
    tbody = document.getElementById('usersTable tbody');
    
    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(1),
            birthdayCell = row.insertCell(2),
            genderCell = row.insertCell(3),
            emailCell = row.insertCell(4),

        nameCell.innerHTML = list[i].name;
        birthdayCell.innerHTML = list[i].birthday;
        genderCell.innerHTML = list[i].gender;
        emailCell.innerHTML = list[i].email;

        tbody.appendChild(row);
    };
  };