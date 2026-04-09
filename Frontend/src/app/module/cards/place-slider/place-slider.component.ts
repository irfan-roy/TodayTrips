import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PlaceCardComponent } from '../place-card/place-card.component';
import { HeadingComponent } from '../../heading/heading.component';
import { OnChanges, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-place-slider',
  imports: [PlaceCardComponent, HeadingComponent, NgFor],
  templateUrl: './place-slider.component.html',
  styleUrl: './place-slider.component.css',
})
export class PlaceSliderComponent {
  @Input() heading = '';
  @Input() text = '';
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @Input() cards: any[] = [];

  sign_p = 'Sign in for Member price';

  ngOnChanges() {
    if (this.cards.length > 0) {
      // console.log(this.cards[0].images);
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this.cards);
  //   if (changes['cards']) {
  //     console.log('Received cards in child:', this.cards); //
  //   }
  // }

  next() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  prev() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
}
