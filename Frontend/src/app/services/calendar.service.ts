import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  startDate = new BehaviorSubject<Date | null>(null);
  endDate = new BehaviorSubject<Date | null>(null);

  setStartDate(date: Date) {
    console.log('Service: Start date updated to', date.getDate());
    this.startDate.next(date);
  }

  setEndDate(date: Date) {
    console.log('Service: End date updated to', date.getDate());
    this.endDate.next(date);
  }
  setDates(start: Date, end: Date) {
    this.startDate.next(start);
    this.endDate.next(end);
  }
}
