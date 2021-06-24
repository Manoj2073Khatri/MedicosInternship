const check1=()=>{
    let emailField=document.getElementById('userEmail');
    let passwordField=document.getElementById('userPassword');
    let btnr=document.getElementById('btnr');

    if(emailField.value !='' && passwordField.value != ''){
       btnr.disabled=false;
    }
    else{
        btnr.disabled=true;
    }
}
const register=()=>{
    let emailField=document.getElementById('userEmail');
    let passwordField=document.getElementById('userPassword');

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;


    if(passwordField.value.length > 8){
        alert('Max of 8 characters');

    }else if(!passwordField.value.match(numbers)){
        alert('please add 1 number');

    }else if(!passwordField.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!passwordField.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{


        localStorage.setItem('email', emailField.value);
        localStorage.setItem('password', passwordField.value);
        alert('Your account has been created');
        window.open('./main-loginPage.html');
        // location.assign(".welcome.html");
        // location.replace="./welcome.html"; 
        // window.location.href="./welcome.html";
        // window.location="./welcome.html";
    }
  

}


const check2=()=>{
    let loginEmail = document.getElementById('email');
    let loginPassword = document.getElementById('password');
    let btnl=document.getElementById('btnl');

    if(loginEmail.value !='' && loginPassword.value != ''){
       btnl.disabled=false;
    }
    else{
        btnl.disabled=true;
    }
}
const login=()=>{

    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

   
    let loginEmail = document.getElementById('email');
    let loginPassword = document.getElementById('password');

    if(loginEmail.value == storedEmail && loginPassword.value == storedPassword){
   
    alert('You are logged in.');
    window.open('./welcome.html');
    // location.assign(".welcome.html");
    // location.replace="./welcome.html"; 
    // window.location.href="./welcome.html";
    // window.location="./welcome.html";
    

    }else{
        alert('Error ,Enter correct credential to login or register first');
    }

   
}
  