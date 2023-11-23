import { Component } from '@angular/core';

@Component({
  selector: 'app-single-player-game-component',
  templateUrl: './single-player-game-component.component.html',
  styleUrl: './single-player-game-component.component.scss'
})
export class SinglePlayerGameComponentComponent {
  squares: ('X' | 'O' | null)[] = [];
  xIsNext!: boolean;
  winner: string | null = null; // Initialize with null instead of " null"

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null; // Corrected initialization
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }


  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
  
      // Check for a winner or draw before AI move
      if (!this.winner) {
        // If the game is not over, trigger the AI move
        this.makeAIMove();
      }
    }
  }
  


  private minimax(board: string[], player: string, depth = 0): { score: number, index?: number } {
    const availableMoves = this.getAvailableMoves(board);
  
    if (this.checkWin(board, 'X')) {
      return { score: -1 };
    } else if (this.checkWin(board, 'O')) {
      return { score: 1 };
    } else if (availableMoves.length === 0) {
      return { score: 0 };
    }
  
    const moves: { score: number, index?: number }[] = [];
  
    for (const move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = player;
  
      const result = this.minimax(newBoard, player === 'X' ? 'O' : 'X', depth + 1);
      moves.push({ score: result.score, index: move });
    }
  
    if (player === 'O') {
      const bestMove = moves.reduce((best, move) => (move.score > best.score ? move : best), { score: -Infinity });
      return bestMove;
    } else {
      const bestMove = moves.reduce((best, move) => (move.score < best.score ? move : best), { score: Infinity });
      return bestMove;
    }
  }
  
  makeAIMove() {
    const bestMove = this.minimax(this.squares as string[], this.player);
    if (bestMove.index !== undefined) {
      this.squares.splice(bestMove.index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }
  
  
  private getAvailableMoves(board: string[]): number[] {
    return board.reduce((moves, cell, index) => (cell === null ? [...moves, index] : moves), [] as number[]);
  }

  private checkWin(board: string[], player: string): boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return lines.some(line => line.every(cell => board[cell] === player));
  }

  checkDraw(squares: (string | null)[]): boolean {
    return squares.every(square => square !== null);
  }
  

  private calculateWinner(): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    if (this.checkDraw(this.squares)) {
      return "draw";
    }

    return null;
  }
}