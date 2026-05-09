

// STARS
function createStars() {
  const starsBg = document.getElementById('stars-bg');
  if (!starsBg) return;
  
  for (let i = 0; i < 350; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 3 + 1) + 's';
    starsBg.appendChild(star);
  }
}
createStars();

// MOON/SUN TOGGLE
// const moon = document.querySelector('.moon-svg');
// const moonPath = moon.querySelector('path');

// // Path data: moon vs sun
// const moonD = "M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z";
// const sunD = "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0-10z";

// moon.addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
  
//   if (document.body.classList.contains('light-mode')) {
//     moonPath.setAttribute('d', sunD); // switch to sun
//     localStorage.setItem('theme', 'light');
//   } else {
//     moonPath.setAttribute('d', moonD); // switch to moon
//     localStorage.setItem('theme', 'dark');
//   }
// });

// // Load saved theme
// if (localStorage.getItem('theme') === 'light') {
//   document.body.classList.add('light-mode');
//   moonPath.setAttribute('d', sunD);
// }


document.addEventListener('DOMContentLoaded', () => {
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');
  
  function applyTheme() {
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
  
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    applyTheme();
  }
  
  // Click either icon to toggle
  if (moon) moon.addEventListener('click', toggleTheme);
  if (sun) sun.addEventListener('click', toggleTheme);
  
  // Load saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
});



// --- DECK ---
const originalDeck = [
  { suit: 'hearts', value: 2, img: './SVG-cards-1.3/2_of_hearts.svg' },
  { suit: 'hearts', value: 3, img: './SVG-cards-1.3/3_of_hearts.svg' },
  { suit: 'hearts', value: 4, img: './SVG-cards-1.3/4_of_hearts.svg' },
  { suit: 'hearts', value: 5, img: './SVG-cards-1.3/5_of_hearts.svg' },
  { suit: 'hearts', value: 6, img: './SVG-cards-1.3/6_of_hearts.svg' },
  { suit: 'hearts', value: 7, img: './SVG-cards-1.3/7_of_hearts.svg' },
  { suit: 'hearts', value: 8, img: './SVG-cards-1.3/8_of_hearts.svg' },
  { suit: 'hearts', value: 9, img: './SVG-cards-1.3/9_of_hearts.svg' },
  { suit: 'hearts', value: 10, img: './SVG-cards-1.3/10_of_hearts.svg' },
  { suit: 'hearts', value: 'J', img: './SVG-cards-1.3/jack_of_hearts2.svg' },
  { suit: 'hearts', value: 'Q', img: './SVG-cards-1.3/queen_of_hearts2.svg' },
  { suit: 'hearts', value: 'K', img: './SVG-cards-1.3/king_of_hearts2.svg' },
  { suit: 'hearts', value: 'A', img: './SVG-cards-1.3/ace_of_hearts.svg' },
  { suit: 'diamonds', value: 2, img: './SVG-cards-1.3/2_of_diamonds.svg' },
  { suit: 'diamonds', value: 3, img: './SVG-cards-1.3/3_of_diamonds.svg' },
  { suit: 'diamonds', value: 4, img: './SVG-cards-1.3/4_of_diamonds.svg' },
  { suit: 'diamonds', value: 5, img: './SVG-cards-1.3/5_of_diamonds.svg' },
  { suit: 'diamonds', value: 6, img: './SVG-cards-1.3/6_of_diamonds.svg' },
  { suit: 'diamonds', value: 7, img: './SVG-cards-1.3/7_of_diamonds.svg' },
  { suit: 'diamonds', value: 8, img: './SVG-cards-1.3/8_of_diamonds.svg' },
  { suit: 'diamonds', value: 9, img: './SVG-cards-1.3/9_of_diamonds.svg' },
  { suit: 'diamonds', value: 10, img: './SVG-cards-1.3/10_of_diamonds.svg' },
  { suit: 'diamonds', value: 'J', img: './SVG-cards-1.3/jack_of_diamonds2.svg' },
  { suit: 'diamonds', value: 'Q', img: './SVG-cards-1.3/queen_of_diamonds2.svg' },
  { suit: 'diamonds', value: 'K', img: './SVG-cards-1.3/king_of_diamonds2.svg' },
  { suit: 'diamonds', value: 'A', img: './SVG-cards-1.3/ace_of_diamonds.svg' },
  { suit: 'clubs', value: 2, img: './SVG-cards-1.3/2_of_clubs.svg' },
  { suit: 'clubs', value: 3, img: './SVG-cards-1.3/3_of_clubs.svg' },
  { suit: 'clubs', value: 4, img: './SVG-cards-1.3/4_of_clubs.svg' },
  { suit: 'clubs', value: 5, img: './SVG-cards-1.3/5_of_clubs.svg' },
  { suit: 'clubs', value: 6, img: './SVG-cards-1.3/6_of_clubs.svg' },
  { suit: 'clubs', value: 7, img: './SVG-cards-1.3/7_of_clubs.svg' },
  { suit: 'clubs', value: 8, img: './SVG-cards-1.3/8_of_clubs.svg' },
  { suit: 'clubs', value: 9, img: './SVG-cards-1.3/9_of_clubs.svg' },
  { suit: 'clubs', value: 10, img: './SVG-cards-1.3/10_of_clubs.svg' },
  { suit: 'clubs', value: 'J', img: './SVG-cards-1.3/jack_of_clubs2.svg' },
  { suit: 'clubs', value: 'Q', img: './SVG-cards-1.3/queen_of_clubs2.svg' },
  { suit: 'clubs', value: 'K', img: './SVG-cards-1.3/king_of_clubs2.svg' },
  { suit: 'clubs', value: 'A', img: './SVG-cards-1.3/ace_of_clubs.svg' },
  { suit: 'spades', value: 2, img: './SVG-cards-1.3/2_of_spades.svg' },
  { suit: 'spades', value: 3, img: './SVG-cards-1.3/3_of_spades.svg' },
  { suit: 'spades', value: 4, img: './SVG-cards-1.3/4_of_spades.svg' },
  { suit: 'spades', value: 5, img: './SVG-cards-1.3/5_of_spades.svg' },
  { suit: 'spades', value: 6, img: './SVG-cards-1.3/6_of_spades.svg' },
  { suit: 'spades', value: 7, img: './SVG-cards-1.3/7_of_spades.svg' },
  { suit: 'spades', value: 8, img: './SVG-cards-1.3/8_of_spades.svg' },
  { suit: 'spades', value: 9, img: './SVG-cards-1.3/9_of_spades.svg' },
  { suit: 'spades', value: 10, img: './SVG-cards-1.3/10_of_spades.svg' },
  { suit: 'spades', value: 'J', img: './SVG-cards-1.3/jack_of_spades2.svg' },
  { suit: 'spades', value: 'Q', img: './SVG-cards-1.3/queen_of_spades2.svg' },
  { suit: 'spades', value: 'K', img: './SVG-cards-1.3/king_of_spades2.svg' },
  { suit: 'spades', value: 'A', img: './SVG-cards-1.3/ace_of_spades.svg' },
];

