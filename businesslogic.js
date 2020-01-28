var userList = [];

function addUserToSystem(name, birthday, gender, email){
  
  var newUser =  { 
    name : name.value,
    birthday : birthday.value,
    gender : gender.value,
    email : email.value,
    };
    console.log(newUser);
    userList.push(newUser);
};

function getUserList(){
  return userList;
}