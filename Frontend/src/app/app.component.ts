import { Component, effect } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './module/card/card.component';
import { SliderComponent } from './module/slider/slider.component';
import { AdsComponent } from './module/ads/ads.component';
import { CommonModule, NgFor } from '@angular/common';
import { ImageAdComponent } from './module/image-ad/image-ad.component';
import { ImageSliderComponent } from './module/cards/image-slider/image-slider.component';
import { PromotionComponent } from './module/All_Ads/promotion/promotion.component';
import { PlaceCardComponent } from './module/cards/place-card/place-card.component';
import { PlaceSliderComponent } from './module/cards/place-slider/place-slider.component';
import { PlaceService } from './services/place.service';
import { RouterOutlet } from '@angular/router';
import { AllListingsComponent } from './module/listings/all-listings/all-listings.component';
import { ListingsService } from './services/listings.service';
import { HolidaysComponent } from './module/showListings/filters/holidays/holidays.component';
import { HeadingComponent } from './module/heading/heading.component';
import { FilterComponent } from './module/showListings/filter/filter.component';
import { MainSliderComponent } from './module/main-slider/main-slider.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
