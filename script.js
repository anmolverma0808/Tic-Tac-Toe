let audioTurn = new Audio("ting.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    turn = turn === "X" ? "0" : "X"
}

let wins = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
]

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');  
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "";
            isgameover = true;
            document.getElementById('congrats').style.display = 'block';
            document.getElementById('show-win').style.display = 'block';
            document.getElementById('info').innerText = boxtext[e[0]].innerText + " Won"
        }
    })

}

const checkFull = () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    let flag = true;
    Array.from(boxtexts).forEach(element => {
        if(element.innerText === '')
        {
            flag = false;
        }
    });

    if(flag === true)
    {    
        document.getElementById('congrats').style.display = 'block';
        document.getElementById('show-gameover').style.display = 'block';
        document.getElementById('show-win').style.display = 'none';
    }
}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                changeTurn();
                audioTurn.play();
                checkWin()
                checkFull();
                if (!isgameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }    
        }
    
    )
})


// Added onclick listener to reset button
reset.addEventListener('click', () => {
    resetAll();
})

const close = document.getElementById('close');
close.addEventListener('click', () => {
    document.getElementById('congrats').style.display = 'none';
    document.getElementById('show-gameover').style.display = 'none';
    document.getElementById('show-win').style.display = 'none';
    resetAll();
})


resetAll = () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}
