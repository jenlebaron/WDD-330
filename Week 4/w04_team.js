let play_board = ["", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".play-area");

const render_board = () => {
    board_container.innerHTML = "";
    play_board.forEach((e,i) => {
        board_container.innerHTML += '<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>';
        if (e == player || e == computer) {
            document.querySelector('#block_${i}').classList.add("occupied");
        }
    });
};

render_board();


