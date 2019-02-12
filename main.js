window.addEventListener('load', init)

let time = 5;
let score = 0;
let isPlaying;

// Don Elements 
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const seconds = document.querySelector('#seconds')
const message = document.querySelector('#message')

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize Game
function init() { 

//    Load word from array
showWord(words)
// Call countdown every second
setInterval(countdown,1000)
//check game status
setInterval(checkStatus, 50)
 }

// Pick and show Random Word
function showWord(words) { 
    // Generate Random Index
    const randomIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randomIndex];
 }
 function countdown() { 

    if(time > 0) {
        // Decrement 
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
  }

  function checkStatus() {  
    if(!isPlaying && time === 0 ) {
        message.innerHTML ="Game Over!"
    }

  }