const resetButton = document.querySelector(".reset-button")

function resetAll(event) {
    localStorage.clear();
}

resetButton.addEventListener("click", resetAll);