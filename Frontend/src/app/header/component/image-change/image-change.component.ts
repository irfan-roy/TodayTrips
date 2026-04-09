import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-change',
  imports: [CommonModule],
  templateUrl: './image-change.component.html',
  styleUrl: './image-change.component.css',
})
export class ImageChangeComponent implements OnInit, OnDestroy {
  mainData = [
    {
      image:
        'https://i.postimg.cc/nV7s5bxS/taj-mahal-sunrise-misty-morning-agra.jpg',
      button: 'Book Your Stay',
    },
    {
      image: 'https://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      button: 'Explore Now',
    },
    {
      image: 'https://i.postimg.cc/Yq4wMhNr/pexels-apasaric-1285625.jpg',
      button: 'Discover More',
    },
    {
      image:
        'https://i.postimg.cc/0NCBvsbd/chureito-pagoda-fuji-mountain-sunset-japan.jpg',
      button: 'Start Your Journey',
    },
    {
      image:
        'https://i.postimg.cc/Dw7LSjF5/pexels-lureofadventure-28367796.jpg',
      button: 'Plan a Trip',
    },
    {
      image:
        'https://i.postimg.cc/t706JNyj/pexels-ricky-rijan-2193300.jpghttps://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      button: 'Visit Today',
    },
  ];
  @Input() images: any[] = [
    {
      url: 'https://i.postimg.cc/nV7s5bxS/taj-mahal-sunrise-misty-morning-agra.jpg',
      text: 'Discover',
    },
    {
      url: 'https://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      text: 'Explore',
    },
    {
      url: 'https://i.postimg.cc/Yq4wMhNr/pexels-apasaric-1285625.jpg',
      text: 'Adventure',
    },
    {
      url: 'https://i.postimg.cc/0NCBvsbd/chureito-pagoda-fuji-mountain-sunset-japan.jpg',
      text: 'Start Your Journey',
    },
    {
      url: 'https://i.postimg.cc/Dw7LSjF5/pexels-lureofadventure-28367796.jpg',
      text: 'Plan a Trip',
    },
    {
      image:
        'https://i.postimg.cc/t706JNyj/pexels-ricky-rijan-2193300.jpghttps://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      text: 'Travel the World',
    },
  ];
  @Input() interval: number = 3000;

  currentIndex = 0;
  intervalId: any;
  effectIndex = 0;

  effects = ['fadeZoom', 'slideLeft', 'slideRight', 'rotateFade'];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  nextSlide() {
    this.effectIndex = (this.effectIndex + 1) % this.effects.length;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
