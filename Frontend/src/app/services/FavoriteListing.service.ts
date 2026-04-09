import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteListingsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/today-trips';

  // private favoritesSubject = new BehaviorSubject<any>([]);
  // favorites$ = this.favoritesSubject.asObservable();

  addFavorites(item: any) {
    return this.http.post<any>(`${this.url}/favorites-data`, item);

    // const currentFavorites = this.favoritesSubject.value;
    // const exists =
    // currentFavorites.filter((fav: any) => fav.id == item.id).length > 0;
    // if (!exists) {
    //   const updatedFavorites = [...currentFavorites, item];
    //   this.favoritesSubject.next(updatedFavorites);
    // }
  }

  removeFavorite(itemId: any) {
    // const currentFavorites = this.favoritesSubject.value;
    // const updatedFavorites = currentFavorites.filter(
    //   (fav: any) => fav.id == itemId
    // );
    // this.favoritesSubject.next(updatedFavorites);
  }

  // return favorites values
  getFavorites() {
    // return this.favoritesSubject.value;
    return this.http.get<any>(`${this.url}/favorites`);
  }

  // check if item is favorite
  // isFavorite(itemId: any): boolean {
  //   return this.favoritesSubject.value.some((fav: any) => fav.id === itemId);
  // }

  // clear all favorites
  clearFavorites() {
    // this.favoritesSubject.next([]);
  }

  // get favorites count
  getFavoritesCount() {
    // return this.favoritesSubject.value.length;
  }
}
