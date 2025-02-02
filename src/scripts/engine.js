const state = {
    //views variaveis referentes as imagens.
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#timeleft"),
        score: document.querySelector("#score"),
       // sond: document.querySelector("")
    },
    values: {
        hitPosition: 0,
        curretTime: 60,
        result: 0,
    },
    //actions seta açoes que rodão por tas do codigo.
    actions: {
        timerId: setInterval(randomSquare, 800),
        countDownTimerId: setInterval(countDown, 1000)
    },
};




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
//Função de setar os audios criando uma variavel universal.
function playSound(audioName) {
    let sond = new Audio('./src/audios/${audioName}.m4a')
   // Audio.volume = ;
    Audio.play();
    Audio.pause()
}

function countDown() {
    state.values.curretTime --;
    state.view.timeLeft.textContent = state.values.curretTime;
    

    if (state.values.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
                //alert("Game Over! O seu resultado foi: " + state.values.result);

    }

}





function init() {
    
}
init();



