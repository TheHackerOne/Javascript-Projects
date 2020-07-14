const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const form = document.getElementById('form');

const showError = (target, message)=>{
    const formControl = target.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

const showSuccess = (target)=>{
    const formControl = target.parentElement;
    formControl.className = 'form-control success';
}

const checkRequired = (inputArr)=>{
    inputArr.forEach(input => {
        if(input.value === ''){
            showError(input, 'field is empty');
        }else{
            showSuccess(input);
        }
    });
}

const checkLength = (input, min, max)=>{
    if(input.value.length < min){
        showError(input, `${input.id} must be atleast ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${input.id} must be atmost ${max} characters`)
    }else{
        showSuccess(input);
    }
}

const checkEmail = (input)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, 'email is invalid');
    }
}

const passwordMatch = (input1, input2)=>{
    if(input1.value === '' && input2.value === ''){
        showError(input2, 'field is empty');
    }else if(input1.value === input2.value){
        showSuccess(input2);
    }else{
        showError(input2, 'password does not match');
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password1]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    passwordMatch(password, password1);
})
