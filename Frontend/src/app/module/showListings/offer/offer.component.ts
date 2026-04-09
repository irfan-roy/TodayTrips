import { Component, Input } from '@angular/core';
import { SliderComponent } from '../../slider/slider.component';
import { PlaceCardComponent } from '../../cards/place-card/place-card.component';
import { CommonModule, NgForOf } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { PaymentComponent } from '../payment/payment.component';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';

@Component({
  selector: 'app-offer',
  imports: [
    SliderComponent,
    PlaceCardComponent,
    RatingComponent,
    PaymentComponent,
    ToggleShowComponent,
    CommonModule,
  ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
})
export class OfferComponent {
  @Input() offers: any;
  @Input() data: any;
  // offers = [
  //   {
  //     title: 'Room, 1 King Bed (Mumbai View)',
  //     images: [
  //       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  //       'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ],
  //     provides: [
  //       {
  //         icon: 'fa-solid fa-square-parking',
  //         name: 'Free self parking',
  //       },
  //       {
  //         icon: 'fa-solid fa-coffee',
  //         name: 'Free breakfast',
  //       },
  //     ],
  //     amenities: [
  //       { name: '474 sq ft', icon: 'fa-solid fa-expand' },
  //       { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
  //       { name: '1 King Bed', icon: 'fa-solid fa-bed' },
  //       { name: 'Reserve now, pay deposit', icon: 'fa-solid fa-credit-card' },
  //       { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
  //       { name: 'Garden view', icon: 'fa-solid fa-tree' },
  //     ],

  //     extras: [
  //       { name: 'Extras' },
  //       [
  //         { name: 'No extras', price: '+ ₹0' },
  //         { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
  //         { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
  //       ],
  //     ],
  //     price: 8777,
  //     review: {
  //       rating: '5.0',
  //       review: 'Excellent stay',
  //       number: 12,
  //     },
  //   },
  //   {
  //     title: 'Room, 2 Single Beds',
  //     images: [
  //       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  //       'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ],
  //     provides: [
  //       {
  //         icon: 'fa-solid fa-square-parking',
  //         name: 'Free self parking',
  //       },
  //       {
  //         icon: 'fa-solid fa-coffee',
  //         name: 'Free breakfast',
  //       },
  //     ],
  //     amenities: [
  //       { name: '474 sq ft', icon: 'fa-solid fa-expand' },
  //       { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
  //       { name: '1 King Bed', icon: 'fa-solid fa-bed' },
  //       { name: 'Reserve now, pay deposit', icon: 'fa-solid fa-credit-card' },
  //       { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
  //       { name: 'Garden view', icon: 'fa-solid fa-tree' },
  //     ],

  //     extras: [
  //       { name: 'Cancellation policy' },
  //       [
  //         { name: 'Non-refundable', price: '+ ₹0' },
  //         { name: 'Fully refundable before 28 Jul', price: '+ ₹738' },
  //       ],
  //     ],
  //     price: 8777,
  //     review: {
  //       rating: '4.5',
  //       review: 'Veery good',
  //       number: 5,
  //     },
  //   },
  //   {
  //     title: 'Luxury Suite, 1 King Bed (Sea View)',
  //     images: [
  //       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  //       'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ],
  //     provides: [
  //       { icon: 'fa-solid fa-square-parking', name: 'Free valet parking' },
  //       { icon: 'fa-solid fa-champagne-glasses', name: 'Welcome drink' },
  //     ],
  //     amenities: [
  //       { name: '620 sq ft', icon: 'fa-solid fa-expand' },
  //       { name: 'Sleeps 3', icon: 'fa-solid fa-user-group' },
  //       { name: '1 King Bed', icon: 'fa-solid fa-bed' },
  //       { name: 'Private balcony', icon: 'fa-solid fa-mountain-sun' },
  //       { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
  //       { name: 'Ocean view', icon: 'fa-solid fa-water' },
  //     ],
  //     extras: [
  //       { name: 'Extras' },
  //       [
  //         { name: 'Standard', price: '+ ₹0' },
  //         { name: 'Breakfast + Lounge Access', price: '+ ₹1,200' },
  //         { name: 'Spa Package', price: '+ ₹4,000' },
  //       ],
  //     ],
  //     price: 12500,
  //     review: {
  //       rating: '4.5',
  //       review: 'Veery good',
  //       number: 5,
  //     },
  //   },
  //   {
  //     title: 'Premium Room, 1 Queen Bed',
  //     images: [
  //       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  //       'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ],
  //     provides: [
  //       { icon: 'fa-solid fa-square-parking', name: 'Free self parking' },
  //       { icon: 'fa-solid fa-mug-hot', name: 'Complimentary tea/coffee' },
  //     ],
  //     amenities: [
  //       { name: '500 sq ft', icon: 'fa-solid fa-expand' },
  //       { name: 'Sleeps 2', icon: 'fa-solid fa-user' },
  //       { name: '1 Queen Bed', icon: 'fa-solid fa-bed' },
  //       { name: 'Mini fridge', icon: 'fa-solid fa-ice-cream' },
  //       { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
  //       { name: 'City view', icon: 'fa-solid fa-city' },
  //     ],
  //     extras: [
  //       { name: 'Add-ons' },
  //       [
  //         { name: 'No extras', price: '+ ₹0' },
  //         { name: 'Breakfast + Airport Transfer', price: '+ ₹1,000' },
  //       ],
  //     ],
  //     price: 9999,
  //     review: {
  //       rating: '4.2',
  //       review: 'Pretty decent',
  //       number: 7,
  //     },
  //   },
  //   {
  //     title: 'Deluxe Twin Room, 2 Beds (Garden Side)',
  //     images: [
  //       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  //       'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     ],
  //     provides: [
  //       { icon: 'fa-solid fa-car', name: 'Complimentary parking' },
  //       { icon: 'fa-solid fa-utensils', name: 'Dinner for 2' },
  //     ],
  //     amenities: [
  //       { name: '530 sq ft', icon: 'fa-solid fa-expand' },
  //       { name: 'Sleeps 3', icon: 'fa-solid fa-user-group' },
  //       { name: '2 Twin Beds', icon: 'fa-solid fa-bed' },
  //       { name: 'Balcony seating', icon: 'fa-solid fa-chair' },
  //       { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
  //       { name: 'Garden view', icon: 'fa-solid fa-tree' },
  //     ],
  //     extras: [
  //       { name: 'Cancellation policy' },
  //       [
  //         { name: 'Non-refundable', price: '+ ₹0' },
  //         { name: 'Refundable within 24hrs', price: '+ ₹600' },
  //       ],
  //     ],
  //     price: 8550,
  //     review: {
  //       rating: '4.5',
  //       review: 'Loved the place',
  //       number: 3,
  //     },
  //   },
  // ];

  currentIndex: number = 0;

  next() {
    const images = this.offers.images;
    this.currentIndex = (this.currentIndex + 1) % images.length;
  }

  prev() {
    const images = this.offers.images;
    this.currentIndex = (this.currentIndex - 1 + images.length) % images.length;
  }

  ngOnInit() {
    console.log(this.data[0]);
  }

  room_Amenities = [
    {
      name: 'Balcony',
      icon: 'fas fa-building',
    },

    {
      name: 'Soundproofed rooms',
      icon: 'fa-solid fa-headphones',
    },
    {
      name: 'Air-conditioning',
      icon: 'fa-solid fa-snowflake',
    },
    {
      name: 'Heating',
      icon: 'fa-solid fa-fire-flame-curved',
    },
    {
      name: 'Blackout drapes/curtains',
      icon: 'fa-solid fa-align-justify',
    },
    {
      name: 'Ceiling fan',
      icon: 'fa-solid fa-fan',
    },
  ];

  room_amenities = [
    {
      area: 'Bathroom',
      icon: 'fa-solid fa-bath',
      information: [
        'Dressing gowns',
        'Free toiletries',
        'Private bathroom',
        'Shower',
        'Towels',
      ],
    },
    {
      area: 'Bedroom',
      icon: 'fa-solid fa-bed',
      information: [
        'Air conditioning (climate-controlled)',
        'Bed sheets',
        'Turndown service',
      ],
    },
    {
      area: 'Entertainment',
      icon: 'fa-solid fa-check',
      information: ['TV with cable channels'],
    },
    {
      area: 'Food and drink',
      icon: 'fa-solid fa fs-kitchen',
      information: ['Coffee/tea maker', 'Minibar', 'Room service (24 hours)'],
    },
    {
      area: 'Internet',
      icon: 'fa-solid fa-wifi',
      information: ['Free WiFi'],
    },
    {
      area: 'More',
      icon: 'fa-solid fa-check',
      information: [
        'Connecting rooms available',
        'Desk',
        'Electrical adapters',
        'Free daily newspapers',
        'Housekeeping (daily)',
        'Iron/ironing board (on request)',
        'Laptop workspace',
        'Phone',
        'Safe',
      ],
    },
    {
      area: 'Safety',
      icon: 'fa-solid fa-check',
      information: ['Fire extinguisher', 'First aid kit', 'Security system'],
    },
  ];
  display = false;
  toggle() {
    this.display = !this.display;
  }
}
