import { Component, EventEmitter, Output } from '@angular/core';
import { CheckFilterComponent } from '../check-filter/check-filter.component';
import { PricesComponent } from '../prices/prices.component';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../searches/map/map.component';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-all-filters',
  imports: [
    CheckFilterComponent,
    PricesComponent,
    CategoryComponent,
    CommonModule,
    MapComponent,
    SelectFilterComponent,
  ],
  templateUrl: './all-filters.component.html',
  styleUrl: './all-filters.component.css',
})
export class AllFiltersComponent {
  allFilters = [
    {
      title: 'Popular filter',
      options: ['Apartment', 'Room', 'Bedroom', 'Villa', 'Bungalow', 'Studio'],
    },
    {
      title: 'Stay Options',
      options: ['Any', 'Hotels', 'Homes'],
    },
    {
      title: 'Payment type',
      options: ['Reserve now, pay later'],
    },
    {
      title: 'Property cancellation options',
      options: ['Property cancellation options'],
    },
    {
      title: 'Property type',
      options: ['Aparthotel', 'Apartment', 'Resort'],
    },
    {
      title: 'Property brand',
      options: ['Taj', 'Radisson Blu', 'Courtyard'],
    },
    {
      title: 'GoTrip rewards and discounts',
      options: [
        'Discounted properties',
        'Member price',
        'VIP Access properties',
      ],
    },
    {
      title: 'Cities',
      options: ['Delhi', 'Mumbai', 'Pune'],
    },
    {
      title: 'Traveler experience',
      options: ['Family friendly', 'Romantic', 'Beach'],
    },
    {
      title: 'Availability',
      options: ['Only show available properties'],
    },
    {
      title: 'Star rating',
      options: ['5 stars', '4 stars', '3 stars'],
    },
    {
      title: 'Popular locations',
      options: ['Calangute beach', 'Taj Mahal', 'Gir National Park'],
    },
    {
      title: 'Meal plans available',
      options: [
        'All inclusive',
        'Breakfast included',
        'Dinner included',
        'Lunch included',
      ],
    },
    {
      title: 'Guest rating',
      options: ['Any', 'Wonderful 9+', 'Very good 8+', 'Good 7+'],
    },
    {
      title: 'Accessibility',
      options: [
        'Lift',
        'Service animal allowed',
        'Stair-free path to entrance',
      ],
    },
  ];
  listing: any = {
    title: 'Cozy Beachfront Cottage',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    imageInfo: [
      'Explore our stunning collection featuring All photos Rooms Bathroom Exterior Common areas Dining Views Family Accessibility',
      'Discover the beauty of Rooms Dining Views Family and feel the touch of Accessibility',
      'All photos highlight the elegance of Bathroom Exterior Common areas and Family-friendly touches throughout',
      'Immerse yourself in the serenity of Views with refined Common areas Dining spaces and Rooms designed for Family and Accessibility',
      'Browse All photos and discover how our Bathroom Exterior and Dining areas blend style and Accessibility for every Family',
      'View all photos and experience how our Bathroom, Exterior, and Dining spaces bring together modern style and family-friendly accessibility.',
      'Explore our full photo gallery and see how the Bathroom, Exterior, and Dining spaces combine elegance with accessibility for every family.',
      'Browse through all photos to discover how we’ve designed Bathrooms, Exteriors, and Dining areas that balance style and accessibility for every family.',
      'All photos highlight the elegance of Bathroom Exterior Common areas and Family-friendly touches throughout',
      'Explore our full photo gallery and see how the Bathroom, Exterior, and Dining spaces combine elegance with accessibility for every family.',
    ],
    price: 84000,
    location: 'Malibu',
    country: 'United States',
    weather: ['summer', 'spring'],
    categories: [
      'Ski',
      'Adventure',
      'Family',
      'Snow Adventures',
      'Spa',
      'Water park',
      'pool',
      'WIFI Included',
    ],
    provides: ['Breakfast included', 'Reserve now, pay later'],

    rooms_details: [
      {
        title: 'Private 1 BHK Serviced Apartment in Sushant Lok 1',

        description: `  Welcome to this another luxurious property by Tulip Homes which is
      situated on 12th floor a High-rise building. Wide garden patio & 2 seater
      jacuzzi makes it unique in class. The place is perfect for relaxing and
      enjoying scenic view of modern architecture. Apartment is loaded with
      smart tv (all applications works), big mirror wall, a cozy double bed,
      comfy swing, stylish couch with central nesting coffee tables, fridge,
      microwave, induction,electric kettle, toaster, iron & many more.`,

        room_amenities: [
          {
            icon: 'fas fa-users',
            title: 'Perfect ratings from families',
            description:
              '100% of families who stayed here in the past year rated it 5 stars overall.',
          },
          {
            icon: 'fas fa-snowflake',
            title: 'Designed for staying cool',
            description: 'Beat the heat with the A/C and ceiling fan.',
          },
          {
            icon: 'fa-solid fa-calendar-days',
            title: 'Free cancellation before 25 Aug',
            description: 'Get a full refund if you change your mind.',
          },
        ],

        Languages: ['English', 'Hindi'],
        information: [
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
        ],

        amenities_information: [
          {
            name: 'All property amenities',
            properties: [
              {
                name: 'Internet',
                icon: 'fas fa-wifi',
                info: [
                  'Available in all rooms: Free WiFi',
                  'Available in some public areas: Free WiFi',
                ],
              },
              {
                name: 'Parking',
                icon: 'fas fa-parking',
                info: [
                  'Free offsite parking within 1 metre',
                  'Street parking available',
                  'Free covered self parking on site',
                  'Limited on-site parking',
                ],
              },
              {
                name: 'Breakfast',
                icon: 'fas fa-coffee',
                info: [
                  'Buffet breakfast included',
                  'Served daily from 6:30 AM – 10:30 AM',
                ],
              },
              {
                name: 'Food and drink',
                icon: 'fas fa-utensils',
                info: [
                  'BA coffee shop/cafe',
                  'A restaurant',
                  'Coffee and tea in common areas',
                ],
              },
              {
                name: 'Gym',
                icon: 'fas fa-dumbbell',
                info: [
                  ' 24-hour fitness centre for guests 18 years old and older',
                ],
              },
              {
                name: 'Pets',
                icon: 'fas fa-dog',
                info: [' No pets or service animals'],
              },
              {
                name: 'Things to do',
                icon: 'fas fa-spa',
                info: ['Full-service spa'],
              },
              {
                name: 'Family friendly',
                icon: 'fas fa-child',
                info: ['Laundry facilities', 'Soundproofed rooms'],
              },
              {
                name: 'Conveniences',
                icon: 'fas fa-concierge-bell',
                info: [
                  '24-hour front desk',
                  'Laundry facilities',
                  'Lockers',
                  'Luggage storage',
                  'Vending machine',
                ],
              },
              {
                name: 'Guest services',
                icon: 'fas fa-hands-helping',
                info: [
                  'Change of towels on request',
                  'Concierge services',
                  'Housekeeping (daily)',
                ],
              },
              {
                name: 'Full-service spa',
                icon: 'fas fa-hot-tub',
                info: [
                  'Body scrubs',
                  'Body wraps',
                  'Massage',
                  'Spa open daily',
                  'Steam room',
                ],
              },
              {
                name: 'Accessibility',
                icon: 'fas fa-wheelchair',
                info: [
                  'If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking.',
                  'Area rugs in room',
                  'Assistive listening devices',
                  'Front entrance ramp',
                  'Grab bar in shower',
                  'Lift (38 centimetre wide door)',
                  'Tile flooring in public areas',
                  'Tile flooring in room',
                  'Visual alarms in hallways',
                  'Well-lit path to entrance',
                  'Wheelchair accessible (may have limitations)',
                  'Wheelchair-accessible business centre',
                  'Wheelchair-accessible concierge desk',
                  'Wheelchair-accessible gym',
                  'Wheelchair-accessible public bathroom',
                  'Wheelchair-accessible restaurant',
                  'Wheelchair-accessible spa',
                  'Wheelchairs on site',
                ],
              },
              {
                name: 'More',
                icon: 'fas fa-ellipsis-h',
                info: [
                  '5 buildings',
                  '5 floors',
                  'Banquet hall',
                  'Built in 2023',
                  'Colonial architecture',
                  'Smoke-free property',
                ],
              },
            ],
          },
          {
            name: 'About this property',
            information: [
              {
                name: 'Upscale hotel in the historical district',
                info: [
                  'Consider a stay at Hyatt Place Bodh Gaya and take advantage of a free breakfast buffet, a coffee shop/cafe and laundry facilities. Treat yourself to a body scrub, a massage or a body wrap at the on-site spa. Free in-room WiFi is available to all guests, along with a 24-hour gym and a restaurant.',
                ],
              },
              {
                name: 'Other perks include:',
                info: [
                  'Free self-parking',
                  'Smoke-free property, coffee/tea in reception and luggage storage',
                  'A 24-hour front desk, a vending machine and a banquet hall',
                ],
              },
              {
                name: 'Room features',
                info: [
                  'All 74 rooms include comforts, such as fireplaces and premium bedding, as well as thoughtful touches, such as laptop-compatible safes and laptop-friendly workspaces.',
                ],
              },
              {
                name: 'More conveniences in all rooms include:',
                info: [
                  'Bathrooms with rainfall showers and free toiletries',
                  '55-inch LED TVs with premium channels',
                  'Wardrobes/cupboards, electric kettles and daily housekeeping',
                ],
              },
            ],
            Languages: [{ name: 'Languages', lang: ['English', ' Hindi'] }],
          },
        ],
        amenities: [
          {
            name: 'Breakfast included',
            icon: 'fa-solid fa-utensils',
          },
          {
            name: 'Laundry',
            icon: 'fa-solid fa-shirt',
          },
          {
            name: 'Air conditioning',
            icon: 'fa-solid fa-fan',
          },
          {
            name: '43-inch HDTV',
            icon: 'fa-solid fa-tv',
          },
          {
            name: 'Kitchen',
            icon: 'fa-solid fa-kitchen-set',
          },
          {
            name: 'Free WiFi',
            icon: 'fa-solid fa-wifi',
          },
          {
            name: 'Parking included',
            icon: 'fa-solid fa-square-parking',
          },
          {
            name: 'Lift',
            icon: 'fa-solid fa-elevator',
          },
        ],
      },
    ],

    offers: [
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 8777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
      {
        title: 'Room, 1 King Bed (Mumbai View)',
        images: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        provides: [
          {
            icon: 'fa-solid fa-square-parking',
            name: 'Free self parking',
          },
          {
            icon: 'fa-solid fa-coffee',
            name: 'Free breakfast',
          },
        ],
        amenities: [
          { name: '474 sq ft', icon: 'fa-solid fa-expand' },
          { name: 'Sleeps 4', icon: 'fa-solid fa-user-group' },
          { name: '1 King Bed', icon: 'fa-solid fa-bed' },
          {
            name: 'Reserve now, pay deposit',
            icon: 'fa-solid fa-credit-card',
          },
          { name: 'Free WiFi', icon: 'fa-solid fa-wifi' },
          { name: 'Garden view', icon: 'fa-solid fa-tree' },
        ],
        extras: [
          {
            name: 'Extras',
            info: [
              { name: 'No extras', price: '+ ₹0' },
              { name: 'Wifi + Breakfast for 2', price: '+ ₹800' },
              { name: 'Breakfast for 2 + Special deal', price: '+ ₹3,400' },
            ],
          },
        ],
        price: 15777,
        ratings: [
          {
            rating: '5.0',
            review: 'Excellent stay',
            number: 12,
          },
        ],
      },
    ],
    tags: [
      'Beachfront',
      'Ocean View',
      'Cottage',
      'Hotels',
      'Resort',
      'Relaxing Getaway',
      'Seaside Escape',
      'Coastal Retreat',
      'Vacation Rental',
      'Family Friendly',
      'Nature Stay',
      'Luxury Stay',
      'Private Beach',
      'Waterfront',
      'Budget Friendly',
      'Romantic Stay',
      'Apartment',
      'Room',
      'Villa',
    ],
    ratings: {
      rating: '5.0',
      review: 'Excellent stay',
      number: 12,
    },
    geometry: {
      type: 'Point',
      coordinates: [-118.7798, 34.0259],
    },
  };

  @Output() checkboxFilter = new EventEmitter<string[]>();
  @Output() categoryFilter = new EventEmitter<string[]>();

  @Output() minChange = new EventEmitter<number | null>();
  @Output() maxChange = new EventEmitter<number | null>();

  onMinChange(val: number | null) {
    this.minChange.emit(val);
  }

  onMaxChange(val: number | null) {
    this.maxChange.emit(val);
  }
}
