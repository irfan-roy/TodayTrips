import { AfterViewInit, Component, Input } from '@angular/core';
import * as maptilersdk from '@maptiler/sdk';
import { ToggleShowComponent } from '../../showListings/toggle-show/toggle-show.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [ToggleShowComponent, CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  @Input() listing: any;
  @Input() coordinates: [number, number] = [77.5946, 12.9716]; // [lng, lat]

  private mapToken = 'mNLp5fO3mYIYJNfkUear';
  display = false;

  ngAfterViewInit(): void {
    this.initPreviewMap();
  }

  toggle() {
    this.display = !this.display;

    // when expanded view opens, wait for DOM to render then init map
    if (this.display) {
      setTimeout(() => this.initExpandedMap(), 0);
    }
  }

  private initPreviewMap() {
    maptilersdk.config.apiKey = this.mapToken;
    new maptilersdk.Map({
      container: 'mapPreview',
      style: maptilersdk.MapStyle.STREETS,
      center: this.coordinates,
      zoom: 10,
    });
  }

  private initExpandedMap() {
    maptilersdk.config.apiKey = this.mapToken;
    new maptilersdk.Map({
      container: 'mapExpanded',
      style: maptilersdk.MapStyle.STREETS,
      center: this.coordinates,
      zoom: 12,
    });
  }
}
