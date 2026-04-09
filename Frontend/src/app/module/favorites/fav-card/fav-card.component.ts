import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteListingsService } from '../../../services/FavoriteListing.service';

@Component({
  selector: 'app-fav-card',
  imports: [CommonModule],
  templateUrl: './fav-card.component.html',
  styleUrl: './fav-card.component.css',
})
export class FavCardComponent implements OnChanges {
  display = false;
  favorites: any = [];
  constructor(private dataService: FavoriteListingsService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    // console.log(this.dataService.favorites$.forEach((el) => console.log(el)));
    this.dataService.getFavorites().subscribe((item) => {
      this.favorites = [...item];
      console.log('favorites', this.favorites);
    });
  }
  toggle() {
    this.display = !this.display;
  }
}
