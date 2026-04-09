import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlaceCardComponent } from '../../cards/place-card/place-card.component';
import { ReviewContainerComponent } from '../review-container/review-container.component';
import { RatingComponent } from '../rating/rating.component';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';

@Component({
  selector: 'app-secure-payment',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlaceCardComponent,
    RatingComponent,
    RouterModule,
    ToggleShowComponent,
  ],
  templateUrl: './secure-payment.component.html',
  styleUrl: './secure-payment.component.css',
})
export class SecurePaymentComponent {
  checkinForm: FormGroup;
  paymentForm: FormGroup;
  display = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.checkinForm = this.fb.group({
      firstName: ['md', [Validators.required]],
      surname: ['irfan', [Validators.required]],
      email: ['new@gmail.com', [Validators.required, Validators.email]],
      emailOffers: [true, [Validators.required]],
      countryCode: ['+91', [Validators.required]],
      phoneNumber: ['7855462882', [Validators.required]],
      textAlerts: [true],
    });

    this.paymentForm = this.fb.group({
      cardName: ['Visa', [Validators.required]],
      cardNumber: [
        '4855 5852 7877 1045',
        [Validators.required, Validators.minLength(18)],
      ],
      months: ['3', [Validators.required]],
      years: ['4', [Validators.required]],
      securityCode: ['7844', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.checkinForm.valid) {
      console.log('Check-in form submitted:', this.checkinForm.value);
      this.display = !this.display;
    } else {
      console.log('Check-in form is invalid');
      this.markFormGroupTouched(this.checkinForm);
    }
  }

  onPaymentSubmit() {
    if (this.paymentForm.valid) {
      console.log('Payment form submitted:', this.paymentForm.value);
    } else {
      console.log('Payment form is invalid');
      this.markFormGroupTouched(this.paymentForm);
    }
  }

  onCompleteBooking() {
    if (this.checkinForm.valid && this.paymentForm.valid) {
      console.log('Complete booking:', {
        checkin: this.checkinForm.value,
        payment: this.paymentForm.value,
      });
      this.display = !this.display;
      // Handle complete booking logic here
    } else {
      console.log('Forms are invalid');
      this.markFormGroupTouched(this.checkinForm);
      this.markFormGroupTouched(this.paymentForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  listing: any;
  offer: any;
  total: any;
  nights: any;
  days: any;
  data: any;
  ngOnInit() {
    console.log(this.checkinForm, this.paymentForm);

    this.route.paramMap.subscribe((params) => {
      console.log('Listing ID:', params.get('id'));
    });

    // get extra details from query params
    this.route.queryParams.subscribe((params) => {
      try {
        // Parse the JSON string back to object
        this.offer = params['offer'] ? JSON.parse(params['offer']) : null;
      } catch (error) {
        console.error('Error parsing offer:', error);
        this.offer = null;
      }

      this.total = params['total'] ? Number(params['total']) : null;
      this.nights = params['nights'] ? Number(params['nights']) : null;
      this.days = params['days'] ? Number(params['days']) : null;

      try {
        this.data = params['data'] ? JSON.parse(params['data']) : null;
      } catch (error) {
        console.log('Error parsing data', error);
        this.data = null;
      }

      console.log('Offer:', this.offer);
      console.log('Total:', this.total);
      console.log('Nights:', this.nights);
      console.log('Days:', this.days);
      console.log('data:', this.data);
    });

    // time
    this.setCountdown();
  }

  // display

  toggle() {
    this.display = !this.display;
  }

  // timer
  @Input() endTime: string = '5d 13h 22m 41s';

  displayTime: string = '';

  private remainingSeconds!: number;

  private intervalId: any;

  setCountdown() {
    this.remainingSeconds = this.parseTimeStringToSecond(this.endTime);

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
    this.updateTimer();
  }

  parseTimeStringToSecond(timeStr: string) {
    const daysMatch = timeStr.match(/(\d+)d/);
    const hoursMatch = timeStr.match(/(\d+)h/);
    const minutesMatch = timeStr.match(/(\d+)m/);
    const secondMatch = timeStr.match(/(\d+)s/);

    const days = daysMatch ? parseInt(daysMatch[1]) : 0;
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    const seconds = secondMatch ? parseInt(secondMatch[1]) : 0;

    return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  }

  updateTimer() {
    if (this.remainingSeconds <= 0) {
      this.displayTime = '0d 0h 0m 0s';
      clearInterval(this.intervalId);
      return;
    }

    const days = Math.floor(this.remainingSeconds / (60 * 60 * 24));
    const hours = Math.floor(
      (this.remainingSeconds % (60 * 60 * 24)) / (60 * 60)
    );
    const minutes = Math.floor((this.remainingSeconds % (60 * 60)) / 60);
    const seconds = this.remainingSeconds % 60;

    this.displayTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    this.remainingSeconds--;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
