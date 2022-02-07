//-------------------------------------------------------------Max's find my number-------------------------------------------------------------//
// Variable block - Start.
let randomNumber = parseInt((Math.random() * 20) + 1); // Random number - from 1 to 20.
let userInputNumber = document.querySelector('#userInputNumber'); // User's Input.
let btnUserInputNumber = document.querySelector('#btnUserInputNumber'); // Input button - id.
let YourNumberForSpan = document.querySelector('.YourNumberForSpan'); // User - number for span.
let tenAttempts = document.querySelector('.tenAttempts'); // try - 10 - paragraph.
let infoBox = document.querySelector('.info-box'); // resultParas - paragraph.
let TooLowHight = document.querySelector('.TooLowHight'); // Low Or High - paragraph.
let btn = document.createElement('button'); // New game - New button (New createElement - button) - Start New Game.
let userWrongNumbersList = []; // user's wrong numbers list (array).
let userTryagain = 1; // User's have 10 try - 1-10.
let startGame = true;
// Variable block - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function block - Start.
// Function Start game - Start.
if (startGame) {
    btnUserInputNumber.addEventListener('click', function (e) { // Input button - number.
        e.preventDefault();
        const userNumber = parseInt(userInputNumber.value); // Input - user's number.
        uservalidateNumber(userNumber); // Function - validate user's number.
    });
}
// Function Start game - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - User's number - validate - Start.
function uservalidateNumber(userNumber) { 
    if (!userNumber) { // If user's number is not number. (NaN != NaN)
        alert('Please enter a number');
    } else if (userNumber < 1) { // If user's number is less than - 1.
        alert('Please enter a number greater than 1!');
    } else if (userNumber > 20) { // If user's number is greater than - 20.
        alert('Please enter a number less than 20!')
    } else {
        userWrongNumbersList.push(userNumber); // User's wrong numbers list (array) - user's add wrong number.
        if (userTryagain === 10) { // User's have 10 try - 1-10.
            displayGuesses(userNumber); // Function - show us result.
            showText(`Game Over! Number was ${randomNumber}`); // Game over - this number was - X.
            endGame(); // Function - End game!
        } else {
            //Display previous guessed numbers
            displayGuesses(userNumber); // Function - show us result.
            checkUserNumber(userNumber); // Function - user's number - check.
        }
    }
}
// Function - User's number - validate - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - user's number - check - Start.
function checkUserNumber(userNumber) { 
    if (userNumber === randomNumber) { // If user's number is - correct.
        showText(`You win! Hidden number was ${randomNumber}`); // text- You win!
        endGame(); // Function - End game!
    } else if (userNumber < randomNumber) { // If user's number less than - random number.
        showText(`Too low!`); // text - Too low!
    } else if (userNumber > randomNumber) { // If user's number greater than - random number.
        showText(`Too High!`); // text - Too High!
    }
}
// Function - user's number - check - End..
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - when user click btn - our number get paragraph || clear input || ten attempts - 1 || - Start.
function displayGuesses(userNumber) { 
    userInputNumber.value = ''; // Clear input.
    YourNumberForSpan.innerHTML += `${userNumber}; `; // User - number for span.
    userTryagain++; // User's - 10 try - 1 + 1.
    tenAttempts.innerHTML = `${11 - userTryagain} `; // try 10 - 1 - paragraph.
}
// Function - when user click btn - our number get paragraph || clear input || ten attempts - 1 || - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - give us - different text (Game Over! || Too low! || Too High! || You guessed correctly!) - Start.
function showText(message) { 
    TooLowHight.innerHTML = `<h3>${message}</h3>` // Function - give TooLowHight - text for paragraph.
}
// Function - give us - different text (Game Over! || Too low! || Too High! || You guessed correctly!) - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - end game - Start.
function endGame() { 
    userInputNumber.value = ''; // Game over - Clear user's input.
    userInputNumber.setAttribute('disabled', ''); // Game over - Disable user input button.


    btn.classList.add('button'); // New game - New button (New createElement - button) - Start New Game.
    btn.innerHTML = `Start New Game` // New button - text. 
    btn.setAttribute("id", "newGame");
    infoBox.appendChild(btn); // resultParas - child.
    startGame = false;
    newGame(); // New game.
}
// Function - end game - End.
//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------------------------------//
// Function - new game - Start.
function newGame() { 
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt((Math.random() * 20) + 1); // New randomNumber.
        userWrongNumbersList = []; // user's new wrong numbers list (array).                       
        userTryagain = 1; // User's have new 10 try - 1-10.
        YourNumberForSpan.innerHTML = ''; // User - new number for span.
        TooLowHight.innerHTML = ''; // New low or Hight.
        tenAttempts.innerHTML = `${11 - userTryagain}`; // New try - 10 - paragraph.
        userInputNumber.removeAttribute('disabled'); // Disabled input - user's number.
        infoBox.removeChild(p); // Delete - resultParas - paragraph.
        startGame = true;
    })
}
// Function - new game - Start - End.
// Function block - End.
//--------------------------------------------------------------------End-----------------------------------------------------------------------//