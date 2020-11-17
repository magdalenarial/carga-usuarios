//VARIABLES 
const table = document.querySelector('#table');
const btnSaveUser = document.querySelector('#btnSaveUser');
const usersTable = document.querySelector('#usersTable tbody');
const form = document.querySelector('#form');
let userList = [];


//Eventlisteners:
cargarEventListeners();
function cargarEventListeners() {
  // Muestra los usuarios de Local Storage
  document.addEventListener('DOMContentLoaded', () => {
    userList = JSON.parse( localStorage.getItem('userList') ) || [];
    
    drawUsersList();
  });

}

//FUNCIONES 
function readUsersInfo(users){
  const infoUser = {
    dni: document.getElementById("inputDni").value,
    name: document.getElementById('inputName').value,
    birthday: document.getElementById('inputBirthday').value,
    gender: document.getElementById('inputGender').value,
    email: document.getElementById('inputEmail').value,
  } 
  //Crea la lista con el objeto
  userList = [...userList, infoUser];

  drawUsersList();

   // Reinicia el formulario
  form.reset();
};


function drawUsersList() {

  cleanHTML();

  // Recorre el la lista de usuario y genera el HTML
  userList.forEach( users => {
      const { dni, name, birthday, gender, email } = users;
      const row = document.createElement('tr');
      row.innerHTML =`<tr>
      <td>${dni}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td><button class="btn btn-primary edit-user" data-toggle="modal" data-target="#exampleModal" data-id="${dni}"><i class="far fa-edit"></i></button></td>
      <td><button class="btn btn-danger delete-user" data-id="${dni}"><i class="fas fa-trash-alt"></i></button></td>
    </tr>`;

      // Agrega el HTML del usuario en el tbody
      usersTable.appendChild(row);
  });

  //Agregar la lista al LocalStorage
    sincronizarStorage();
    btnSaveUser.addEventListener('click', readUsersInfo);
    if (userList != []){
  
      //Elimina usuarios del carrito
      document.querySelectorAll('.delete-user').forEach(deleteButton =>
        deleteButton.addEventListener('click', deleteUser)
      );
      
    
      //Edita el usuario
      document.querySelectorAll('.edit-user').forEach(editButton =>
        editButton.addEventListener('click', editUser)
      );
    }
}


//Agrega los usuarios actuales a Localstorage
function sincronizarStorage() {
  localStorage.setItem('userList', JSON.stringify(userList));
}


//Elimina el usuario 
function deleteUser(e){
  e.preventDefault();
  if(e.target.classList.contains('delete-user')) {
      const usersId = e.target.getAttribute('data-id');


      //elimina el usuario del arreglo de userList por el data-id
      userList = userList.filter( users => users.dni !== usersId);
    
     drawUsersList();
  }
}


//Edita al usuario
function editUser(e){
  e.preventDefault();
  document.querySelector('#btnSaveUser').removeEventListener('click', readUsersInfo);
  document.querySelector('#btnSaveUser').addEventListener('click', updateUsers);
  if(e.target.classList.contains('edit-user')) {
      const userId = e.target.getAttribute('data-id');

        let user = userList.find(x => x.dni === userId);
        document.getElementById('inputDni').value = user.dni;
        document.getElementById('inputName').value = user.name;
        document.getElementById('inputBirthday').value = user.birthday;
        document.getElementById('inputGender').value = user.gender;
        document.getElementById('inputEmail').value = user.email;
  }
}

function updateUsers() {
  const indexUser = userList.findIndex(x => x.dni === document.getElementById("inputDni").value);
  userList[indexUser].name = document.getElementById('inputName').value;
  userList[indexUser].birthday = document.getElementById('inputBirthday').value;
  userList[indexUser].gender = document.getElementById('inputGender').value;
  userList[indexUser].email = document.getElementById('inputEmail').value;

  document.querySelector('#btnSaveUser').removeEventListener('click', updateUsers);
  document.querySelector('#btnSaveUser').addEventListener('click', readUsersInfo);

  drawUsersList();
  form.reset();
}

// Limpiar el HTML 
function cleanHTML() {
  while(usersTable.firstChild) {
    usersTable.removeChild(usersTable.firstChild);
  }
}

