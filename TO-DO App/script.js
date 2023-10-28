let input = document.querySelector('#add-task');
let listContainer = document.querySelector('ul');
let items = document.querySelector('#list');
const data = [];

function addTask()
{
    if(input.value === '') {
        alert("Please enter something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        items.append(li);

        let closeIcon = document.createElement("span");
        closeIcon.innerHTML = "\u00d7";
        li.appendChild(closeIcon);
    }

    saveData();
    input.value = "";
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData() 
{
    localStorage.setItem("data", list.innerHTML);
}

function showData()
{
    list.innerHTML = localStorage.getItem("data");
}

showData();