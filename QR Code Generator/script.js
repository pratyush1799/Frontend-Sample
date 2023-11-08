let img_box = document.querySelector('img-box');
let qr_img = document.querySelector('#img');
let input = document.querySelector('#text');
let warning = document.querySelector('#warning');

function generateQR()
{
    if(input.value.length > 0) {
        qr_img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
        qr_img.style.display = 'block';
        warning.style.display = 'none';
        input.style.border = '1px solid blue';
    } else {
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
        qr_img.style.display = 'none';
        warning.style.display = 'block';
        input.style.border = '1px solid red';
    }
} 