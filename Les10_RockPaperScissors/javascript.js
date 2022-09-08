const getUserChoice = userinput => {
    userinput = userinput.toLowerCase();
    if ((userinput === "rock") || (userinput === "paper") || (userinput === "scissors") || (userinput === "bomb")) {
        return userinput;
    }
    alert("ERROR! USER should input one of the following words: Rock, Paper, Scissors!");
    userinput = getUserInput();
    console.log(userinput);
    return getUserChoice(userinput);
}
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    let winner;
    if (userChoice != undefined) {
        switch (userChoice) {
            case "bomb": winner = "You are a WINNER!";
                break;
            case computerChoice: winner = "The game result is a TIE!";
                break;
            case "rock": (computerChoice === "paper") ? winner = "COMPUTER is a WINNER!" : winner = "You are a WINNER!";
                break;
            case "scissors": (computerChoice === "rock") ? winner = "COMPUTER is a WINNER!" : winner = "You are a WINNER!";
                break;
            case "paper": (computerChoice === "scissors") ? winner = "COMPUTER is a WINNER!" : winner = "You are a WINNER!";
                break;
        }
    }
    else {
        winner = "ERROR!\nUSER should input one of the following words:\nRock, Paper, Scissors!";
    }
    return winner;
}

function getResultPicture(Choice) {
    let image;
    document.getElementsByClassName('choice')[0].style.display = "flex";
    document.getElementsByClassName('choice')[1].style.display = "flex";
    if (Choice != undefined) {
        switch (Choice) {
            case "bomb": image = "bomb.jpeg";
                break;
            case "rock": image = "rock.jpeg";
                break;
            case "scissors": image = "scissors.jpeg";
                break;
            case "paper": image = "paper.jpeg";
                break;
        }
    }
    else {
        image = "error.jpeg";
    }
    return image;
}

function getWinnerPicture(Choice) {
    let image;
    switch (Choice) {
        case "You are a WINNER!": image = "user.png";
            break;
        case "The game result is a TIE!": image = "tie1.jpeg";
            break;
        case "COMPUTER is a WINNER!": image = "computer.jpeg";
            break;
        case "ERROR!\nUSER should input one of the following words:\nRock, Paper, Scissors!": image = "error.jpeg";
            break;
    }
    return image;
}

const getUserInput = () => prompt("Make your choice (rock/paper/scissors)");

function playGame() {
    // const getUserInput = () => prompt("Make your choice (rock/paper/scissors)");
    let userinput = getUserInput();
    console.log(userinput);
    let userChoice = getUserChoice(userinput);
    let computerChoice = getComputerChoice();
    let playG = determineWinner(userChoice, computerChoice);
    document.getElementById('ImgUser').src = getResultPicture(userChoice);
    document.getElementById('ImgComp').src = getResultPicture(computerChoice);
    document.getElementById('res').innerHTML = "RESULT";
    document.getElementById('ImgRes').src = getWinnerPicture(playG);
    document.getElementById('winner').innerHTML = playG;
    document.getElementById('RBtn').innerHTML = "PLAY AGAIN";
}

