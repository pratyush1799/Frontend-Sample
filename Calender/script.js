let today = new Date();

let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();