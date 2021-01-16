let deck = []; // перетасованная колода
let dealOrder = 0; // порядок раздачи карт для управления звуками
let waitForDeal = 200; // время ожидания раздачи
let dealSpeed; // скорость раздачи - указана в 'menu.js'
let dealCardsQn; // колво раздаваемых карт - указана в 'menu.js'

// выбираем случайную карту
function searchRandomCard() {
  let randomNum = Math.floor(Math.random() * 36);
  let newCard = cardsArray[randomNum];
  return newCard;
}

// помещаем карту в колоду
function deckCreate() {
  for (c = 0; deck.length < 36; c++) {
    deck.push(searchRandomCard());

    if (deck.length > 1) {
      for (i = 0; i < deck.length - 1; i++) {
        if (deck[deck.length - 1] == deck[i]) {
          deck.pop()
        }
      }
    }

  }
  audioShuffle.play();
  setTimeout(dealCards, waitForDeal);
}