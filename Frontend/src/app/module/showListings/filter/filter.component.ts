import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() places: any[] = [];
  @Input() filters: string[] = [];
  @Input() btnClass = '';

  selectedFilter: string | null = null;

  @Output() filteredData = new EventEmitter<any[]>();
  @Output() selectedFilterChange = new EventEmitter<string | null>();

  ngOnInit() {
    if (this.filters?.length) {
      this.selectFilter(this.filters[0]);
    }
  }

  selectFilter(filter: string) {
    if (this.selectedFilter === filter) {
      this.selectedFilter = null;
      this.filteredData.emit(this.places);
      this.selectedFilterChange.emit(null);
    } else {
      this.selectedFilter = filter;
      const result = this.places.filter((place) =>
        place.categories?.includes(filter)
      );
      this.filteredData.emit(result);
      this.selectedFilterChange.emit(filter);
    }
  }
}
