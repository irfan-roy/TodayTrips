import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../module/card/card.component';
import { SliderComponent } from '../module/slider/slider.component';
import { AdsComponent } from '../module/ads/ads.component';
import { CommonModule, NgFor } from '@angular/common';
import { ImageAdComponent } from '../module/image-ad/image-ad.component';
import { ImageSliderComponent } from '../module/cards/image-slider/image-slider.component';
import { PromotionComponent } from '../module/All_Ads/promotion/promotion.component';
import { PlaceCardComponent } from '../module/cards/place-card/place-card.component';
import { PlaceSliderComponent } from '../module/cards/place-slider/place-slider.component';
import { AllListingsComponent } from '../module/listings/all-listings/all-listings.component';
import { HolidaysComponent } from '../module/showListings/filters/holidays/holidays.component';
import { HeadingComponent } from '../module/heading/heading.component';
import { FilterComponent } from '../module/showListings/filter/filter.component';
import { MainSliderComponent } from '../module/main-slider/main-slider.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    CardComponent,
    SliderComponent,
    AdsComponent,
    CommonModule,
    ImageAdComponent,
    ImageSliderComponent,
    PromotionComponent,
    PlaceCardComponent,
    PlaceSliderComponent,
    RouterOutlet,
    AllListingsComponent,
    HolidaysComponent,
    HeadingComponent,
    FilterComponent,
    MainSliderComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private listing: ListingsService, private route: Router) {}

  listings: any[] = [];

  ngOnInit() {
    this.listing.getListing().subscribe(
      (data) => {
        this.listings = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onCardClickId(id: any) {
    this.route.navigateByUrl('/listing');
  }
  country = 'Best Country for Trip';
  ad = {
    imageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',

    package: 'Best deal of holiday package',
    action: 'Book now',
  };

  image_card_heading = 'Discover your new favourites stay';
  image_cards = [
    {
      imageUrl:
        '//plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Apartment',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Pool',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Villa',
    },
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Cottage',
    },
    {
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Penthouse',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Studio',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1639091435585-508ff02f0b07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Loft',
    },

    {
      imageUrl:
        'https://images.unsplash.com/photo-1528913775512-624d24b27b96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      place: 'Beach House',
    },
  ];

  // filter for winter's
  winterFilters = [
    'Snow Adventures',
    'Mountain Retreats',
    'Festive Markets',
    'Cozy Stays',
    'Ice Sports',
    'Winter Sports',
    'Winter Wellness',
  ];
  filteredPlaces = this.listings;

  handleFilteredData(data: any[]) {
    this.filteredPlaces = data;
  }
}
