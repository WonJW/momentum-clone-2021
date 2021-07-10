const toDoListSubmit = document.querySelector(".to-do-list")
const toDoListInput = document.querySelector(".to-do-list__input");
const toDoListLi = document.querySelector(".to-do-list__li");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    li.classList.add("is-in");
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoListLi.appendChild(li);
}

function addToDo(event) {
    event.preventDefault();
    const newToDo = toDoListInput.value;
    toDoListInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoListSubmit.addEventListener("submit", addToDo)

const savedToDos = localStorage.getItem("todos")

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}