getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log("Not valid input");
    }
} 

getComputerChoice = () => {
    computerInput = Math.floor(Math.random() * 3);

    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
        return 'Boom! You win!';
    }
    if (userChoice === computerChoice){
        return 'Game was a tie';
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer won!';
        }else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors'){
            return 'The computer won!';
        }else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
            return 'The computer won!';
        }else {
            return 'You won!';
        }
}
}

playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You played: ' + userChoice);
    console.log('The computer played: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
