import { Component, Input, effect } from '@angular/core';
import { PlaceCardComponent } from '../../cards/place-card/place-card.component';
import { NgForOf } from '@angular/common';
import { PriceComponent } from '../../showListings/price/price.component';
import { RatingComponent } from '../../showListings/rating/rating.component';
import { Router } from '@angular/router';
import { FavoriteListingsService } from '../../../services/FavoriteListing.service';
@Component({
  selector: 'app-product',
  imports: [PlaceCardComponent, NgForOf, PriceComponent, RatingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() listing: any;
  ngOnChange() {
    console.log('listings', this.listing);
  }

  // router
  constructor(
    private route: Router,
    private dataService: FavoriteListingsService
  ) {}
  handleListingId(id: any) {
    this.route.navigate(['listing', id]);
  }
  ngOnInit() {
    this.dataService.getFavorites().subscribe((item) => {
      console.log(item);
    });
  }
  handleFavorite(data: any) {
    this.dataService.addFavorites(data).subscribe((res) => {
      console.log(res);
    });
  }
}
