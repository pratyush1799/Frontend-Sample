let createBtn = document.querySelector('.btn');
let notesContainer = document.querySelector('.notes-container');
let notes = document.querySelector('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes();

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("IMG");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/Notes App/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})