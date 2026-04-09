import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  imports: [CommonModule],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css',
})
export class SelectFilterComponent {
  @Input() propertyTypes: any[] = [];
  @Input() filterName!: string;
  @Input() allFilters: any[] = [];
}