let deckOfCards = [];
let playerCards = [];
let dealerCards = [];
let isRoundActive = false;

const faceCards = ['J', 'Q', 'K'];

//BUTTONS
const deal = document.getElementById('deal');
const hitBtn = document.getElementById('hit');
const stayBtn = document.getElementById('stay');
const theme = document.getElementById('theme-btn');

//AREAS
const playerArea = document.getElementById('player-area');
const dealerArea = document.getElementById('dealer-area');
const table = document.getElementById('table');
const title = document.getElementById('title');

//EVENTS - set once only
deal.onclick = dealClick;
hitBtn.onclick = hitMe;
stayBtn.onclick = stayClick;
theme.onclick = handleImageSwap;

// Theme toggle
let lightMood = false;
function handleImageSwap() {
  lightMood =!lightMood;
  document.documentElement.classList.toggle('dark-theme');
  theme.src = lightMood? './icon-sun.svg' : './icon-moon.svg';
}

//SHUFFLE FUNCTION!!!
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//UTILITIES
function getCardScore(value) {
  if (faceCards.includes(value)) return 10;
  if (value === 'A') return 11;
  return value;
}

function calculateScore(cards) {
  let score = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.value === 'A') {
      aces++;
      score += 11;
    } else if (faceCards.includes(card.value)) {
      score += 10;
    } else {
      score += card.value;
    }
  }

  while (score > 21 && aces > 0) {
    score -= 10;
    aces--;
  }
  return score;
}

function resetDeck() {
  deckOfCards = [...originalDeck];
  shuffleArray(deckOfCards);
}

function clearBoard() {
  playerArea.replaceChildren();
  dealerArea.replaceChildren();
  playerCards = [];
  dealerCards = [];
}

function disableGameButtons(disabled) {
  hitBtn.disabled = disabled;
  stayBtn.disabled = disabled;
  deal.disabled =!disabled;
}

