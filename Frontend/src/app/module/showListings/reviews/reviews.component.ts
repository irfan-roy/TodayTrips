import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
@Component({
  selector: 'app-reviews',
  imports: [FormsModule, Rating, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  @Input() class = '';
  value: number = 3;

  reviews = [
    {
      user: 'Karan Jeet',
      img: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      join: '2 years',
      time: 'Today',
      review: `The place was easy to find. The neighborhood is quiet and peaceful. The
        place looked exactly like it was in the pictures. It was clean, from
        kitchen to washroom. It was a great stay!`,
      rating: 5,
    },
    {
      user: 'Aanya Patel',
      img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1171&q=80',
      join: '1 year',
      time: '2 days ago',
      review: `Absolutely loved the stay! The host was super helpful and responsive. The interiors were cozy and beautifully done.`,
      rating: 4.9,
    },
    {
      user: 'Meera Singh',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1171&q=80',
      join: '6 months',
      time: 'Today',
      review: `Clean, organized, and beautifully located. Everything matched the photos and description. Felt like home.`,
      rating: 5,
    },
    {
      user: 'Aarav Sharma',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1171&q=80',
      join: '2 years',
      time: 'Yesterday',
      review: `The host was amazing. Gave us early check-in. Everything was in working order. Will surely return.`,
      rating: 4.8,
    },
    {
      user: 'Sanya Desai',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1171&q=80',
      join: '8 months',
      time: '3 days ago',
      review: `Perfect for a weekend getaway. Peaceful, clean, and secure. The bed was super comfortable too!`,
      rating: 5,
    },
    {
      user: 'Nikhil Verma',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1171&q=80',
      join: '4 years',
      time: 'Last weekend',
      review: `Loved the minimalist vibe. Everything was functional and stylish. Great value for the price.`,
      rating: 4.6,
    },
    {
      user: 'Priya Mehta',
      img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1171&q=80',
      join: '1.5 years',
      time: 'Today',
      review: `A hidden gem! Surrounded by nature, yet close to the city. The place was spotless and well-kept.`,
      rating: 5,
    },
    {
      user: 'Rajat Kapoor',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1171&q=80',
      join: '2.5 years',
      time: 'Yesterday',
      review: `Good experience overall. WiFi was fast, and there was hot water all day. Ideal for remote working.`,
      rating: 4.8,
    },
    {
      user: 'Isha Nair',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1171&q=80',
      join: '10 months',
      time: '5 days ago',
      review: `Exceeded expectations. The place had a warm, welcoming vibe. Will be back for sure!`,
      rating: 4.9,
    },
    {
      user: 'Devansh Joshi',
      img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=1171&q=80',
      join: '3 years',
      time: 'Last night',
      review: `Super clean, spacious, and peaceful. Everything from check-in to check-out went smoothly.`,
      rating: 5,
    },
  ];
}
