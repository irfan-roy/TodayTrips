import { Component } from '@angular/core';
import { ShowImageComponent } from '../show-image/show-image.component';
import { DetailsComponent } from '../details/details.component';
import { ListingsService } from '../../../services/listings.service';
import { CommonModule } from '@angular/common';
import { SeeMoreComponent } from '../ng-contant/see-more/see-more.component';
import { ActivatedRoute } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-show-list',
  imports: [
    ShowImageComponent,
    DetailsComponent,
    CommonModule,
    SeeMoreComponent,
    RatingComponent,
  ],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css',
})
export class ShowListComponent {
  constructor(
    private listing: ListingsService,
    private route: ActivatedRoute
  ) {}

  //
  listings: any;
  listingId: string | null = null;

  ngOnInit() {
    // Get id parameter from route
    this.listingId = this.route.snapshot.paramMap.get('id');

    if (this.listingId) {
      this.listing.getListingId(this.listingId).subscribe(
        (data) => {
          this.listings = data;
          console.log('listing data:', this.listings.offers);
          if (this.listings) {
            console.log(this.listings.offers);
          }
        },
        (error) => {
          console.error('Error fetching listing', error);
        }
      );
    } else {
      console.error('No listingId found in route');
    }
  }
}
