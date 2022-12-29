// board
var blockSize = 25;
var cols = 50;
var rows = 100;
var board;
var context;

window.onload = function()  {
    board = document.getElementById(board);
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
}

8.58