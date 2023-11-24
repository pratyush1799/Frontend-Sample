let button = document.getElementsByClassName('option');
let selectText = document.getElementById('selectText');
let selectOptions = document.getElementById('selectOptions');
let selectBox = document.getElementById('selectBox');
let arrowIcon = document.getElementById('arrow');

selectBox.onclick = function() {
    selectOptions.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}

for(option of button)
{
    option.onclick = function(e) {
        selectText.innerHTML = e.target.innerText;
        selectOptions.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}
