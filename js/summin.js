let showScores = true; // показывать очки игрока во время игры
let aceEqualsOne = false; // туз = 1
let userAceEqualsOne = true; // игрок не заменил туз на 1 очко
let compAceEqualsOne = true; // комп не заменил туз на 1 очко
let golden = false; // золотое очко
let userAces = -4; // количество тузов у игрока
let compAces = -4; // количество тузов у компа

// суммируем очки игрока и выводим карты
function userSummin() {
    setTimeout(showFace, dealSpeed);
    userCardsQn += 1;

    userGetScore = cardOut();

    // туз = 1
    if (userAceEqualsOne == true && aceEqualsOne == true) {
        if (userSum > 14 && userSum < 20 && userCardsQn > 1) {
            if (userGetScore == 11) {
                userSum -= 10;
                userAceEqualsOne = false;
            }
        }
    }

    // 2 туза -выигрыш
    if (userGetScore == 11) {
        userAces += 1;
        if (userSum > 22) {
            userAces = 0;
        }
    }

    userSum += userGetScore; // получаем очки

    userCards.innerHTML += cardFace // выводим карту

    // показывать очки игрока
    if (showScores == true) {
        setTimeout(showMyScores, dealSpeed);
    }

    function showMyScores() {
        userStatus.textContent = `У тебя :${userSum}` // выводим очки игрока
    }

    // но не очко обычно губит...
    if (userSum == 11) {
        quote = 1;
    }
    if (quote == 1 && userSum > 11) {
        if (userSum == 22 && userAces < 2) {
            quote += 1;
        } else {
            quote = 0;
        }
    }
}

// суммируем очки компа запоминаем карту и выводим рубашку
function compSummin() {
    setTimeout(showBack, dealSpeed)
    compCardsQn += 1;

    compGetScore = cardOut();

    // туз = 1
    if (compAceEqualsOne == true && aceEqualsOne == true) {
        if (compSum > 14 && compSum < 20 && compCardsQn > 1) {
            if (compGetScore == 11) {
                compSum -= 10;
                compAceEqualsOne = false;
            }
        }
    }

    // 2 туза -выигрыш
    if (compGetScore == 11) {
        compAces += 1;
        if (compSum > 22) {
            compAces = 0;
        }
    }

    compSum += compGetScore; // получаем очки

    compTemp += cardFace;
    compCards.innerHTML += cardBack;

    // показываем кол-во доборов
    if (compCardsQn == dealCardsQn + 1) {
        compStatus.textContent = 'Комп добрал: 1';
    } else if (compCardsQn > dealCardsQn + 1) {
        compStatus.textContent = `Комп добрал: ${compCardsQn - dealCardsQn}`;
    } else {

    }
}

// выводим карту и убираем с колоды
function cardOut() {
    let lastCard = (deck[deck.length - 1]);

    cardFace = `<div class="card-area">
                <img class="face-none"
                src="images/${lastCard.name}.png"
                alt="${lastCard.rank} ${lastCard.suit}" />
                </div>`;

    cardBack = `<div class="card-area">
                <img class="back-none"
                src="images/back.png"
                alt="Рубашка" />
                </div>`;

    return deck.pop().rate
}

function showFace() {
    dealOrder += 1;

    if (dealOrder == 1) {
        audioPut1.play();
    }
    else if (dealOrder % 2 == 0) {
        audioPut2.play();
    } else {
        audioPut1.play();
    }

    document.querySelector('.face-none').className = 'img';
}

function showBack() {
    dealOrder += 1;

    if (dealOrder == 4) {
        audioPut3.play();
    }
    else if (dealOrder % 2 == 0) {
        audioPut2.play();
    } else {
        audioPut1.play();
    }

    document.querySelector('.back-none').className = 'back';
}

function showCompCards() {
    if (document.querySelector('.face-none').className != null) {
        document.querySelector('.face-none').className = 'img';
    }
}