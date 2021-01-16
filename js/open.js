// количество побед
let userScore = 0;
let compScore = 0;

function userGetTwoAces() {
  bTake.disabled = true; // блок кнопку
  bTake.style.backgroundColor = GRAY;

  open();
}

function compGetTwoAces() {
  // bTake.disabled = true; // блок кнопку
  // bTake.style.backgroundColor = GRAY;

  open();
}

function open() {
  // если выведен результат - тасуем
  if (bPass.textContent == 'Тасовать') {
    shuffle();
    return;
  }

  audioOpen.play();
  for (i = 1; i <= compCardsQn; i++) {
    setTimeout(showCompCards, dealSpeed);
  }
  userStatus.textContent = `У тебя :${userSum}` // выводим очки игрока
  compCards.innerHTML = compTemp; // открываем карты компа
  compStatus.textContent = 'У компа: ' + compSum;

  bTake.textContent = `${userScore} : ${compScore}`;
  bPass.textContent = 'Тасовать';
  bPass.style.backgroundColor = RED;

  // у игрока или у компа 2 туза
  if (userSum == 22 && userAces == 2) {
    userScore += 1;
    result.textContent = 'Ты выиграл. У тебя 2 туза';
  }
  else if (compSum == 22 && compAces == 2) {
    compScore += 1;
    result.textContent = 'Комп выиграл. У него 2 туза';
  }

  // у обоих больше 21
  else if (userSum > 21 && compSum > 21) {
    if (quote == 2) {
      result.textContent = 'Но не очко обычно губит...';
    } else {
      result.textContent = 'Увы. У вас обоих перебор. :(';
    }
  }

  // у обоих меньше 16
  else if (userSum < 16 && compSum < 16) {
    result.textContent = 'Недобор. Никто из вас не выиграл :(';
  }

  // если игрок перебрал
  else if (userSum > 21 && compSum < 22 && compSum > 15) {
    compScore += 1;
    if (quote == 2) {
      result.textContent = 'Но не очко обычно губит...';
    } else if (compSum == 21) {
      result.textContent = 'Комп выиграл. У него 21';
    } else {
      result.textContent = 'Ты перебрал. Комп победил :(';
    }
  }

  // если игрок не добрал
  else if (userSum < 16 && compSum < 22 && compSum > 15) {
    compScore += 1;
    if (compSum == 21) {
      result.textContent = 'Комп выиграл. У него 21';
    } else {
      result.textContent = 'Ты не добрал. Комп победил :(';
    }
  }

  // если у игрока меньше 16 а у компа больше 21
  else if (userSum < 16 && compSum > 21) {
    result.textContent = 'Ну, такое... Вобщем - тасуй';
  }

  // если игрок набрал от 16 до 21
  else if (userSum > 15 && userSum < 22) {
    // если одинаково
    if (userSum == compSum) {
      result.textContent = `Нескладушка. Вы набрали по ${userSum} :/`;
    }
    // если комп перебрал
    else if (compSum > 21) {
      userScore += 1;
      if (userSum == 21) {
        result.textContent = 'Ты выиграл. У тебя 21';
      } else {
        result.textContent = 'Ты выиграл. Комп перебрал :)';
      }
    }
    // если комп недобрал
    else if (compSum < 16) {
      userScore += 1;
      if (userSum == 21) {
        result.textContent = 'Ты выиграл. У тебя 21';
      } else {
        result.textContent = 'Ты выиграл. Комп недобрал :)';
      }
    }
    // если у игрока больше
    else if (userSum > compSum) {
      userScore += 1;
      if (userSum == 21) {
        result.textContent = 'Ты выиграл. У тебя 21';
      } else {
        result.textContent = 'Победа! Ты набрал больше :)';
      }
    }
    // если у игрока меньше
    else if (userSum < compSum) {
      compScore += 1;
      if (compSum == 21) {
        result.textContent = 'Комп выиграл. У него 21';
      } else {
        result.textContent = 'Крах! У компа больше :(';
      }
    }

  }
}