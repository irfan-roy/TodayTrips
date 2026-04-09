import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from '../offer/offer.component';
import { CalenderComponent } from '../calender/calender.component';
import { CalendarService } from '../../../services/calendar.service';
import { CalendarComponent } from '../../searches/calendar/calendar.component';
import { TravelerComponent } from '../../searches/traveler/traveler.component';

@Component({
  selector: 'app-choose-room',
  imports: [
    CalenderComponent,
    CommonModule,
    OfferComponent,
    CalendarComponent,
    TravelerComponent,
  ],
  templateUrl: './choose-room.component.html',
  styleUrl: './choose-room.component.css',
})
export class ChooseRoomComponent {
  @Input() offers: any;

  constructor(private calendarService: CalendarService) {}

  TodayDate: any;
  laterDate: any;
  Traveller = '1 Room, 3 travellers';
  values: any[] = [];
  listing: any = [];

  currentComponent: 'travelers' | 'start-calendar' | 'end-calendar' | null =
    null;

  startDate = false;
  endDate = false;
  traveller = false;

  sendingData: object[] = [];
  ngOnInit() {
    this.TodayDate = new Date();
    const today = new Date();
    this.laterDate = new Date(today.setDate(today.getDate() + 2)); // Fixed: wrap in new Date()

    this.values = [
      {
        name: 'Start date',
        icon: 'fa-solid fa-calendar-week',
        date: this.TodayDate,
        toggle: 'startDate',
      },
      {
        name: 'End date',
        icon: 'fa-solid fa-calendar-week',
        date: this.laterDate,
        toggle: 'endDate',
      },
      {
        name: 'Travellers',
        icon: 'fa-solid fa-user-large',
        data: this.Traveller,
        toggle: 'travelers', // Fixed: changed from 'traveller' to match the type
      },
    ];

    this.sendingData = [
      {
        date: {
          startDate: this.TodayDate,
          endDate: this.laterDate,
        },
        traveller: this.Traveller,
      },
    ];

    console.log(this.sendingData);

    this.calendarService.startDate.subscribe((date) => {
      if (date) {
        this.TodayDate = date;
        this.values[0].date = date;
        this.updateSendingData();
      }
    });

    this.calendarService.endDate.subscribe((date) => {
      if (date) {
        this.laterDate = date;
        this.values[1].date = date;
        this.updateSendingData();
      }
    });
  }

  toggleComponent(value: any) {
    if (value == 'startDate') {
      this.startDate = !this.startDate;
    } else if (value == 'endDate') {
      this.endDate = !this.endDate;
    } else {
      this.traveller = !this.traveller;
    }
  }

  updateSendingData() {
    this.sendingData = [
      {
        date: {
          startDate: this.TodayDate,
          endDate: this.laterDate,
        },
        traveller: this.Traveller,
      },
    ];
  }
}
