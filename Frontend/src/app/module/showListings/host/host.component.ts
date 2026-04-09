import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  imports: [CommonModule],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css',
})
export class HostComponent {
  hostInfo = [
    { info: 1059, name: 'Reviews' },
    { info: 4.83, name: 'Rating' },
    { info: 2, name: 'Years hosting' },
  ];

  host_culture = [
    { icon: 'fa-solid fa-briefcase', info: 'My work: The Lodgers' },
    {
      icon: 'fa-solid fa-clock',
      info: 'I spend too much time: cricket',
    },
  ];
  hostProfile = {
    profile: {
      name: 'Sonam',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      role: 'Superhost',
    },

    stats: {
      reviews: 1059,
      rating: 4.83,
      experience: 2,
    },

    culture: [
      { icon: 'fa-solid fa-briefcase', text: 'My work: The Lodgers' },
      { icon: 'fa-solid fa-clock', text: 'I spend too much time: cricket' },
    ],

    coHosts: [
      {
        name: 'alex',
        image:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'naina ',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'anjum',
        image:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      // add more co-hosts if needed
    ],

    details: {
      responseRate: '100%',
      responseTime: 'Within an hour',
    },

    badges: [
      {
        icon: 'fa-solid fa-shield',
        text: 'To help protect your payment, always use TodayTrip to send money and communicate with hosts.',
      },
    ],
  };
}

// Interfaces for type safety
// interface HostStat {
//   label: string;
//   value: number | string;
// }

// interface HostCulture {
//   icon: string;
//   text: string;
// }

// interface CoHost {
//   name: string;
//   image: string;
// }

// interface HostDetails {
//   responseRate: string;
//   responseTime: string;
// }

// interface Badge {
//   icon: string;
//   text: string;
// }

// interface HostProfile {
//   profile: {
//     name: string;
//     image: string;
//     role: string; // e.g., Superhost
//   };
//   stats: HostStat[];
//   culture: HostCulture[];
//   coHosts: CoHost[];
//   details: HostDetails;
//   badges: Badge[];
// }

// Example Data
