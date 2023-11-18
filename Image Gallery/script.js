let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');
let scrollContainer = document.querySelector('.gallery');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft = evt.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth';
})

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900
})