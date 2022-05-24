'use strict';

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

dice.classList.add('hidden');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate a random dice roll
    const roll = Math.trunc(Math.random() * 6) + 1;

    // display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${roll}.png`;
    //check if roll is 1: if it's true, change player
    if (roll !== 1) {
      currentScore += roll;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //current0.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById(`name--${activePlayer}`).textContent = `player ${
        activePlayer + 1
      } ha ganado`;
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
