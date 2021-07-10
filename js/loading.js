const loading = document.querySelector(".loading span");

function loadingDot() {
    loading.innerText = loading.innerText+"."
}

let timer = setInterval(loadingDot, 490);

setTimeout(() => {
    clearInterval(timer); loading.innerText = "Complete!";
}, 1800)