//DEALER FUNCTION HERE:
function dealClick() {
  if (isRoundActive) return;
  isRoundActive = true;

  clearBoard();
  resetDeck();

  // Deal 2 cards each
  for (let i = 0; i < 2; i++) {
    playerCards.push(deckOfCards.pop());
    dealerCards.push(deckOfCards.pop());
  }

  renderHands();
  disableGameButtons(false);

  // Check blackjacks
  const playerScore = calculateScore(playerCards);
  const dealerScore = calculateScore(dealerCards);

  if (playerScore === 21 && dealerScore === 21) {
    youTie();
  } else if (playerScore === 21) {
    winDouble();
  } else if (dealerScore === 21) {
    youLose();
  }
}

// displaying cards function
function dealCard(card, isHidden = false) {
  let myScene = document.createElement('div');
  let myCard = document.createElement('div');
  let myDesign = document.createElement('div');
  let cardFront = document.createElement('div');
  let cardImg = document.createElement('img');

  cardImg.src = card.img;
  cardImg.alt = `${card.value} of ${card.suit}`;

  myScene.classList.add('scene');
  myCard.classList.add('card');
  if (isHidden) myCard.classList.add('flipped');
  cardFront.classList.add('card_face');
  myDesign.classList.add('my-design', 'card_face');
  cardImg.classList.add('card_face');

  cardFront.append(cardImg);
  myCard.append(myDesign);
  myCard.append(cardFront);
  myScene.append(myCard);
  return myScene;
}

function renderHands() {
  playerArea.replaceChildren();
  dealerArea.replaceChildren();

  playerCards.forEach(card => {
    playerArea.append(dealCard(card));
  });

  dealerCards.forEach((card, index) => {
    // Second card face down until round ends
    const isHidden = index === 1 && isRoundActive;
    dealerArea.append(dealCard(card, isHidden));
  });

  table.style.background = `
  radial-gradient(ellipse at center, 
    #0a5c36 0%, 
    #064021 70%, 
    #032b16 100%
  )
`;
  title.innerHTML = `Playing  ${calculateScore(playerCards)}`;
  title.style.color = 'black';
}

//THIS IS MY HIT ME FUNCTION!!
function hitMe() {
  if (!isRoundActive) return;

  playerCards.push(deckOfCards.pop());
  renderHands();

  if (playerCards.length >= 5) {
    disableGameButtons(true);
  }

  if (calculateScore(playerCards) > 21) {
    youLose();
  }
}

// THIS IS MY STAY FUNCTION!!
function stayClick() {
  if (!isRoundActive) return;
  disableGameButtons(true);

  // Dealer draws until 17+
  while (calculateScore(dealerCards) < 17) {
    dealerCards.push(deckOfCards.pop());
  }

  endRound();
}

function endRound() {
  isRoundActive = false;
  renderHands(); // Reveals hole card
  compare();
}

// comparisons
function compare() {
  const playerScore = calculateScore(playerCards);
  const dealerScore = calculateScore(dealerCards);

  if (dealerScore > 21) {
    youWin();
  } else if (playerScore === dealerScore) {
    youTie();
  } else if (playerScore > dealerScore) {
    youWin();
  } else {
    youLose();
  }
}

// win or lose
function revealDealerCard() {
  if (dealerArea.children[1]) {
    dealerArea.children[1].firstElementChild.classList.remove('flipped');
  }
}

function youLose() {
  isRoundActive = false;
  revealDealerCard();
table.style.background = `
  radial-gradient(ellipse at center, 
    #8a0f0f 0%, 
    #6b0a0a 70%, 
    #4d0606 100%
  )
`;

  title.innerHTML = 'You Lose';
  title.style.color = 'black';
  disableGameButtons(true);
}

function youWin() {
  isRoundActive = false;
  revealDealerCard();
table.style.background = `
  radial-gradient(ellipse at center, 
    #0f8a4f 0%, 
    #0a6b3c 70%, 
    #064d2b 100%
  )
`;
  title.innerHTML = 'You Win';
  title.style.color = 'black';
  disableGameButtons(true);
}

function winDouble() {
  isRoundActive = false;
  revealDealerCard();
table.style.background = `
  radial-gradient(ellipse at center, 
    #d4af37 0%, 
    #a88923 70%, 
    #7c6419 100%
  )
`;
  title.innerHTML = 'Blackjack!';
  title.style.color = 'black';
  disableGameButtons(true);
}

function youTie() {
  isRoundActive = false;
  revealDealerCard();
 table.style.background = `
  radial-gradient(ellipse at center, 
    #e07b00 0%, 
    #864800 70%, 
    #5f3900 100%
  )
`;
  title.innerHTML = 'Push - Tie';
  title.style.color = 'black';
  disableGameButtons(true);
}

// Init
disableGameButtons(true);






