function computerPlay(){
    var options = ["rock", "paper", "scissors"];
    var choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(rawPlayerSelection, rawComputerSelection){
    var playerSelection = rawPlayerSelection.toLowerCase()
    var computerSelection = rawComputerSelection.toLowerCase()
    
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
          playerSelection === "paper" && computerSelection === "rock" ||
          playerSelection === "scissors" && computerSelection === "paper"){

              return "You win";
          }

    else if (computerSelection === "rock" && playerSelection === "scissors" ||
          computerSelection === "paper" && playerSelection === "rock" ||
          computerSelection === "scissors" && playerSelection === "paper"){
              return "You lose";
          }
}


function game(playerChoice){
    var player = 0;
    var machine = 0;
    var computerSelection;
    var result;
    for (var i=0; i < 5; i++){
        computerSelection = computerPlay();
        result = playRound(playerChoice, computerSelection);
        console.log(playRound(playerChoice, computerSelection));

        if (result === "You lose"){
            ++machine;
        }
        else if (result === "You win"){
            ++player;
        }
    }

    if (player > machine){
        console.log(`You won by ${player} - ${machine}`);
    }

    else if (player < machine){
        console.log(`You lost by ${player} - ${machine}`);
    }

    else{
        console.log(`The final result was ${player} - ${machine}.Draw`);
    }
}

var playerChoice = window.prompt("Rock, paper or scissors?");

game(playerChoice);