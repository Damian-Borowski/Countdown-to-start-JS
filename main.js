const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const time = document.querySelector('.time div');
let actualTime = 0;
let active = false;
let idI;

timer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "pauza";
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = "start";
        clearInterval(idI);
    }
}

const start = () => {
    actualTime++;
    time.textContent = (actualTime / 100).toFixed(2);
}

reset = () => {
    actualTime = 0;
    time.textContent = "---";
    active = false;
    btnStart.textContent = "Start";
    clearInterval(idI);
}


btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', reset);