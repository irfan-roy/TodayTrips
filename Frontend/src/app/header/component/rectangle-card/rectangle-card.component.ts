import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rectangle-card',
  imports: [],
  templateUrl: './rectangle-card.component.html',
  styleUrl: './rectangle-card.component.css',
})
export class RectangleCardComponent {
  @Input() blog: any;

  @Output() cardClick = new EventEmitter<any>();

  onCardClick() {
    this.cardClick.emit(this.blog);
  }
}
