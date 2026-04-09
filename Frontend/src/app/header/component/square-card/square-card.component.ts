import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square-card',
  imports: [],
  templateUrl: './square-card.component.html',
  styleUrl: './square-card.component.css',
})
export class SquareCardComponent {
  @Input() blog: any;
  blogs = [
    {
      img: 'https://images.unsplash.com/photo-1758633370468-686fba5ead85?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: '#TodayTrip: Hotels & Homes',
      text: `Join us for a Hotels & Homes #TodayTrip on August 27, 2025 at 11:00 AM
      Pacific Time (PT)/2:00 PM Eastern`,
    },
  ];

  @Output() cardClick = new EventEmitter<any>();

  onCardClick() {
    this.cardClick.emit(this.blog);
  }
}
