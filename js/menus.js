const bStart = document.querySelector('#b-start');
const bHowToPlay = document.querySelector('#b-how-to-play');
const bEsc = document.querySelector('#b-esc');
const bRules = document.querySelector('#b-rules');
const bScores = document.querySelector('#b-scores');
const bSounds = document.querySelector('#b-sounds');

const btsMenu = document.querySelector('.wrapper-menus');
const btsbHowToPlay = document.querySelector('.wrapper-how-to-play-menu');
const bGo = document.querySelector('.b-go');

const settingsPopUp = document.querySelector('#settings');
const popUp = document.querySelector('.pop-up');

bStart.onclick = () => {
    bStart.disabled = true
    audioClick.play();
    if (rulesOut.hidden == false) {
        rulesOut.hidden = true;
        gameField.hidden = false;
    }

    let clean;
    if (deck.length > 0) {
        clean = confirm('Все достижения будут сброшены');
    } if (clean == false) {
        return
    } else {
        userScore = 0;
        compScore = 0;
        golden = false;
        showScores = true;
        dealCardsQn = 2; // колво раздаваемых карт
        dealSpeed = 290; // скорость раздачи карт
        settings()
    }
};

function settings() {
    audioClick.play();

    if (settingsPopUp.hidden == true) {
        settingsPopUp.hidden = false;
        gameField.hidden = true;
    }
}

bGo.onclick = () => {
    set();

    setTimeout(startTimer, dealSpeed * 5)

    setTimeout(shuffle, 5);

    settingsPopUp.hidden = true;

    setTimeout(showGameField, 10)
    function showGameField() { gameField.hidden = false; }
}

bHowToPlay.onclick = () => {
    audioClick.play();

    btsMenu.style.display = 'none';
    btsbHowToPlay.style.display = 'flex'

    if (howToPlayOut.hidden == true) {
        howToPlayOut.hidden = false;
        gameField.hidden = true;
    }
}

bEsc.onclick = () => {
    audioClick.play();

    if (scoresOut.hidden == false || rulesOut.hidden == false) {
        rulesOut.hidden = true;
        scoresOut.hidden = true;
        howToPlayOut.hidden = false;
    }

    else if (howToPlayOut.hidden == false) {
        howToPlayOut.hidden = true;
        gameField.hidden = false;
        btsMenu.style.display = 'flex';
        btsbHowToPlay.style.display = 'none'

    }
}

bRules.onclick = () => {
    if (gameField.hidden = true) {
        audioClick.play();
        howToPlayOut.hidden = true;
        scoresOut.hidden = true;
        rulesOut.hidden = false;

    }
};

bScores.onclick = () => {
    if (gameField.hidden = true) {
        audioClick.play();
        howToPlayOut.hidden = true;
        rulesOut.hidden = true;
        scoresOut.hidden = false;
    }
};

bSounds.onclick = () => {
    audioClick.currentTime = 0; // сбрасывает воспроизведение на 0. стоп
    audioClick.play();

    let audios = document.querySelectorAll('audio');

    if (audioClick.volume == 1.0) {
        bSounds.textContent = 'Звук: выкл';
        for (let item of audios) {
            item.volume = 0.0;
        }
    }
    else if (audioClick.volume == 0.0) {
        bSounds.textContent = 'Звук: 25%';
        for (let item of audios) {
            item.volume = 0.25;
        }
    }
    else if (audioClick.volume == 0.25) {
        bSounds.textContent = 'Звук: 50%';
        for (let item of audios) {
            item.volume = 0.5;
        }
    }
    else if (audioClick.volume == 0.5) {
        bSounds.textContent = 'Звук: 75%';
        for (let item of audios) {
            item.volume = 0.75;
        }
    }
    else if (audioClick.volume == 0.75) {
        bSounds.textContent = 'Звук: 100%';
        for (let item of audios) {
            item.volume = 1.0;
        }
    }
}