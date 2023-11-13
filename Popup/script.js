let popup = document.getElementById('popUp');
let showPopup = document.getElementById('show');

showPopup.addEventListener('click', () => {
    showPopup.classList.add('btn-clicked');
});

function openPopup()
{
    popup.classList.add('popup-open');
    this.classList.add('btn-clicked');
}

function closePopup()
{
    popup.classList.remove('popup-open');
    showPopup.classList.remove('btn-clicked');
}