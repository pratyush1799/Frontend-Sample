let password = document.querySelector('#password');

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";
let allChars = upperCase + lowerCase + numbers + symbols;
let newPassword = "";

let lenght = 12;

function createPassword()
{
    password.value = "";
    newPassword = "";
    let currentLenght = 4;
    newPassword += upperCase[Math.floor(Math.random() *26)];
    newPassword += lowerCase[Math.floor(Math.random() *26)];
    newPassword += numbers[Math.floor(Math.random() *9)];
    newPassword += upperCase[Math.floor(Math.random() *11)];
    while(currentLenght < lenght) {
        newPassword += allChars[Math.floor(Math.random() * (allChars.length -1))];
        currentLenght++;
    }
    password.value = newPassword
}

function copyPassword()
{
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);
}