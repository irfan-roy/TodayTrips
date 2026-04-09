import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { Slider } from 'primeng/slider';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css',
  standalone: true,
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    IftaLabelModule,
    InputNumberModule,
    FloatLabelModule,
    Slider,
    CommonModule,
  ],
})
export class PricesComponent implements OnChanges {
  @Output() minChange = new EventEmitter<number | null>();
  @Output() maxChange = new EventEmitter<number | null>();
  rangeValues: number[] = [0, 80000];

  min: number | null = null;
  max: number | null = null;

  ngOnInit() {
    console.log('Initial Range:', this.rangeValues);
  }

  // When typing in input box
  onMinInputChange(event: any) {
    this.min = event.value;
    this.rangeValues = [this.min ?? 0, this.max ?? 800000];
  }

  onMaxInputChange(event: any) {
    this.max = event.value;
  }

  // When sliding the slider
  onSliderChange(event: any) {
    this.min = event.values[0];
    this.max = event.values[1];

    this.minChange.emit(this.min);
    this.maxChange.emit(this.max);
  }

  ngOnChanges() {
    console.log(this.min);
  }
}
