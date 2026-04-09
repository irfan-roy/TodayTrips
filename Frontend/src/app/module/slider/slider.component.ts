import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { ImageCardComponent } from '../cards/image-card/image-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  imports: [CardComponent, CommonModule, HeadingComponent, ImageCardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  @Input() heading = '';
  @Input() text = '';
  @Input() cards: any[] = [];
  @Input() imageCard: any[] = [];

  @ContentChild(TemplateRef) cardTemplate!: TemplateRef<any>;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

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

    console.log(this.cards[0].images, 'hello');
  }

  // routing
  constructor(private route: Router) {}

  goToListing() {
    this.route.navigateByUrl('/listing');
    console.log('hello');
  }
}
