import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  imports: [CommonModule, FormsModule],
  standalone: true,

  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent {
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  @Input() values: any = this.fruits;
  selectedFruit = '';
  isOpen = false;
  ngOnInit() {
    console.log(this.selectedFruit);
  }
}
