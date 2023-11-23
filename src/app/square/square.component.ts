import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']  // <-- Corrected property name
})
export class SquareComponent {
  @Input() value!: 'X' | 'O' | null;
}
