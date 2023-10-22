
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0,-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         //checkEmpty(string, e);
//         if(e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         } else if(e.target.innerHTML == 'AC') {
//             string = "";
//             input.value = string;
//         } else if(e.target.innerHTML == 'DEL') {
//             string = string.slice(0,-1);
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })

// function checkEmpty(string, e) {
//     if(string.trim() == '' && (e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '%')) {
//         string = '';
//         input.value = string;
//     }
// }

// buttons.addEventListener('click', () => {
//     if(buttons.innerHTML == '=') {
//         string = eval(string);
//         input.value = string;
//     }
//     else if(buttons.innerHTML == 'AC') {
//         string = '';
//         input.value = string;
//     }
//     else if(buttons.innerHTML == 'DEL') {
//         string = string.slice(0,-1);
//         input.value = string;
//     }
//     else {
//         string += buttons.innerHTML;
//         input.value = string;
//     }
// })