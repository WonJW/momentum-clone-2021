const toDoListSubmit = document.querySelector(".to-do-list")
const toDoListInput = document.querySelector(".to-do-list__input");
const toDoListLi = document.querySelector(".to-do-list__li");
const toDoCounterYet = document.querySelector(".to-do-counter__yet")
const toDoCounterDone = document.querySelector(".to-do-counter__done")
const doneToDoListLi = document.querySelector(".to-do-done-list__li")

const TODOS_KEY = "todos"
const DONETODOS_KEY = "donetodos"

let toDos = [];
let doneToDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    addDoneToDo(event)
    const li = event.target.parentElement;
    const doneObject = {text : li.querySelector("span").innerText}
    doneToDos.push(doneObject)
    localStorage.setItem(DONETODOS_KEY, JSON.stringify(doneToDos))
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
}

const donedToDos = localStorage.getItem(DONETODOS_KEY)

if (donedToDos !== null) {
    const parsedDoneToDos = JSON.parse(donedToDos);
    doneToDos = parsedDoneToDos;
    parsedDoneToDos.forEach(paintDoneToDo)
}

toDoCounterYet.innerText = `Yet : ${toDos.length}`
toDoCounterDone.innerText = `Done : ${doneToDos.length}`



function paintDoneToDo(newDoneToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newDoneToDo.text;
    li.appendChild(span);
    doneToDoListLi.appendChild(li);
}

function addDoneToDo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    const newToDo = li.querySelector("span").innerText
    const newToDoObject = {
        text: newToDo,
    }
    paintDoneToDo(newToDoObject);
}

const doneListOpenButton = document.querySelector(".to-do-done-list__button")
const doneListCloseButton = document.querySelector(".to-do-done-list__li__window-btn")

function handleDoneListOpenButton(event) {
    event.preventDefault()
    doneToDoListLi.classList.remove("window-close")
    doneToDoListLi.classList.add("window-open")
}
function handleDoneListCloseButton(event) {
    event.preventDefault()
    doneToDoListLi.classList.remove("window-open")
    doneToDoListLi.classList.add("window-close")
}


doneListOpenButton.addEventListener("click", handleDoneListOpenButton)
doneListCloseButton.addEventListener("click", handleDoneListCloseButton)