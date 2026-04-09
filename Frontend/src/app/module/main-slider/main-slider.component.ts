import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  imports: [CommonModule],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent implements OnInit, OnDestroy {
  mainData = [
    {
      image:
        'https://i.postimg.cc/nV7s5bxS/taj-mahal-sunrise-misty-morning-agra.jpg',
      button: 'Book Your Stay',
      description:
        'Discover the colors, culture, and charm of India with timeless wonders like the Taj Mahal.',
    },
    {
      image: 'https://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      button: 'Explore Now',
      description:
        'Fall in love with France — from the romance of Paris and the Eiffel Tower to its rich cuisine.',
    },
    {
      image: 'https://i.postimg.cc/Yq4wMhNr/pexels-apasaric-1285625.jpg',
      button: 'Discover More',
      description:
        'Experience Greece with its whitewashed houses, blue domes, and magical Santorini sunsets.',
    },
    {
      image:
        'https://i.postimg.cc/0NCBvsbd/chureito-pagoda-fuji-mountain-sunset-japan.jpg',
      button: 'Start Your Journey',
      description:
        'Discover Japan’s blend of tradition and modernity — from Mount Fuji to vibrant Tokyo streets.',
    },
    {
      image:
        'https://i.postimg.cc/Dw7LSjF5/pexels-lureofadventure-28367796.jpg',
      button: 'Plan a Trip',
      description:
        'Explore the USA — from the Statue of Liberty in New York to breathtaking national parks.',
    },
    {
      image:
        'https://i.postimg.cc/t706JNyj/pexels-ricky-rijan-2193300.jpghttps://i.postimg.cc/pLs6hm9S/pexels-elina-sazonova-1850619.jpg',
      button: 'Visit Today',
      description:
        'Adventure awaits in Australia — golden beaches, the Sydney Opera House, and the Great Barrier Reef.',
    },
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit() {
    if (this.mainData.length > 1) {
      this.autoSlideInterval = setInterval(() => {
        this.moveSlide(1);
      }, 6000);
    }
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  moveSlide(direction: number) {
    const total = this.mainData.length;
    if (total > 0) {
      this.currentIndex = (this.currentIndex + direction + total) % total;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.mainData.length) {
      this.currentIndex = index;
    }
  }
}
