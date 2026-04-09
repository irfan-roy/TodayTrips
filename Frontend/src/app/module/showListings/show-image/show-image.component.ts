import { Component, Input, SimpleChange } from '@angular/core';
import { ToggleShowComponent } from '../toggle-show/toggle-show.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-show-image',
  imports: [ToggleShowComponent, CommonModule, FilterComponent],
  templateUrl: './show-image.component.html',
  styleUrl: './show-image.component.css',
})
export class ShowImageComponent {
  @Input() images: any;
  @Input() imageInfo: any;

  details = [
    {
      title: 'The shop',
      btn: 'See more',
    },
  ];

  filters = [
    'All photos',
    'Rooms',
    'Bathroom',
    'Exterior',
    'Common areas',
    'Dining',
    'Views',
    'Family',
    'Accessibility',
  ];

  imagesData: any[] = [];
  filteredData: any[] = [];
  display = false;

  ngOnChanges(changes: SimpleChange) {
    if (this.images && this.images.length) {
      this.imagesData = this.handleImgInfoMarge(this.images, this.imageInfo);
      this.filteredData = [...this.imagesData];
    }
  }

  handleImgInfoMarge(imgs: any, info: any) {
    return imgs.map((img: string, i: number) => ({
      img,
      text: info?.[i] || ' ', //
    }));
  }

  toggle() {
    this.display = !this.display;
  }

  ngOnInit() {
    console.log('text', this.imagesData);
  }

  handleFilteredData(eData: any) {
    if (!eData || eData.toLowerCase() == 'all photos') {
      this.filteredData = [...this.imagesData];
      return;
    }
    this.filteredData = this.imagesData.filter((data: any) =>
      data.text?.toLowerCase().includes(eData.toLowerCase())
    );
  }
}
