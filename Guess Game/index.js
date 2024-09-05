const randomNumber = parseInt((Math.random()*100) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); 
        validateGuess(guess);
});
}


function validateGuess(guess){
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GameOver. Random number was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
    

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You won! The number was ${randomNumber}`)
            endgame()
        }else if(guess<randomNumber){
            displayMessage('Too low')
        }else if(guess > randomNumber){
            displayMessage('Too high')
        }
    }



function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    playGame = true;
    
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = '${11 - newGuess}';
    userInput.removeAttribute('disabled');
        startOver.removeChild(p);
       
})

   }
   



