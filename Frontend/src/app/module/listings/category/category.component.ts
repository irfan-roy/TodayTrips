import { NgClass, NgFor, NgForOf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  imports: [NgForOf, NgClass],
})
export class CategoryComponent {
  @Output() SelectCategoryFilter = new EventEmitter<string[]>();
  category = [
    { icon: 'fa-solid fa-spa', name: 'Spa' },
    { icon: 'fa-solid fa-person-swimming', name: 'Pool' },
    { icon: 'fa-solid fa-water', name: 'Water park' },
    { icon: 'fa-solid fa-water', name: 'Ocean view' },
    { icon: 'fa-solid fa-hot-tub-person', name: 'Hot tub' },
    { icon: 'fa-solid fa-dog', name: 'Pet-friendly' },
    { icon: 'fa-solid fa-wifi', name: 'WIFI Included' },
    { icon: 'fa-solid fa-wind', name: 'Air conditioned' },
    { icon: 'fa-solid fa-golf-ball-tee', name: 'Golf course' },
    { icon: 'fa-solid fa-dice', name: 'Casino' },
    { icon: 'fa-solid fa-soap', name: 'Washer and dryer' },
    { icon: 'fa-solid fa-tree', name: 'Outdoor space' },
    { icon: 'fa-solid fa-utensils', name: 'Restaurant' },
    { icon: 'fa-solid fa-martini-glass', name: 'Bar' },
  ];

  selectedCategories: string[] = [];

  toggleCategory(catName: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      // Add to selected list
      this.selectedCategories.push(catName);
    } else {
      // Remove from selected list
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== catName
      );
    }

    // Send selected categories to filter
    this.SelectCategoryFilter.emit(this.selectedCategories);
  }
}
