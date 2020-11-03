//VARIABLES 
const table = document.querySelector('#table');
const btnSaveUser = document.querySelector('#btnSaveUser');
const usersTable = document.querySelector('#usersTable tbody');
let userList = [];

cargarEventListeners();
function cargarEventListeners() {
    btnSaveUser.addEventListener('click', saveUser);
    
}


//FUNCIONES 
function readUsersInfo(users){
  const infoUser = {
    id: users.getElementById("idUser").value;
    name: document.getElementById('inputName').value;
    birthday: document.getElementById('inputBirthday').value;
    gender: document.getElementById('inputGender').value;
    email: document.getElementById('inputEmail').value;
  } 
  //Crea la lista con el objeto
  userList = [...userList, infoUser];


  usersHTML();
};



function usersHTML() {
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
      <td><button class="btn btn-primary" id="edit">editar</button></td>
      <td><button class="btn btn-primary" id="delete">eliminar</button></td>
    </tr>`;

      // Agrega el HTML del carrito en el tbody
      usersTable.appendChild(row);
  });

}
