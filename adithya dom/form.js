var user = document.getElementById("user");
var password = document.getElementById("password");
var button= document.getElementById("button")
  

function validate(){
    if(user.value.trim()==""||password.value==""){
        alert("field cannot be empty");
        user.style.border='2px solid red';
        password.style.border='2px solid red';
        return false

    } 
    else if ( password.value.length<5){
        alert("password length should be more than 5");
        return false;
    }
    else{
        return true
    }
}