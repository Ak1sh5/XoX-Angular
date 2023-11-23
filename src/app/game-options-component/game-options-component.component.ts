import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-game-options-component',
  templateUrl: './game-options-component.component.html',
  styleUrl: './game-options-component.component.scss'
})
export class GameOptionsComponentComponent {
  @Output() singlePlayerGameSelected = new EventEmitter<void>();
  @Output() twoPlayerGameSelected = new EventEmitter<void>();

  startSinglePlayerGame() {
    this.singlePlayerGameSelected.emit();
  }

  startTwoPlayerGame() {
    this.twoPlayerGameSelected.emit();
  }
}
