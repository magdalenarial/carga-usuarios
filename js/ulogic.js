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
function saveUser(){
  var idUser = document.getElementById("idUser").value;
  var name = document.getElementById('inputName').value;
  var birthday = document.getElementById('inputBirthday').value;
  var gender = document.getElementById('inputGender').value;
  var email = document.getElementById('inputEmail').value;

      var fila=`<tr>
      <td>${idUser}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td><button class="btn btn-primary" id="edit">editar</button></td>
      <td><button class="btn btn-primary" id="delete">eliminar</button></td>
    </tr>`;

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tableBody").appendChild(btn);
};
