import { Component } from '@angular/core';
import { ToggleShowComponent } from '../../toggle-show/toggle-show.component';
import { RatingReviewComponent } from '../../rating-review/rating-review.component';
import { ReviewContainerComponent } from '../../review-container/review-container.component';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { FilterComponent } from '../../filter/filter.component';
import { CardComponent } from '../../card/card.component';
import { SearchInputComponent } from '../../search-input/search-input.component';
import { SelectorComponent } from '../../selector/selector.component';

@Component({
  selector: 'app-all-reviews',
  imports: [
    ToggleShowComponent,
    RatingReviewComponent,
    ReviewContainerComponent,
    CommonModule,
    ReviewsComponent,
    FilterComponent,
    CardComponent,
    SearchInputComponent,
    SelectorComponent,
  ],
  templateUrl: './all-reviews.component.html',
  styleUrl: './all-reviews.component.css',
})
export class AllReviewsComponent {
  display = false;
  review_filter = [
    'Most relevant',
    'Highest guest rating',
    'Lowest guest rating',
  ];
  toggle() {
    this.display = !this.display;
    console.log('hello');
  }

  onQuery(q: string) {
    // optionally call server for remote search
  }
  // parent.component.ts
  users = [
    { id: 1, name: 'Asha Kumar' },
    { id: 2, name: 'Rahul Mehta' },
    { id: 3, name: 'Priya Singh' },
  ];
}
