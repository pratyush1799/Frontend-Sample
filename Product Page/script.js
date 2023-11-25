let btn = document.getElementsByClassName('btn');
let img = document.getElementById('productImg');

function active() {
    
}

btn[0].onclick = function() {
    productImg.src = '/Product Page/images/image1.png';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}
btn[1].onclick = function() {
    productImg.src = '/Product Page/images/image2.png';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}
btn[2].onclick = function() {
    productImg.src = '/Product Page/images/image3.png';
    for(bt of btn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}