import { CommonModule, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PriceComponent } from '../price/price.component';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [NgFor, PriceComponent, ToggleShowComponent, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  @Input() originalPrice!: any;
  @Input() nights!: number;
  @Input() extras: any[] = [];
  @Input() offer: any;
  @Input() TravelData: any;

  days = 4;

  reserve = true;
  ngOnInit() {
    console.log(this.TravelData);
  }

  display = false;

  toggle(displayValue: boolean) {
    this.display = displayValue;
  }
}
