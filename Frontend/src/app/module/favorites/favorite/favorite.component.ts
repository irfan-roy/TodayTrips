import { Component } from '@angular/core';
import { FavCardComponent } from '../fav-card/fav-card.component';
import { FavCheckoutComponent } from '../fav-checkout/fav-checkout.component';

@Component({
  selector: 'app-favorite',
  imports: [FavCardComponent, FavCheckoutComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {}
