const login = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form__input")
const usernameText = document.querySelector(".username-text")

const HIDDEN_CLASSNAME_KEY = "hidden"
const USERNAME_KEY = "username"

function loginSubmit(event) {
    event.preventDefault();
    login.classList.add(HIDDEN_CLASSNAME_KEY);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    usernameText.innerText = `Hello ${username}`;
    usernameText.classList.remove(HIDDEN_CLASSNAME_KEY);
    usernameText.classList.add("is-in")
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    login.classList.remove(HIDDEN_CLASSNAME_KEY);
    login.addEventListener("submit", loginSubmit) ;
} else {
    paintGreetings(savedUsername);
}



