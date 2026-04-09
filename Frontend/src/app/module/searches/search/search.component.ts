import { Component } from '@angular/core';
import { TravelerComponent } from '../traveler/traveler.component';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../../services/calendar.service';
import { CalenderComponent } from '../../showListings/calender/calender.component';
import { OfferComponent } from '../../showListings/offer/offer.component';
import { MapComponent } from '../map/map.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-search',
  imports: [
    TravelerComponent,
    CommonModule,
    CalenderComponent,
    TravelerComponent,
    OfferComponent,
    CommonModule,
    MapComponent,
    CalendarComponent,
    LocationComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  Traveller = ['1 Room', ' 3 travelers'];
  values: any[] = [];

  traveller: boolean = false;
  date: boolean = false;
  location: boolean = false;
  selectLocation: any;
  selectedRange: any;

  ngOnInit() {
    this.values = [
      {
        name: 'Where are you ?',
        icon: 'fa-solid fa-location-dot',
        data: this.selectLocation,
        toggle: 'location',
      },
      {
        name: 'Travelers',
        icon: 'fa-solid fa-user-large',
        data: this.Traveller, // Traveler count
        toggle: 'traveller',
      },
      {
        name: 'Date',
        icon: 'fa-solid fa-calendar-week',
        data: this.selectedRange, // Date range
        toggle: 'date',
      },
    ];

    if (this.selectLocation) {
      console.log(this.selectLocation.name);
    }
  }

  onDateRangeChange(range: string) {
    console.log('select range', range);
    this.selectedRange = range;

    // update in values array
    const index = this.values.findIndex((v) => v.toggle === 'date');
    if (index !== -1) {
      this.values[index].data = range;
    }
  }

  toggleComponent(toggle: string) {
    if (toggle === 'traveller') {
      this.traveller = !this.traveller;
    } else if (toggle === 'date') {
      this.date = !this.date;
    } else if (toggle === 'location') {
      this.location = !this.location;
    }
  }

  getDisplayDate(value: any): string {
    if (value.toggle === 'date') {
      return value.data ? value.data : new Date().toDateString(); // fallback = today
    }
    return '';
  }

  // location

  onSelectLocation(location: Event) {
    this.selectLocation = location;
    this.values[0].data = this.selectLocation.name.toString();
    console.log(this.selectLocation.name);
  }
}
