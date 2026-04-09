import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-policies',
  imports: [CommonModule],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
})
export class PoliciesComponent {
  propertyPolicies = [
    {
      name: 'Policies',
      Policies: [
        {
          name: 'Check-in',
          value: [
            'Check-in start time: 2 PM; check-in end time: midnight',
            'Early check-in subject to availability',
            'Early check-in is available for a fee',
            'Late check-in subject to availability',
            'Minimum check-in age - 18',
          ],
        },
        {
          name: 'Check-out',
          value: [
            'Check-out before 11:00 AM',
            'Late check-out subject to availability',
            'A late check-out fee will be charged',
          ],
        },
      ],
    },

    {
      name: 'Additional',
      additional: [
        {
          name: 'Special check-in instructions',
          value: [
            'This property offers transfers from the airport, train station and bus station (surcharges may apply)',
            'To arrange pick-up, guests must contact the property 48 hours prior to arrival, using the contact information on the booking confirmation',
            'Front desk staff will greet guests on arrival at the property',
            'To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India',
            'Travelers who are not citizens of India must present a valid passport and visa',
          ],
        },
        {
          name: 'Access methods',
          value: ['Staffed front desk'],
        },
        {
          name: 'Pets',
          value: ['No pets or service animals allowed'],
        },
        {
          name: 'Children and extra beds',
          value: [
            'Children are welcome',
            'Rollaway/extra beds are available for INR 2500 per night',
            'Cots (infant beds) are not available',
          ],
        },
      ],
    },

    {
      name: 'Payments',
      payments: [
        {
          img: 'https://i.postimg.cc/xdtRzXpt/Visa-Logo-2014.jpg',
        },
        {
          img: 'https://i.postimg.cc/d139mJzv/American-Express-logo-2018.jpg',
        },
        {
          img: 'https://i.postimg.cc/D0dd7mGr/images.jpg',
        },
      ],
    },

    {
      name: 'Important information',
      information: [
        {
          name: 'Optional extras',
          value: [
            'Late check-in fee for check-in between 2:30 PM and 6:30 PM',
            'The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change.',
          ],
        },
        {
          name: 'You need to know',
          value: [
            'Extra-person charges may apply and vary depending on property policy',
            'Government-issued photo identification and a credit card, debit card or cash deposit may be required at check-in for incidental charges',
            'Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed',
            'This property accepts credit cards, debit cards, mobile payments and cash',
            'Mobile payment options include: UnionPay QuickPass',
            'Safety features at this property include a carbon monoxide detector, a fire extinguisher, a smoke detector, a security system and outdoor lighting',
            'This property has outdoor spaces, such as balconies, patios and terraces, which may not be suitable for children; if you have any concerns, we recommend contacting the property prior to your arrival to confirm that they can accommodate you in a suitable room',
            'This property affirms that it follows the cleaning and disinfection practices of GBAC STAR (Hyatt)',
          ],
        },
        {
          name: 'We should mention',
          value: [
            'Only registered guests are allowed in the guestrooms',
            'The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number on the booking confirmation',
            'No pets and no service animals are allowed at this property',
            'Alcohol is not served at this property',
            'Guests under 18 years old are not allowed in the fitness facility',
            'Guests under 18 years old are not allowed in the spa',
            'This property welcomes guests of all sexual orientations and gender identities (LGBTQ+ friendly)',
          ],
        },
      ],
    },
  ];

  constructor() {
    console.log(this.propertyPolicies[0]);
  }
}
