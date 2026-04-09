// location-search.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { ListingsService } from '../../../services/listings.service';
import { PlaceSliderComponent } from '../../cards/place-slider/place-slider.component';
import { PlaceCardComponent } from '../../cards/place-card/place-card.component';
import { ProductComponent } from '../../listings/product/product.component';

export interface Location {
  id: number;
  name: string;
  country: 'Country' | 'State' | 'City' | 'Union Territory';
  region: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-location',
  imports: [
    CommonModule,
    FormsModule, // for ngModel
    ReactiveFormsModule, // for formControl
    PlaceSliderComponent,
    PlaceCardComponent,
    ProductComponent,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  @Output() location = new EventEmitter<any>();
  searchControl = new FormControl('');
  locations: any[] = [];
  filteredLocations: Location[] = [];
  selectedLocation: any | null = null;
  isDropdownOpen = false;
  highlightedIndex = -1;
  showResults = false;
  allListing: any[] = [];

  private destroy$ = new Subject<void>();

  constructor(private listing: ListingsService) {}
  ngOnInit(): void {
    this.initializeLocations();
    this.setupSearchSubscription();
    console.log(this.locations);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeLocations(): void {
    this.listing.getListing().subscribe((data) => {
      this.allListing = data;
      this.locations = data.map((item) => {
        return {
          id: item._id,
          name: item.location[0]?.name || ' ',
          country: item.location[0]?.country || ' ',
          region: item.location[0]?.region || ' ',
          lat: item.geometry?.coordinates[0] || 0,
          lng: item.geometry?.coordinates[1] || 0,
        } as Location;
      });
      console.log(this.locations);
      if (data) {
        console.log(data);
      }
    });
  }

  private setupSearchSubscription(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(600), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        this.handleSearch(query || '');
      });
  }

  onSearchFocus(): void {
    const query = this.searchControl.value || '';
    if (query && this.filteredLocations.length > 0) {
      this.showDropdown();
    }
  }

  onSearchBlur(): void {
    // Delay hiding to allow for click events on suggestions
    setTimeout(() => {
      this.hideDropdown();
    }, 200);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.isDropdownOpen || this.filteredLocations.length === 0) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIndex = Math.min(
          this.highlightedIndex + 1,
          this.filteredLocations.length - 1
        );
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
        break;

      case 'Enter':
        event.preventDefault();
        if (
          this.highlightedIndex >= 0 &&
          this.highlightedIndex < this.filteredLocations.length
        ) {
          this.selectLocation(this.filteredLocations[this.highlightedIndex]);
        }
        break;

      case 'Escape':
        this.hideDropdown();
        this.searchInput.nativeElement.blur();
        break;
    }
  }

  private handleSearch(query: string): void {
    if (!query.trim()) {
      this.filteredLocations = [];
      this.hideDropdown();
      this.showResults = false;
      return;
    }

    this.filteredLocations = this.locations.filter(
      (location) =>
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.country.toLowerCase().includes(query.toLowerCase()) ||
        location.region.toLowerCase().includes(query.toLowerCase())
    );

    this.highlightedIndex = -1;

    if (this.filteredLocations.length > 0) {
      this.showDropdown();
      this.showResults = true;
    } else {
      this.hideDropdown();
      this.showResults = false;
    }
  }

  selectLocation(location: any): void {
    if (this.allListing) {
      this.selectedLocation = this.allListing.filter(
        (item) => item._id == location.id
      );
    }
    // this.selectedLocation = location;

    this.searchControl.setValue(location.name);
    this.hideDropdown();
    this.showResults = true;
    this.location.emit(location);
    console.log(this.selectedLocation[0].location[0].name);
    console.log(this.selectedLocation);
  }

  selectSuggestion(location: Location, index: number): void {
    this.highlightedIndex = index;
    this.selectLocation(location);
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.filteredLocations = [];
    this.selectedLocation = null;
    this.hideDropdown();
    this.showResults = false;
    this.searchInput.nativeElement.focus();
  }

  copyCoordinates(lat: number, lng: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    const coordinates = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    navigator.clipboard.writeText(coordinates).then(() => {
      // You can add a toast notification here
      console.log('Coordinates copied to clipboard');
    });
  }

  getLocationIcon(type: string): string {
    const icons = {
      Country: '🏳️',
      State: '🏛️',
      City: '🏙️',
      'Union Territory': '🏢',
    };
    return icons[type as keyof typeof icons] || '🏛️';
  }

  getTypeColor(type: string): string {
    const colors = {
      Country: 'bg-green-100 text-green-800',
      State: 'bg-blue-100 text-blue-800',
      City: 'bg-purple-100 text-purple-800',
      'Union Territory': 'bg-orange-100 text-orange-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  }

  private showDropdown(): void {
    this.isDropdownOpen = true;
  }

  private hideDropdown(): void {
    this.isDropdownOpen = false;
    this.highlightedIndex = -1;
  }
}
