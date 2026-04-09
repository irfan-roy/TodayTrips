import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-review',
  imports: [CommonModule],
  templateUrl: './rating-review.component.html',
  styleUrl: './rating-review.component.css',
})
export class RatingReviewComponent {
  @Input() class = '';
}
