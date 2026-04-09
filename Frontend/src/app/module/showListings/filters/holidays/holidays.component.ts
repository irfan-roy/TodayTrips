import { Component, Input } from '@angular/core';
import { FilterComponent } from '../../filter/filter.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../../slider/slider.component';
import { HeadingComponent } from '../../../heading/heading.component';
import { CardComponent } from '../../../card/card.component';

@Component({
  selector: 'app-holidays',
  imports: [
    FilterComponent,
    CommonModule,
    SliderComponent,
    HeadingComponent,
    CardComponent,
  ],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css',
})
export class HolidaysComponent {
  @Input() places: any[] = [];

  filters: string[] = [
    'Beach',
    'Culture',
    'Ski',
    'Family',
    'Wellness and Relaxation',
  ];

  heading = 'Best Place for summer trip in India';

  filteredPlaces = this.places;

  handleFilteredData(data: any[]) {
    if (data) {
      this.filteredPlaces = data;
    } else {
      this.filteredPlaces = this.places;
    }
    console.log(data);
  }

  onCardClickId(data: any[]) {
    console.log(data);
  }
}
