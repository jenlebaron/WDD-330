let playBoard = ["", "", "", "", "", "", "", "", ""];
const playArea = document.getElementById("play-area");
let turn = 0;

playArea.addEventListener('touchend', (event) => {
    let char = turn % 2 == 0 ? "X" : "O";
    if (document.getElementById(event.target.id).innerHTML !== "") {
        document.getElementById(event.target.id).classList.add('occupied');
        setTimeout(function() {
            document.getElementById(event.target.id).classList.remove('occupied');
          }, 1000);
        return;}
    else {
    document.getElementById(event.target.id).innerHTML = char;
    let index = event.target.getAttribute('dataIndex');
    playBoard[index] = char;
    //console.log(playBoard);
    }
    gameWon();
    turn++;
});

//reset
function resetBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`block_${i}`).innerHTML = '';
    }
    for (let i = 0; i < 9; i++) {
        playBoard[i] = '';
    }
    turn = 0;
    document.getElementById('winner').innerHTML = '';
} 

//game logic
function gameWon() {
    let pos1 = playBoard[0];
    let pos2 = playBoard[1];
    let pos3 = playBoard[2];
    let pos4 = playBoard[3];
    let pos5 = playBoard[4];
    let pos6 = playBoard[5];
    let pos7 = playBoard[6];
    let pos8 = playBoard[7];
    let pos9 = playBoard[8];

    if  (((pos1 == pos2) && (pos2 == pos3)) && (pos1 && pos2 && pos3)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos1} You Won!`;}
        else if (((pos4 == pos5) && (pos5 == pos6)) && (pos4 && pos5 && pos6)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos4} You Won!`}
        else if (((pos7 == pos8) && (pos8 == pos9)) && (pos7 && pos8 && pos9)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos7} You Won!`}
        else if (((pos1 == pos4) && (pos4 == pos7)) && (pos1 && pos4 && pos7)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos1} You Won!`}
        else if (((pos2 == pos5) && (pos5 == pos8)) && (pos2 && pos5 && pos8)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos2} You Won!`}
        else if (((pos3 == pos6) && (pos6 == pos9)) && (pos3 && pos6 && pos9)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos3} You Won!`}
        else if (((pos1 == pos5) && (pos5 == pos9)) && (pos1 && pos5 && pos9)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos1} You Won!`}
        else if (((pos3 == pos5 && pos5 == pos7)) && (pos3 && pos5 && pos7)) {
            document.getElementById('winner').innerHTML = `Congratulations ${pos3} You Won!`}
        else if (turn > 7) {
            document.getElementById('winner').innerHTML = `No Winners this time!`}
    }


// const board = document.querySelector('.board');
      // //const divBoard = document.querySelector('.divBoard');
      // console.log(board);
      // const resetButton = document.getElementById('reset');
      // const player1 = 'X';
      // const player2 = 'O';
      // let player = player1;
      // function addPiece(e) {
      //   console.log(e.target);
      //   e.target.innerHTML = player;
      //   if (player === player1) player = player2;
      //   else player = player1;
      // }
      // table version
      // function resetBoard() {
      //   console.dir(board);
      //   for (let i = 0; i < board.rows.length; i++) {
      //     let row = board.rows[i];
      //     for (let j = 0; j < row.cells.length; j++) {
      //       row.cells[j].innerHTML = '';
      //     }
      //   }
      // }
      // div version
    //   function resetBoardDiv() {
    //     const divBoard = document.querySelector('.divBoard');
    //     for (let i = 0; i < divBoard.children.length; i++) {
    //       divBoard.children[i].innerText = '';
    //     }
    //     const children = Array.from(divBoard.children);
    //     const empty = children.filter(function(child) {
    //       return child.innerText == 'X' || child.innerText == 'O';
    //     });
    //     console.log(empty);
    //   }
      // board.addEventListener('click', addPiece);
      //divBoard.addEventListener('click', addPiece);
      // resetButton.addEventListener('click', resetBoard);