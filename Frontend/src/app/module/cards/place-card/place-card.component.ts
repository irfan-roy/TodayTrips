import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriceComponent } from '../../showListings/price/price.component';
import { RatingComponent } from '../../showListings/rating/rating.component';

@Component({
  selector: 'app-place-card',
  imports: [CommonModule, PriceComponent, RatingComponent],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css',
})
export class PlaceCardComponent {
  @Input() images: any[] = [];
  @Input() values: any[] = [];
  @Input() country: [] = [];
  @Input() title: any;

  @Input() card: string = '';
  @Input() infoClass: string = '';

  @Input() ParentClass: string = '';

  @Input() rating: any;
  @Input() review: any;
  @Input() member_price: any;
  @Input() price!: number;
  @Input() sign_p: any;
  currentIndex = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
