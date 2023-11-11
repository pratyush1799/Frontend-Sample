let toastBox = document.getElementById('toast-box');
let successMessage = `<i class="fa-solid fa-circle-check fa-beat" style="color: #1dd11a; margin-right: 15px;"></i> Successfully completed`;
let errorMessage = `<i class="fa-solid fa-circle-xmark fa-beat" style="color: #ff1900; margin-right: 15px;"></i>Error Occured`;
let invalidMessage = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #f69f09; margin-right: 15px;"></i> Invalid input, Please check again`;

function showMessage(message)
{
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if(message.includes('Error')) {
        toast.classList.add('error');
    }

    if(message.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}