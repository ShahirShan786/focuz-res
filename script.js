
const Name = document.getElementById('Name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const form = document.getElementById('form');

const Name_error = document.getElementById('Name_error');
const email_error = document.getElementById('email_error');
form.addEventListener('submit' ,(e)=>{

    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(Name.value === "" || Name.value == null){
        e.preventDefault();
        Name_error.innerHTML = "Name is resquired";


    }else{
        Name_error.innerHTML="";
    }

    if(!email.value.match(emailcheck)){
        e.preventDefault();
        email_error.innerHTML = "Valid e-mail is required";

    }

});

