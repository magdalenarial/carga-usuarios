function addUserToSystem(name, birthday, gender, email){
  userList = getUserList()
  var newUser =  { 
    name : name.value,
    birthday : birthday.value,
    gender : gender.value,
    email : email.value,
    };
    userList.push(newUser)
    saveUserList(userList)
  };

function getUserList(){
  try{
    return JSON.parse(localStorage.getItem("usuarios"));
  }
  catch{
    return []
  }
}

function saveUserList(arrayToSave){
  localStorage.setItem('usuarios', JSON.stringify(arrayToSave))
}