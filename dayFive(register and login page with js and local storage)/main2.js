// register

let info=[];

const addInfo=(ev)=>{
    ev.preventDefault();
    let emailField=document.getElementById('userEmail');
    let passwordField=document.getElementById('userPassword');
    
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    
    
    const data = {
        email:document.getElementById('userEmail').value,
        password:document.getElementById('userPassword').value,
    }
    
    info.push(data);
    
    
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
    
        localStorage.setItem("user",JSON.stringify(info));
        alert('Your account has been created');
    }
}
  
   document.addEventListener('DOMContentLoaded', ()=>{
   document.getElementById('btnr').addEventListener('click', addInfo);
});

// login

const login=()=>{
   

    let userData=[];
    userData=JSON.parse(localStorage.getItem("user"));

    let loginEmail = document.getElementById('email');
    let loginPassword = document.getElementById('password');
    
    console.log(userData);
    for(let i=0;i<userData.length;i++){

        if(loginEmail.value == userData[i].email && loginPassword.value == userData[i].password){
    
            alert('You are logged in.');
            window.open('./welcome.html');
            // location.replace="./welcome.html";
        }
    }
    
  
        alert('Error on login');
    
}

    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnl').addEventListener('click', login());
});