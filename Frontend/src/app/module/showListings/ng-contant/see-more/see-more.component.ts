import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleShowComponent } from '../../toggle-show/toggle-show.component';

@Component({
  selector: 'app-see-more',
  imports: [CommonModule, ToggleShowComponent],
  templateUrl: './see-more.component.html',
  styleUrl: './see-more.component.css',
})
export class SeeMoreComponent {
  details = [
    {
      title: 'The shop',
      btn: 'See more',
    },
  ];

  information = [
    {
      name: 'About this space',
      info: [
        `We would like to offer our 1 BHK Serviced Apartment for short and long
      stays in Gurgaon and it is located in a posh & secured Gated locality of
      Gurgaon and is at walking distance from Gold Souk Mall & shalom hills
      international school and 2.2 km from Millennium City Centre metro station,
      Also Fortis Hospital is 2.1 km`,
      ],
    },
    {
      name: 'Please note',
      info: [
        `We also welcome foreign nationals as we are having license to accommodate
      them.`,
      ],
    },
    {
      name: 'The space',
      info: [
        `The fully equipped Apartment having kitchenette with glassware, cutlery
      gives you the freedom to cook with your own hands.`,
      ],
    },
    {
      name: 'inclusions',
      info: [
        '* Balcony is available with Sitting arrangements.',
        '* 43 inch Smart TV with High Speed WIFI Internet.',
        '* Fully equipped kitchen with Glassware, Cutlery, Microwave, Utensils, Kitchen Electronics, Fridge, Induction',
        '* Private Fully Automatic Washing Machine is available in the apartment.',
        '* Housekeeping & Cleaning on daily basis.',
        '* Linen change provided on alternative days.',
        '* Provision of Extra Beds with extra charges',
        '* Living Room with Four Seater Sofa.',
        '* Car Parking is provided.',
        '* Complimentary Toiletries are provided.',
        '* Iron and Hair Dryer will be available on call.',
        '* RO Water is available in the the Apartment',
        '* Electricity is Included in the Price',
        '* Genset Power Backup is Available.',
        '* We do provide heaters, which would be available before subject to availability. If available, there will be a charge of 200 INR per day to use them.',
        '* Our serviced apartments are equipped with a limited set of crockery for your convenience. Kindly be advised that cleaning of kitchen utensils is not included in the housekeeping services provided. We appreciate your understanding and cooperation.',
        '* Our air conditioners in the rooms are available for cooling purpose only, providing cooling functionality, and are not equipped for heating or intended for winter use.',
      ],
    },
    {
      name: 'Guest access',
      info: [
        `You can Access the Common Sitting Area at the reception and can collect your apartment keys from The Managers and check in upon arrival.`,
      ],
    },
    {
      name: 'Please note',
      info: [
        `We also welcome foreign nationals as we are having license to accommodate
      them.`,
      ],
    },
    {
      name: 'Other things to note',
      info: [
        'The entire apartment is yours, absolutely not shared with anyone else. Completely private, independent and without any access restrictions, your own home in Gurgaon. However, we request you to keep the music low to avoid noise for other residents.',

        'We provide a 43 inch Croma Smart TV with working internet. You can watch applications as per your preference, but we do not provide app subscriptions. As per Google, 1000+ apps are available on Croma TV, but some may not work with the Croma interface. You can use any app based on availability at that moment.',

        'We require valid ID proof such as an address proof. For non-Indian citizens, we require a physical copy of passport or visa at the time of check-in.',
        'Early check-in is subject to availability and is chargeable. The preferred check-in time selected at booking is also subject to availability. Our standard check-in time is 2:00 PM and check-out time is 11:00 AM.',
        'We provide genset power backup for the entire apartment except for the living room AC. Backup is available for the bedroom AC only.',
        'We have multiple identical units in the same building, so the floor allocation will be subject to availability.',
        'Uploaded pictures are for reference only.',
      ],
    },
  ];

  display = false;
  toggle() {
    this.display = !this.display;
    console.log(this.display);
  }
}
