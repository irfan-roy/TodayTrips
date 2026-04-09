import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../interface/listing.model';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/listing';
  // get use to fetch data
  getListing(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getListingId(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${id}`);
  }

  listings: any;

  setListing(data: any) {
    this.listings = data;
  }

  // Listings methods

  // categories methods
  private category: Map<string, Listing[]> = new Map();
}
