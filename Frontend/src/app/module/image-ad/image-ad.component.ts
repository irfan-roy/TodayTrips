import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-ad',
  imports: [],
  templateUrl: './image-ad.component.html',
  styleUrl: './image-ad.component.css',
})
export class ImageAdComponent {
  @Input() ads: any = {};
  // @Input() imageUrl = '';
  // @Input() package = '';
  // @Input() action = '';
}
