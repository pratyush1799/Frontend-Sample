let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');

function validateName() {
    let name = document.getElementById('name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/\s/g)) {
        nameError.innerHTML = 'Enter your full name';
        return false;
    }

    nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #3ded0c;"></i>`;
    return true;
}

function validatePhone() {
    let phone = document.getElementById('phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.length != 10) {
        phoneError.innerHTML = 'Enter full number';
        return false;
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #3ded0c;"></i>`;
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email required';
        return false
    }

    emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #3ded0c;"></i>`;
    return true;
}

function validateMessage() {
    let message = document.getElementById('message').value;
    let required = 30;
    let left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + ' more character required';
        return false;
    }

    messageError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #3ded0c;"></i>`;
    return true;
}

function validate() {
    let finalMessage = document.getElementById('validate');

    if(!validateName() || validatePhone() || !validateEmail() || !validateMessage()) {
        finalMessage.innerHTML = 'Please fix the error';
    }

    setTimeout(function() {
        finalMessage.style.display = 'none';
    }, 3000)
}