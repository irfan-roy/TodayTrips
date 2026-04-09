import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';

@Component({
  selector: 'app-calender',
  imports: [CommonModule, NgIf],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
})
export class CalenderComponent implements AfterViewInit {
  @ViewChild('startBtn') startBtnRef!: ElementRef<HTMLDivElement>;

  @ViewChild('endBtn') endBtnRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    // Now you can access the div element
    console.log(this.startBtnRef.nativeElement); // Logs the actual <div> DOM element
    // Example: change background color

    this.calendarService.setDates(this.startDate!, this.endDate!);
  }
  display = true;
  toggle() {
    this.display = !this.display;
    console.log(this.display);
  }
  startFun(value: string) {
    if (value == 'start') {
      this.startBtnRef.nativeElement.classList.add('white');
      this.endBtnRef.nativeElement.classList.remove('white');
    } else {
      this.endBtnRef.nativeElement.classList.add('white');
      this.startBtnRef.nativeElement.classList.remove('white');
    }
  }

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth(); // 0-based index
  daysInMonth: Date[] = [];

  startDate: Date | null = new Date();
  endDate: Date | null = new Date(new Date().setDate(new Date().getDate() + 2));

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(private calendarService: CalendarService) {
    this.generateCalendar();
  }

  generateCalendar() {
    const date = new Date(this.currentYear, this.currentMonth, 1);
    const days: Date[] = [];

    while (date.getMonth() === this.currentMonth) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    this.daysInMonth = days;
  }

  getFirstDayOffset(): number {
    return new Date(this.currentYear, this.currentMonth, 1).getDay();
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  onDateClick(date: Date) {
    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = date;
      this.endDate = null;
    } else if (date >= this.startDate) {
      this.endDate = date;
    } else {
      this.startDate = date;
      this.endDate = null;
    }

    if (this.startDate && this.endDate) {
      this.calendarService.setDates(this.startDate, this.endDate);
      console.log(
        `Date range updated: ${this.startDate.toDateString()} to ${
          this.endDate
        }`
      );
    }
  }

  isSelected(date: Date): boolean {
    return !!(
      (this.startDate &&
        this.startDate.toDateString() === date.toDateString()) ||
      (this.endDate && this.endDate.toDateString() === date.toDateString())
    );
  }

  isInRange(date: Date): boolean {
    return !!(
      this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate
    );
  }
  ngOnInit() {
    console.log(this.startDate);
    console.log(this.endDate);
  }
}
