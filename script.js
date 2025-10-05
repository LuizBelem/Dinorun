const horse = document.querySelector(".horse");
const pipe = document.querySelector(".pipe");

const jump = () => {
        horse.classList.add("jump");

        setTimeout(() => {

            horse.classList.remove("jump");
            
        }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const horsePosition = +window.getComputedStyle(horse).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && horsePosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        horse.style.animation = "none";
        horse.style.bottom = `${horsePosition}px`;

        horse.src = "/imgs/morto.png";

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);