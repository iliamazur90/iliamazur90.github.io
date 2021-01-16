const checkAceEqualOne = document.querySelector('#ace-equals-one')
const checkAcePlusAce = document.querySelector('#ace-plus-ace')
const checkGiveOneCard = document.querySelector('#give-one-card')
const checkShowScores = document.querySelector('#show-scores')

function set() {
    if (checkAceEqualOne.checked) {
        aceEqualsOne = true;
    }

    if (checkAcePlusAce.checked) {
        golden = true;
        userAces = 0;
        compAces = 0;
    }

    if (checkGiveOneCard.checked) {
        dealCardsQn = 1;
        dealSpeed = 180;
    }

    if (checkShowScores.checked) {
        showScores = false
    }
}