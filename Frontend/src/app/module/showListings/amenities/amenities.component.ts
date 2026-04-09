import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';

@Component({
  selector: 'app-amenities',
  imports: [ToggleShowComponent, CommonModule],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css',
})
export class AmenitiesComponent {
  details = [{ title: 'What this place offers', btn: 'Show all 46 amenities' }];
  amenities = [
    {
      name: 'Breakfast included',
      icon: 'fa-solid fa-utensils',
    },
    {
      name: 'Laundry',
      icon: 'fa-solid fa-shirt',
    },
    {
      name: 'Air conditioning',
      icon: 'fa-solid fa-fan',
    },
    {
      name: '43-inch HDTV',
      icon: 'fa-solid fa-tv',
    },
    {
      name: 'Kitchen',
      icon: 'fa-solid fa-kitchen-set',
    },
    {
      name: 'Free WiFi',
      icon: 'fa-solid fa-wifi',
    },
    {
      name: 'Parking included',
      icon: 'fa-solid fa-square-parking',
    },
    {
      name: 'Lift',
      icon: 'fa-solid fa-elevator',
    },
  ];
  arr: any = [0];
  constructor() {
    for (let i = 0; i < this.amenities.length; i++) {
      if (this.arr.length < 10) {
        this.arr[i] = this.amenities[i];
      }
    }
    console.log(this.arr);
  }
}
