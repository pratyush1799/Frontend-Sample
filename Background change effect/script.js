let imgBox = document.querySelector('.img-box');
let imgWrap = document.querySelector('.img-wrap');
let orignalImg = document.getElementById('orignalImg');
let line = document.getElementById("line");

orignalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}