let eyeIcon = document.getElementById('eyeIcon');
let password = document.getElementById('password')

eyeIcon.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        eyeIcon.src = "/Password Visibility/Images/eye-close.png"
    } else {
        password.type = "password";
        eyeIcon.src = "/Password Visibility/Images/eye-open.png"
    }
}