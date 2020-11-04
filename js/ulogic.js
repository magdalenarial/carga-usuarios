//VARIABLES 
const table = document.querySelector('#table');
const btnSaveUser = document.querySelector('#btnSaveUser');
const usersTable = document.querySelector('#usersTable tbody');
const form = document.querySelector('#form');
let userList = [];

cargarEventListeners();
function cargarEventListeners() {
    btnSaveUser.addEventListener('click', readUsersInfo);
    
    //Elimina cursos del carrito
    table.addEventListener('click', deleteUser);

    //Edita el usuario
    table.addEventListener('click', editUser);

// Muestra los cursos de Local Storage
       document.addEventListener('DOMContentLoaded', () => {
        userList = JSON.parse( localStorage.getItem('userList') ) || [];

        drawUsersList();
});

}

//FUNCIONES 
function readUsersInfo(users){
  const infoUser = {
    id: document.getElementById("idUser").value,
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

  // Recorre el carrito y genera el HTML
  userList.forEach( users => {
      const { id, name, birthday, gender, email } = users;
      const row = document.createElement('tr');
      row.innerHTML =`<tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td><button class="btn btn-primary editar-curso" data-id="${id}">editar</button></td>
      <td><button class="btn btn-primary borrar-curso" data-id="${id}">eliminar</button></td>
    </tr>`;

      // Agrega el HTML del carrito en el tbody
      usersTable.appendChild(row);
  });
      //Agregar la lista al LocalStorage
      sincronizarStorage();
}


//Agrega los usuarios actuales a Localstorage
function sincronizarStorage() {
  localStorage.setItem('userList', JSON.stringify(userList));
}


//Elimina el usuario 
function deleteUser(e){
  e.preventDefault();
  
  if(e.target.classList.contains('borrar-curso')) {
      const usersId = e.target.getAttribute('data-id');


      //elimina el usuario del arreglo de userList por el data-id
      userList = userList.filter( users => users.id !== usersId);

     drawUsersList();
  }
}


//Edita al usuario
function editUser(e){
  e.preventDefault();
  console.log('editando usuario')
}


// Limpiar el HTML 
function cleanHTML() {
  while( usersTable.firstChild) {
    usersTable.removeChild(usersTable.firstChild);
  }
}
