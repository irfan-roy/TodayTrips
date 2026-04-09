import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: any;
}

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @Output() dateRangeSelected = new EventEmitter<string>();

  currentDate = new Date();
  startDate: Date | null = null;
  endDate: Date | null = null;

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];

  ngOnInit() {
    console.log('start date', this.selectDate);
    console.log('start end', this.endDate);
    this.generateCalendar();
  }

  getCurrentMonthYear(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }

  generateCalendar() {
    this.calendarDays = [];

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const prevDays = firstDay.getDay();
    const totalDays = lastDay.getDate();
    const nextDays = 6 - lastDay.getDay();

    // Previous month
    for (let i = prevDays; i > 0; i--) {
      const date = new Date(year, month - 1, prevLastDay.getDate() - i + 1);
      this.calendarDays.push(this.createDay(date, false));
    }

    // Current month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      this.calendarDays.push(this.createDay(date, true));
    }

    // Next month
    for (let i = 1; i <= nextDays; i++) {
      const date = new Date(year, month + 1, i);
      this.calendarDays.push(this.createDay(date, false));
    }
  }

  createDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    const today = new Date();
    const isSelected =
      (!!this.startDate &&
        date.toDateString() === this.startDate.toDateString()) ||
      (!!this.endDate && date.toDateString() === this.endDate.toDateString());

    const isInRange =
      this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate;

    return {
      date,
      dayNumber: date.getDate(),
      isCurrentMonth,
      isToday:
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear(),
      isSelected,
      isInRange,
    };
  }

  selectDate(day: CalendarDay) {
    if (!day.isCurrentMonth) return;

    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = day.date;
      this.endDate = null;
    } else if (!this.endDate && day.date >= this.startDate) {
      this.endDate = day.date;
    }

    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    this.generateCalendar();

    this.dateRangeSelected.emit(this.formatSelectedRange());
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  goToToday() {
    this.currentDate = new Date();
    this.generateCalendar();
  }

  clearSelection() {
    this.startDate = null;
    this.endDate = null;
    this.generateCalendar();
  }

  formatSelectedRange(): string {
    if (this.startDate && this.endDate) {
      return (
        this.startDate.toDateString() + ' → ' + this.endDate.toDateString()
      );
    } else if (this.startDate) {
      return 'Start: ' + this.startDate.toDateString();
    }
    return '';
  }

  getDayClasses(day: CalendarDay): string {
    return [
      'h-12  w-12 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2',
      day.isToday ? 'ring-2 ring-blue-400' : '',
      day.isSelected ? 'bg-blue-600 text-white' : '',
      day.isInRange ? 'bg-blue-100 text-blue-800' : '',
      !day.isCurrentMonth ? 'text-gray-400' : 'text-gray-800 hover:bg-gray-100',
    ].join(' ');
  }

  trackByDate(index: number, day: CalendarDay): string {
    return day.date.toDateString();
  }
  display: boolean = true;

  toggle() {
    this.display = !this.display;
  }
}
