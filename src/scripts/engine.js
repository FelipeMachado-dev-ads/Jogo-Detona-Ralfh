const state = {
    //views variaveis referentes as imagens.
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#timeleft"),
        score: document.querySelector("#score"),

    },
    values: {
        hitPosition: 0,
        currentTime: 60,
        result: 0,
    },
    //actions seta açoes que rodão por tas do codigo.
    actions: {
        timerId: setInterval(randomSquare, 900),
        countDownTimerId: setInterval(countDown, 1000),

    },
};


function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
        resetGame();

    }
}
function resetGame() {
    state.values.currentTime = 60;
    state.values.result = 0;
    state.values.hitPosition = null;

    state.view.timeLeft.textContent = state.values.currentTime;
    state.view.score.textContent = state.values.result;

    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    state.actions.countDownTimerId = setInterval(countDown, 1000);
    state.actions.timerId = setInterval(randomSquare, 900);
    playSound("sond-gamer");
}

//Função de setar os audios criando uma variavel universal.
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.1; // Audio.volume = ;
    audio.play();

}

//Função de randomizar a janela onde o Ralfh irá aparecer.
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    });
    let randomNumber = Math.floor(Math.random() * 20);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;

}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });
}

function init() {
    addListenerHitBox();
    playSound("sond-gamer");
}
init();



