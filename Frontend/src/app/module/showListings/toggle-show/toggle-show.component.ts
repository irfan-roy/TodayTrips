import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-show',
  imports: [CommonModule],
  templateUrl: './toggle-show.component.html',
  styleUrl: './toggle-show.component.css',
})
export class ToggleShowComponent {
  @Input() name: any;
  @Input() details: any;
  @Input() information: any;
  @Input() Toggle: string = '';

  display = true;
  toggle() {
    this.display = !this.display;
    console.log(this.display);
  }
}
