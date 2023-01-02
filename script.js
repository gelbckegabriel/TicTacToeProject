let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// move/play counter.
let player1 = 0;
let player2 = 0;

// adding the clicking event at the boxes.
for(let i = 0; i < boxes.length; i++) {

    // when someone clicks at any box.
    boxes[i].addEventListener('click', function() {

        let el = checkEl(player1, player2);

        // verifies if the box has been pressed before.
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
    
            // save move.
            if (player1 == player2) {
                player1++;

                if(secondPlayer == "ai-player") {

                    // function execute move.
                    computerPlayer();
                    player2++;

                }

            } else {
                player2++;
            }

            // verifies the winner.
            checkWinCondition();
        }
    })
};

// event to find out the option of the player button (2 players or AI).
for (let i = 0; i < boxes.length; i++) {

    buttons[i].addEventListener('click', function() {

        secondPlayer = this.getAttribute('id');

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove('hide');
        }, 300);

    });

}

// Checks who make the move.
function checkEl(player1, player2) {

    if (player1 == player2) {
        // X
        el = x;
    } else {
        // O
        el = o;
    }

    return el;

};

// verifies the winner.
function checkWinCondition() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    // check the horizontal lines.
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // X is the winner.
            console.log("x venceu (1 a 3)");
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // O is the winner.
            console.log("o venceu (1 a 3)");
            declareWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
       
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
    
        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            // X is the winner.
            console.log("x venceu (4 a 6)");
            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            // O is the winner.
            console.log("o venceu (4 a 6)");
            declareWinner('o');
        }
    }
        
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
  
        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            // X is the winner.
            console.log("x venceu (7 a 9)");
            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            // O is the winner.
            console.log("o venceu (7 a 9)");
            declareWinner('o');
        }        
    }

    // check the vertical lines.
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
  
        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            // X is the winner.
            console.log("x venceu (1, 4 e 7)");
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            // O is the winner.
            console.log("o venceu (1, 4 e 7)");
            declareWinner('o');
        }        
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
  
        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            // X is the winner.
            console.log("x venceu (2, 5 e 8)");
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            // O is the winner.
            console.log("o venceu (2, 5 e 8)");
            declareWinner('o');
        }        
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
  
        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            // X is the winner.
            console.log("x venceu (3, 6 e 9)");
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            // O is the winner.
            console.log("o venceu (3, 6 e 9)");
            declareWinner('o');
        }        
    }

    // check the diagonal lines.
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
  
        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            // X is the winner.
            console.log("x venceu (1, 5 e 9)");
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            // O is the winner.
            console.log("o venceu (1, 5 e 9)");
            declareWinner('o');
        }        
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
  
        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            // X is the winner.
            console.log("x venceu (3, 5 e 7)");
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            // O is the winner.
            console.log("o venceu (3, 5 e 7)");
            declareWinner('o');
        }        
    }

    // the game tied.
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        console.log("deu velha");
        declareWinner('tie');
    }

}

// set the game from scratch, defines the winner and update the scoreboard.
function declareWinner(winner) {

    let scoreboardX = document.querySelector("#value1Scoreboard");
    let scoreboardO = document.querySelector("#value2Scoreboard");
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "Player 1 won this round!"
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "Player 2 won this round!"
    } else {
        msg = "It's a tie!"
    }

    // show the message on screen.
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // puts a timer to hide the message on screen.
    setTimeout(function() {
        messageContainer.classList.add('hide');
    }, 2500);

    // restart the game.
    player1 = 0;
    player2 = 0;

    // remove x and o from the boxes.
    let boxesToRemove = document.querySelectorAll('.box div');

    for (let i = 0; boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

};

// A.I Player moves.
function computerPlayer() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        // it will only make a move when the son is empty.
        if (boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // check the amount of filled boxes.
        } else {
            filled++;
        }

    }

    if (counter == 0 && filled < 9) {
        computerPlayer();
    }

};
