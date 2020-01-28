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
    tbody = document.getElementsByTagName('tbody')[0]
    
    tbody.innerHTML = ''

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i)
        let index = row.insertCell()
        let nameCell = row.insertCell()
        let birthdayCell = row.insertCell()
        let genderCell = row.insertCell()
        let emailCell = row.insertCell()
        // 2 columnas mas, una de edit y otra de delete. Ademas a esos botones en el onclick le deberias agregar la funcion que edite o borre segun corresponda
        // y ademas tenes que pasarle el indice que ocupa ese objeto en el array, para asi poder editarlo en el mismo o borrarlo. 
        // Recomendaciones: hacer una funcion que limpie el modal y asi reutilizarlo.
        // Pensar cual es la diferencia entre editar y crear y analizar como se podria realizar en una sola funcion reutilizando codigo
        // Para abrir el modal analizar el boton que ya lo hace actualmente con la logica de bootstrap
        // 

        index.innerHTML = i+1
        nameCell.innerHTML = list[i].name
        birthdayCell.innerHTML = list[i].birthday
        genderCell.innerHTML = list[i].gender
        emailCell.innerHTML = list[i].email

        tbody.appendChild(row)
    };
  };