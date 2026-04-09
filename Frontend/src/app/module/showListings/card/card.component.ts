import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-card',
  imports: [Rating, CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  value: number = 3;
  r = {
    user: 'Karan Jeet',
    img: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    join: '2 years',
    time: 'Today',
    review: `The place was easy to find. The neighborhood is quiet and peaceful. The
        place looked exactly like it was in the pictures. It was clean, from
        kitchen to washroom. It was a great stay!`,
    rating: 5,
  };
}
