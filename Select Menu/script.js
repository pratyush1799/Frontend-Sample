let button = document.getElementsByClassName('option');
let selectText = document.getElementById('selectText');
let selectOptions = document.getElementById('selectOptions');
let selectBox = document.getElementById('selectBox');
let arrowIcon = document.getElementById('arrow');

selectBox.onclick = function() {
    selectOptions.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}


let option = Array.from(button);
for(opt of option)
{
    opt.onclick = function() {
        selectText.innerHTML = opt.innerText;
        selectOptions.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}
