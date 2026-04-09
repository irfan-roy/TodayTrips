import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RatingReviewComponent } from '../rating-review/rating-review.component';
@Component({
  selector: 'app-review-container',
  imports: [NgForOf, CommonModule, RatingReviewComponent],
  templateUrl: './review-container.component.html',
  styleUrl: './review-container.component.css',
})
export class ReviewContainerComponent {
  @Input() class: string = '';
  progress = [20];

  ratings = [
    { value: 90, rating: 5 },
    { value: 70, rating: 4 },
    { value: 2, rating: 3 },
    { value: 2, rating: 2 },
    { value: 2, rating: 1 },
  ];

  values = [
    { name: 'Cleanliness', rating: 4.8, icon: 'fas fa-broom' },
    { name: 'Accuracy', rating: 4.8, icon: 'fas fa-circle-check' },
    { name: 'Check-in', rating: 4.9, icon: 'fas fa-door-open' },
    { name: 'Communication', rating: 4.8, icon: 'fas fa-comments' },
    { name: 'Location', rating: 4.7, icon: 'fas fa-map-marker-alt' },
    { name: 'Values', rating: 4.7, icon: 'fas fa-tags' },
  ];
}
