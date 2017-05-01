var prompt = require('prompt');

class TicTacToe = () {

  constructor () {
    this.turn = 'X';
    this.board = [
    [' ', ' ', ' '], 
    [' ', ' ', ' '], 
    [' ', ' ', ' ']];
    this.gameOn = true;

  },

  initBoard () {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
  },

  placePiece (x, y) {
    this.board[y][x] = this.turn;
    this.turn === 'X' ? this.turn = 'O' : this.turn = 'X'.
  }

 

  checkWin () {
    /* check win condition */
  }

  promptPlayer () {
    prompt(`Player ${this.turn}, make your move!`)
  }

   startGame () {
    initBoard();

    while (gameOn) {
      promptPlayer()
    }

  }
}