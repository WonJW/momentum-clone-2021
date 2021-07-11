const toDoListSubmit = document.querySelector(".to-do-list")
const toDoListInput = document.querySelector(".to-do-list__input");
const toDoListLi = document.querySelector(".to-do-list__li");
const toDoCounterYet = document.querySelector(".to-do-counter__yet")
const toDoCounterDone = document.querySelector(".to-do-counter__done")

const TODOS_KEY = "todos"

let toDos = [];
let doneToDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    doneToDos.push(li.querySelector("span").innerText)
    localStorage.setItem("donetodo", JSON.stringify(doneToDos))
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
    saveToDos()
    toDoCounterYet.innerText = `Yet : ${toDos.length}`
    toDoCounterDone.innerText = `Done : ${doneToDos.length}`
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
    toDoCounterYet.innerText = `Yet : ${toDos.length}`
    saveToDos();
}

toDoListSubmit.addEventListener("submit", addToDo)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    toDoCounterYet.innerText = `Yet : ${toDos.length}`
}

if (doneToDos !== null) {
    toDoCounterDone.innerText = `Done : ${doneToDos.length}`
}