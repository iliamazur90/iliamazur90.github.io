let userSum = 0; // суммируем очки игрока
let userCardsQn = 0; // кол-во набраных карт игрока
let compSum = 0; // суммируем очки компа
let compCardsQn = 0; // кол-во набраных карт компа
let compTemp = ''; // карты комп

let round = 0; // круги
let quote = 0; // цитата

// clean field, result out & create new deck
function shuffle() {
  deck = [];
  dealOrder = 0;
  bTake.textContent = '';
  bPass.textContent = '';
  bTake.disabled = true; // блок кнопку
  bPass.disabled = true; // блок кнопку
  bTake.style.backgroundColor = GRAY;
  bPass.style.backgroundColor = GRAY;
  result.textContent = `${userScore} : ${compScore}`;
  userStatus.textContent = '';
  userCards.textContent = '';
  compStatus.textContent = '';
  compCards.textContent = '';
  userAceEqualsOne = true;
  compAceEqualsOne = true;
  userCardsQn = 0;
  compCardsQn = 0;
  round += 1;
  quote = 0;
  userSum = 0;
  compSum = 0;
  compTemp = '';

  if (golden == true) {
    userAces = 0;
    compAces = 0;
  } else {
    userAces = -4;
    compAces = -4;
  }

  deckCreate();
}

function dealCards() {
  // deal cards for player
  for (u = 0; u < dealCardsQn; u++) {
    setTimeout(userSummin, (1 + u) * dealSpeed)
  }

  // deal cards for comp
  for (c = 0; c < dealCardsQn; c++) {
    setTimeout(compSummin, ((1 + c) * dealSpeed) + (dealSpeed * 2))
  }

  setTimeout(unlockButtons, dealSpeed * 5.2)
}

function unlockButtons() {
  bTake.textContent = 'Ещё';
  bPass.textContent = 'Пас';
  bTake.disabled = false; // кнопка доступна
  bPass.disabled = false; // кнопка доступна
  bTake.style.backgroundColor = BROWN;
  bPass.style.backgroundColor = BROWN;
  document.querySelector('#b-start').disabled = false;

}

// BUTTON 'Ещё'
bTake.onclick = function take() {
  if (userCardsQn > 0 && userCardsQn <= 5) {
    userSummin();
  }

  if (userCardsQn == 5) {
    bTake.textContent = '';
    bTake.disabled = true; // блок кнопку
    bTake.style.backgroundColor = GRAY;
  }
};

// BUTTON 'Пас'
bPass.onclick = function pass() {
  // если 2 туза у игрока
  if (userAces == 2 && userSum == 22 || userSum == 21) {
    userGetTwoAces()
    return
  }

  // if comp ready - open
  if (compStatus.textContent != '' || compAces > 1) {
    open();
    return;
  }

  // comp picking cards
  if (compCardsQn >= dealCardsQn) {

    bTake.textContent = '';
    bTake.disabled = true; // lock BUTTON 'Ещё'
    bTake.style.backgroundColor = GRAY; // BUTTON color

    if (compSum > 15) {
      audioClick.play();
      compStatus.textContent = 'Комп пасует';
    } else {

      for (i = 0; i < 3; i++) {
        if (compSum < 16) {
          compSummin();
        }
      }

    } // else
  } // if

  bPass.textContent = 'Вскрыть';
  bPass.style.backgroundColor = GREEN;
}