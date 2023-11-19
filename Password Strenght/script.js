let pass = document.getElementById('password');
let str = document.getElementById('strenght');
let msg = document.getElementById('message');
let arrow = document.getElementById('arrow');

pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }

    if(pass.value.length < 4) {
        pass.style.borderColor = 'red';
        msg.style.color = 'red';
        arrow.style.borderColor = 'red';
        str.innerHTML = 'weak';
    }
    else if(pass.value.length >= 4 && pass.value.length < 8) {
        pass.style.borderColor = 'orange';
        msg.style.color = 'orange';
        arrow.style.borderColor = 'orange';
        str.innerHTML = 'medium';
    }
    else if(pass.value.length >= 8) {
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
        arrow.style.borderColor = 'green';
        str.innerHTML = 'strong';
    }
})