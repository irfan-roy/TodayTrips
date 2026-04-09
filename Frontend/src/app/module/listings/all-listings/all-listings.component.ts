import { Component, OnInit, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { AdsComponent } from '../../ads/ads.component';
import { CategoryComponent } from '../category/category.component';
import { AllFiltersComponent } from '../all-filters/all-filters.component';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../../../services/listings.service';
import { Listing } from '../../../interface/listing.model';
import { TravelerComponent } from '../../searches/traveler/traveler.component';
import { SearchComponent } from '../../searches/search/search.component';
import { MapComponent } from '../../searches/map/map.component';
import { DisplayAdComponent } from '../../../Platform/display-ad/display-ad.component';
import { AddOwnerComponent } from '../../../Platform/add-owner/add-owner.component';

@Component({
  selector: 'app-all-listings',
  imports: [
    AdsComponent,
    ProductComponent,
    AllFiltersComponent,
    CategoryComponent,
    CommonModule,
    TravelerComponent,
    SearchComponent,
    MapComponent,
    DisplayAdComponent,
    AddOwnerComponent,
  ],
  templateUrl: './all-listings.component.html',
  styleUrl: './all-listings.component.css',
})
export class AllListingsComponent implements OnInit {
  cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];
  selectedLocation = '';
  Place_name: string = 'Where do ?';

  cate_name = 'Recommended';
  travelCategories = [
    'Hotel',
    'Resort',
    'Apartment',
    'Villa',
    'Hostel',
    'Guest House',
    'Spa',
    'Pool',
    'Beachfront',
    'Mountain View',
  ];

  listingData = {
    title: 'Luxury Villa in Goa',
    geometry: {
      coordinates: [78.9629, 20.5937], // [lng, lat]
    },
  };

  constructor(private listing: ListingsService) {}

  listings: any[] = [];

  filterListings: any[] = [];
  ngOnInit() {
    this.listing.getListing().subscribe(
      (data) => {
        this.listings = data;
        this.filterListings = [...this.listings];
        this.buildTagIndex(this.listings);
        this.buildCatIndex(this.listings);

        if (this.listings.length > 0) {
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // build index

  tagIndex: Map<string, Set<any>> = new Map();

  buildTagIndex(listings: any[]) {
    listings.forEach((listing) => {
      (listing.tags || []).forEach((tag: String) => {
        const key = tag.toLowerCase();
        if (!this.tagIndex.has(key)) this.tagIndex.set(key, new Set());

        this.tagIndex.get(key)?.add(listing);
      });
    });
  }

  applyFilter(selected: string[], matchAll: boolean = false): void {
    if (selected.length === 0) {
      this.filterListings = [...this.listings];
    }

    const selectedLower = selected.map((s) => s.toLowerCase());

    if (matchAll) {
      let result: Set<any> | undefined;
      for (const tag of selectedLower) {
        const listingForTag = this.tagIndex.get(tag) || new Set();
        result = result
          ? new Set([...result].filter((l) => listingForTag.has(l)))
          : new Set(listingForTag);
      }

      this.filterListings = [...(result || new Set())];
    } else {
      // OR -> Union
      const result = new Set<any>();
      for (const tag of selectedLower) {
        (this.tagIndex.get(tag) || []).forEach((l) => result.add(l));
      }
      this.filterListings = [...result];
    }
  }

  private categoryIndex: Map<string, Set<Listing>> = new Map();

  buildCatIndex(listings: Listing[]) {
    this.categoryIndex.clear();

    for (let item of listings) {
      if (!item.categories || !Array.isArray(item.categories)) continue;

      for (let cat of item.categories) {
        const key = cat?.toLowerCase().trim() || 'other';

        if (!this.categoryIndex.has(key)) {
          this.categoryIndex.set(key, new Set());
        }
        this.categoryIndex.get(key)!.add(item);
      }
    }
  }

  applyCategoryFilter(selected: string[], matchAll: boolean = false): void {
    if (selected.length === 0) {
      this.filterListings = [...this.listings];
      return;
    }

    const selectedLower = selected.map((s) => s.toLowerCase());

    if (matchAll) {
      // AND -> Intersection
      let result: Set<Listing> | undefined;
      for (const cat of selectedLower) {
        const listingForCat = this.categoryIndex.get(cat) || new Set();
        result = result
          ? new Set([...result].filter((l) => listingForCat.has(l)))
          : new Set(listingForCat);
      }
      this.filterListings = [...(result || new Set())];
    } else {
      // OR -> Union
      const result = new Set<Listing>();
      for (const cat of selectedLower) {
        (this.categoryIndex.get(cat) || new Set()).forEach((l) =>
          result.add(l)
        );
      }
      this.filterListings = [...result];
    }
  }

  minValue: number | null = null;
  maxValue: number | null = null;
  minValueSorting(val: any) {
    this.minValue = val;
    this.applyPriceFilter();
  }
  maxValueSorting(val: any) {
    this.maxValue = val;
    this.applyPriceFilter();
  }
  applyPriceFilter() {
    let filtered = this.listings;
    if (this.minValue != null) {
      filtered = filtered.filter((item) => item.price >= this.minValue!);

      console.log(this.filterListings);
    }

    if (this.maxValue !== null) {
      filtered = filtered.filter((item) => item.price <= this.maxValue!);
    }
    // Sort with quickSort
    this.filterListings = this.quickSort(filtered, 'asc');
  }

  quickSort(arr: any[], order: 'asc' | 'desc'): any {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: any[] = [];
    const right: any[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (order === 'asc') {
        arr[i].price < pivot.price ? left.push(arr[i]) : right.push(arr[i]);
      } else {
        arr[i].price > pivot.price ? left.push(arr[i]) : right.push(arr[i]);
      }
    }
    return [
      ...this.quickSort(left, order),
      pivot,
      ...this.quickSort(right, order),
    ];
  }
}
