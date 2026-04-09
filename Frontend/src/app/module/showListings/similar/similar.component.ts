import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PlaceCardComponent } from '../../cards/place-card/place-card.component';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../slider/slider.component';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-similar',
  imports: [
    PlaceCardComponent,
    RatingComponent,
    CommonModule,
    SliderComponent,
    CommonModule,
    PriceComponent,
  ],
  templateUrl: './similar.component.html',
  styleUrl: './similar.component.css',
})
export class SimilarComponent {
  @Input() similar: any;
  ratings: any[] = [];

  ngOnInit() {
    if (
      this.similar &&
      this.similar.length > 0 &&
      this.similar[0].ratings?.length > 0
    ) {
      this.ratings.push(this.similar[0].ratings[0]);
    }

    console.log(this.similar);
  }

  title = 'Similar items';
  offers = [
    {
      title: 'Room, 1 King Bed (Mumbai View)',
      place: 'Mumbai',
      location: 'India',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop',
      ],
      amenities: [
        { name: 'Air conditioning', icon: 'fa-solid fa-snowflake' },
        { name: 'Flat-screen TV', icon: 'fa-solid fa-tv' },
        { name: 'Mini fridge', icon: 'fa-solid fa-bottle-water' },
        { name: 'Daily housekeeping', icon: 'fa-solid fa-broom' },
        { name: 'Coffee maker', icon: 'fa-solid fa-mug-hot' },
        { name: 'Soundproof rooms', icon: 'fa-solid fa-ear-deaf' },
      ],
      price: 8777,
      review: { rating: '5.0', review: 'Excellent stay', number: 12 },
    },
    {
      title: 'Suite, 2 Queen Beds (Lake View)',
      place: 'Udaipur',
      location: 'India',
      images: [
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
        'https://images.unsplash.com/photo-1505691723518-36a0f673b1f4',
      ],
      amenities: [
        { name: 'Balcony', icon: 'fa-solid fa-umbrella' },
        { name: 'Jacuzzi', icon: 'fa-solid fa-hot-tub-person' },
        { name: 'Room service', icon: 'fa-solid fa-bell-concierge' },
        { name: 'Luxury toiletries', icon: 'fa-solid fa-pump-soap' },
        { name: 'Smart lighting', icon: 'fa-solid fa-lightbulb' },
        { name: 'Evening turndown', icon: 'fa-solid fa-bed-pulse' },
      ],
      price: 12500,
      review: { rating: '4.8', review: 'Serene and beautiful', number: 18 },
    },
    {
      title: 'Luxury Villa (Oceanfront)',
      place: 'Goa',
      location: 'India',
      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      ],
      amenities: [
        { name: 'Infinity pool', icon: 'fa-solid fa-water-ladder' },
        { name: 'Private chef', icon: 'fa-solid fa-user-tie' },
        { name: 'Home theatre', icon: 'fa-solid fa-film' },
        { name: 'Outdoor shower', icon: 'fa-solid fa-shower' },
        { name: 'Barbecue grill', icon: 'fa-solid fa-drumstick-bite' },
        { name: 'Direct beach access', icon: 'fa-solid fa-umbrella-beach' },
      ],
      price: 35000,
      review: { rating: '4.9', review: 'Paradise on earth', number: 22 },
    },
    {
      title: 'Deluxe Room (Mountain View)',
      place: 'Manali',
      location: 'India',
      images: [
        'https://plus.unsplash.com/premium_photo-1664392116172-814eee819397?q=80&w=989&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601918774946-2585a72b3c09',
      ],
      amenities: [
        { name: 'Fireplace', icon: 'fa-solid fa-fire' },
        { name: 'Heated floors', icon: 'fa-solid fa-temperature-high' },
        { name: 'Hot tub', icon: 'fa-solid fa-hot-tub-person' },
        { name: 'Panoramic windows', icon: 'fa-solid fa-mountain-sun' },
        { name: 'Hiking trails nearby', icon: 'fa-solid fa-person-hiking' },
        { name: 'Complimentary snacks', icon: 'fa-solid fa-cookie-bite' },
      ],
      price: 7800,
      review: { rating: '4.6', review: 'Cosy and peaceful', number: 10 },
    },
    {
      title: 'Executive Suite (City Skyline)',
      place: 'Bangalore',
      location: 'India',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      ],
      amenities: [
        { name: 'Executive desk', icon: 'fa-solid fa-briefcase' },
        { name: 'High-speed internet', icon: 'fa-solid fa-wifi' },
        { name: 'In-room safe', icon: 'fa-solid fa-lock' },
        { name: 'Complimentary drinks', icon: 'fa-solid fa-champagne-glasses' },
        { name: 'City skyline view', icon: 'fa-solid fa-city' },
        { name: 'Fitness access', icon: 'fa-solid fa-dumbbell' },
      ],
      price: 14500,
      review: {
        rating: '4.7',
        review: 'Perfect for business trips',
        number: 8,
      },
    },
    {
      title: 'Beachfront Cottage',
      place: 'Andaman Islands',
      location: 'India',
      images: [
        'https://plus.unsplash.com/premium_photo-1682285210821-5d1b5a406b97?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      ],
      amenities: [
        { name: 'Hammock', icon: 'fa-solid fa-chair' },
        { name: 'Snorkeling gear', icon: 'fa-solid fa-mask-snorkel' },
        { name: 'Private barbecue', icon: 'fa-solid fa-fire-burner' },
        { name: 'Ocean kayak', icon: 'fa-solid fa-ship' },
        { name: 'Outdoor dining', icon: 'fa-solid fa-utensils' },
        { name: 'Secluded beach', icon: 'fa-solid fa-umbrella-beach' },
      ],
      price: 20000,
      review: { rating: '5.0', review: 'Heavenly experience', number: 15 },
    },
    {
      title: 'Palace Heritage Room',
      place: 'Jaipur',
      location: 'India',
      images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e'],
      amenities: [
        { name: 'Canopy bed', icon: 'fa-solid fa-bed' },
        { name: 'Antique furniture', icon: 'fa-solid fa-chair' },
        { name: 'Royal butler', icon: 'fa-solid fa-user-tie' },
        { name: 'Silk linens', icon: 'fa-solid fa-blanket' },
        { name: 'Traditional music', icon: 'fa-solid fa-music' },
        { name: 'Cultural tours', icon: 'fa-solid fa-landmark' },
      ],
      price: 15500,
      review: { rating: '4.9', review: 'Regal comfort', number: 20 },
    },
    {
      title: 'Houseboat Suite, Alleppey',
      place: 'Alleppey',
      location: 'India',
      images: [
        'https://plus.unsplash.com/premium_photo-1687995673113-865539d3b21d?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583416750470-787628d14bc0',
      ],
      amenities: [
        { name: 'Deck loungers', icon: 'fa-solid fa-chair' },
        { name: 'Fishing kit', icon: 'fa-solid fa-fish' },
        { name: 'Onboard chef', icon: 'fa-solid fa-user-tie' },
        { name: 'Open-air dining', icon: 'fa-solid fa-utensils' },
        { name: 'Sunset view', icon: 'fa-solid fa-sun' },
        { name: 'Canoe ride', icon: 'fa-solid fa-water' },
      ],
      price: 13500,
      review: { rating: '4.8', review: 'Unique and relaxing', number: 11 },
    },
  ];

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
}
