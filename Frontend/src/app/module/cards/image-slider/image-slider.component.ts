import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../heading/heading.component';
import { ImageCardComponent } from '../image-card/image-card.component';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-image-slider',
  imports: [NgFor, HeadingComponent, ImageCardComponent, SliderComponent],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  @Input() heading = '';

  @Input() imageCard: any[] = [];
}
