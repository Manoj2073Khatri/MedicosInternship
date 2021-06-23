
const register=()=>{
    let emailField=document.getElementById('userEmail');
    let passwordField=document.getElementById('userPassword');
    let bt=document.getElementById('btnr');

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;



    // if(emailField.value!='' && passwordField.value != 0)
    // {
    //     bt.disabled=false;
    // }
    // else{
    //     bt.disabled=true;
       
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
        alert('Your account has been created');
    }
  

}

const login=()=>{



   

    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

   
    let loginEmail = document.getElementById('email');
    let loginPassword = document.getElementById('password');


    // if(loginPassword.value!='')
    // {
    //     loginPassword.disabled=false;
    // }
    // else{
    //     loginPassword.disabled=true;
    // }
    if(loginEmail.value == storedEmail && loginPassword.value == storedPassword){
   
    alert('You are logged in.');
    window.open('./welcome.html');
    // location.assign(".welcome.html");
    // location.replace="./welcome.html"; 
    // window.location.href="welcome.html";
    

    }else{
        alert('Error ,Enter correct credential to login or register first');
    }

   
}
  