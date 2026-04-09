import { Component, Input } from '@angular/core';
import { ShowImageComponent } from '../show-image/show-image.component';
import { NgForOf } from '@angular/common';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';
import { RoomComponent } from '../room/room.component';
import { AmenitiesComponent } from '../amenities/amenities.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ReviewContainerComponent } from '../review-container/review-container.component';
import { PriceComponent } from '../price/price.component';
import { ChooseRoomComponent } from '../choose-room/choose-room.component';
import { HostComponent } from '../host/host.component';
import { SeeMoreComponent } from '../ng-contant/see-more/see-more.component';
import { ShowAmenitiesComponent } from '../ng-contant/show-amenities/show-amenities.component';
import { RatingReviewComponent } from '../rating-review/rating-review.component';
import { AllReviewsComponent } from '../ng-contant/all-reviews/all-reviews.component';
import { PoliciesComponent } from '../policies/policies.component';
import { SimilarComponent } from '../similar/similar.component';
import { ListingsService } from '../../../services/listings.service';

@Component({
  selector: 'app-details',
  imports: [
    ShowImageComponent,
    NgForOf,
    ToggleShowComponent,
    RoomComponent,
    AmenitiesComponent,
    PriceComponent,
    ReviewContainerComponent,
    ReviewsComponent,
    ChooseRoomComponent,
    HostComponent,
    SeeMoreComponent,
    ShowAmenitiesComponent,
    RatingReviewComponent,
    AllReviewsComponent,
    PoliciesComponent,
    SimilarComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() offers: any;

  ngOnChange() {
    console.log(this.offers);
  }
}
