import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-check-filter',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './check-filter.component.html',
  styleUrl: './check-filter.component.css',
})
export class CheckFilterComponent {
  @Input() propertyTypes: any[] = [];
  @Input() filterName!: string;
  formGroup!: FormGroup;
  @Output() selectedFilters = new EventEmitter<string[]>(); // send to parent

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const controls: any = {};

    this.propertyTypes.forEach((type, index) => {
      controls[type] = [false];
    });

    this.formGroup = this.fb.group(controls);

    // Subscribe to all controls
    this.formGroup.valueChanges.subscribe((values) => {
      const selected = Object.keys(this.formGroup.value).filter(
        (k) => values[k]
      );

      console.log('selected', selected);
      this.selectedFilters.emit(selected);
    });
  }
}
