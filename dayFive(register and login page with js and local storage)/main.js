
function register(){
  
    let emailField=document.getElementById('userEmail');
    let passwordField=document.getElementById('userPassword');

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;


    // const data = {
    //     email:emailField,
    //     password:passwordField,
    // }
   


    if(emailField.value.length == 0){
        alert('Please fill in email');

    }else if(passwordField.value.length == 0){
        alert('Please fill in password');

    }else if(emailField.value.length == 0 && passwordField.value.length == 0){
        alert('Please fill in email and password');

    }else if(passwordField.value.length > 8){
        alert('Max of 8');

    }else if(!passwordField.value.match(numbers)){
        alert('please add 1 number');

    }else if(!passwordField.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!passwordField.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{


        localStorage.setItem('email', emailField.value);
        localStorage.setItem('password', passwordField.value);

        // localStorage.setItem("user",JSON.stringify(data));
        alert('Your account has been created');
    }

}


function login(){


    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    // userData=JSON.parse(localStorage.getItem("user"));
   
    // console.log(userData);
    let loginEmail = document.getElementById('email');
    let loginPassword = document.getElementById('password');


    // if(loginEmail.value == userData.email && loginPassword.value == userData.password){

        if(loginEmail.value == storedEmail && loginPassword.value == storedPassword){
        alert('You are logged in.');
        window.open('./welcome.html');
        // location.href="./welcome.html"; same work both
    

    }else{
        alert('Error on login');
    }

   
}
  