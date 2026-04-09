import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleShowComponent } from '../../toggle-show/toggle-show.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
  selector: 'app-show-amenities',
  imports: [CommonModule, ToggleShowComponent, FilterComponent],
  templateUrl: './show-amenities.component.html',
  styleUrl: './show-amenities.component.css',
})
export class ShowAmenitiesComponent {
  information = [
    {
      name: 'All property amenities',
      properties: [
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          info: [
            'Available in all rooms: Free WiFi',
            'Available in some public areas: Free WiFi',
          ],
        },
        {
          name: 'Parking',
          icon: 'fas fa-parking',
          info: [
            'Free offsite parking within 1 metre',
            'Street parking available',
            'Free covered self parking on site',
            'Limited on-site parking',
          ],
        },
        {
          name: 'Breakfast',
          icon: 'fas fa-coffee',
          info: [
            'Buffet breakfast included',
            'Served daily from 6:30 AM – 10:30 AM',
          ],
        },
        {
          name: 'Food and drink',
          icon: 'fas fa-utensils',
          info: [
            'BA coffee shop/cafe',
            'A restaurant',
            'Coffee and tea in common areas',
          ],
        },
        {
          name: 'Gym',
          icon: 'fas fa-dumbbell',
          info: [' 24-hour fitness centre for guests 18 years old and older'],
        },
        {
          name: 'Pets',
          icon: 'fas fa-dog',
          info: [' No pets or service animals'],
        },
        {
          name: 'Things to do',
          icon: 'fas fa-spa',
          info: ['Full-service spa'],
        },
        {
          name: 'Family friendly',
          icon: 'fas fa-child',
          info: ['Laundry facilities', 'Soundproofed rooms'],
        },
        {
          name: 'Conveniences',
          icon: 'fas fa-concierge-bell',
          info: [
            '24-hour front desk',
            'Laundry facilities',
            'Lockers',
            'Luggage storage',
            'Vending machine',
          ],
        },
        {
          name: 'Guest services',
          icon: 'fas fa-hands-helping',
          info: [
            'Change of towels on request',
            'Concierge services',
            'Housekeeping (daily)',
          ],
        },
        {
          name: 'Full-service spa',
          icon: 'fas fa-hot-tub',
          info: [
            'Body scrubs',
            'Body wraps',
            'Massage',
            'Spa open daily',
            'Steam room',
          ],
        },
        {
          name: 'Accessibility',
          icon: 'fas fa-wheelchair',
          info: [
            'If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking.',
            'Area rugs in room',
            'Assistive listening devices',
            'Front entrance ramp',
            'Grab bar in shower',
            'Lift (38 centimetre wide door)',
            'Tile flooring in public areas',
            'Tile flooring in room',
            'Visual alarms in hallways',
            'Well-lit path to entrance',
            'Wheelchair accessible (may have limitations)',
            'Wheelchair-accessible business centre',
            'Wheelchair-accessible concierge desk',
            'Wheelchair-accessible gym',
            'Wheelchair-accessible public bathroom',
            'Wheelchair-accessible restaurant',
            'Wheelchair-accessible spa',
            'Wheelchairs on site',
          ],
        },
        {
          name: 'More',
          icon: 'fas fa-ellipsis-h',
          info: [
            '5 buildings',
            '5 floors',
            'Banquet hall',
            'Built in 2023',
            'Colonial architecture',
            'Smoke-free property',
          ],
        },
      ],
    },
    {
      name: 'About this property',
      information: [
        {
          name: 'Upscale hotel in the historical district',
          info: [
            'Consider a stay at Hyatt Place Bodh Gaya and take advantage of a free breakfast buffet, a coffee shop/cafe and laundry facilities. Treat yourself to a body scrub, a massage or a body wrap at the on-site spa. Free in-room WiFi is available to all guests, along with a 24-hour gym and a restaurant.',
          ],
        },
        {
          name: 'Other perks include:',
          info: [
            'Free self-parking',
            'Smoke-free property, coffee/tea in reception and luggage storage',
            'A 24-hour front desk, a vending machine and a banquet hall',
          ],
        },
        {
          name: 'Room features',
          info: [
            'All 74 rooms include comforts, such as fireplaces and premium bedding, as well as thoughtful touches, such as laptop-compatible safes and laptop-friendly workspaces.',
          ],
        },
        {
          name: 'More conveniences in all rooms include:',
          info: [
            'Bathrooms with rainfall showers and free toiletries',
            '55-inch LED TVs with premium channels',
            'Wardrobes/cupboards, electric kettles and daily housekeeping',
          ],
        },
      ],
      Languages: [{ name: 'Languages', lang: ['English', ' Hindi'] }],
    },
  ];

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
  }

  display: boolean = false;
  selectedFilter: string | null = null;

  toggle() {
    this.display = !this.display;
  }

  filters = ['Amenities', 'About'];

  onFilterChange(filter: string | null) {
    this.selectedFilter = filter;
  }

  ngOnInit() {}
}
