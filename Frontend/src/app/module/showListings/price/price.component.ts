import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-price',
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  @Input() originalPrice!: number;
  @Input() nights!: number;
  @Input() days: string | number = '';
  @Input() reserve: any;
  @Input() buttonName: any;
  @Input() payInfo: any;
  @Input() dayClass: any;
  @Input() id: any;
  @Input() value: any;
  @Input() offer: any;
  @Input() data: any;
  get discountedPrice(): number {
    return this.originalPrice * 0.9;
  }

  get totalBeforeTax(): number {
    return this.discountedPrice * this.nights;
  }

  get gst(): number {
    return this.totalBeforeTax * 0.18;
  }

  get platformFee(): number {
    return this.totalBeforeTax * 0.03;
  }

  get total(): number {
    return Math.round(this.totalBeforeTax + this.gst + this.platformFee);
  }

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  send(value: any, id?: any) {
    const listingId = id || this.id;

    switch (value) {
      case 'display':
        this.displayChange.emit(!this.display);
        break;

      case 'payment':
        if (!listingId) {
          console.error('ID is missing for payment navigation!');
          return;
        }
        if (this.offer) {
          this.router.navigate(['/listing', listingId, 'secure-payment'], {
            queryParams: {
              offer: JSON.stringify(this.offer),
              total: this.total,
              nights: this.nights,
              days: this.days,
              data: JSON.stringify(this.data),
            },
          });
        }
        break;

      default:
        console.warn(`Unknown value: ${value}`);
    }
  }

  ngOnInit() {
    if (this.offer) console.log(this.data);
  }
}
