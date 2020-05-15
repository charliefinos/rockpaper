function computerPlay(){

    let optArray = ['rock', 'paper','scissors']

    let pickRand = optArray[Math.floor(Math.random()*optArray.length)]

    console.log('The computer choose:' + pickRand);

    return pickRand;
};

function singleRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();
    let computer = computerSelection;

    if (player === 'rock' && computer === 'rock' || player === 'paper' && computer === 'paper' || player === 'scissors' && computer === 'scissors'){
        console.log("It's a Draw!");
        return 'Draw'
    } else if (player === 'rock' && computer === 'paper') {
        console.log("You Lose!")
        return 'Lose'
    } else if (player === 'rock' && computer === 'scissors'){
        console.log('You Win!');
        return 'Win'
    } else if (player === 'paper' && computer === 'rock'){
        console.log("You Win!");
        return 'Win';
    } else if (player === 'paper' && computer === 'scissors'){
        console.log('You Lose!');
        return 'Lose';
    } else if (player === 'scissors' && computer === 'paper'){
        console.log('You Win!');
        return 'Win';
    } else if (player === 'scissors' && computer === 'rock'){
        console.log('You lose!');
        return "Lose";
    }

}


function allGame(){

    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for (let i=0 ; i<5 ; i++){

        let playerSelection = prompt('Choose one: "ROCK", "PAPER", or "SCISSORS".');
        let computerSelection = computerPlay();

        switch (singleRound(playerSelection, computerSelection)){
            case 'Draw':
                drawScore = drawScore + 1;
                break;
            case 'Lose':
                computerScore = computerScore + 1;
                break;
            case 'Win':
                playerScore = playerScore + 1;
                break;
        }

    }
    
    if (playerScore>computerScore){
        console.log('You Win!!! -------------------- You: ' + playerScore + ', Computer :' + computerScore);
    } else if (playerScore<computerScore){
        console.log('You Lose!!! -------------------- You: ' + playerScore + ', Computer :' + computerScore);
    } else if (playerScore==computerScore){
        console.log('You Tied!!! -------------------- You: ' + playerScore + ', Computer :' + computerScore);
    }
}

allGame();
