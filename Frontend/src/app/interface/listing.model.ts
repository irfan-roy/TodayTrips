// Listing Interfaces for Angular

export interface Amenity {
  icon: string;
  title?: string;
  description?: string;
  name?: string;
}

export interface Info {
  name: string;
  info: string[];
}

export interface AmenityInfo {
  name: string;
  properties: {
    name: string;
    icon: string;
    info: string[];
  }[];
}

export interface Extras {
  name: string;
  info: {
    name: string;
    price: string;
  }[];
}

export interface Ratings {
  rating: number; // 0 - 5
  review?: string;
  number?: number;
}

export interface RoomDetails {
  title: string;
  description: string;
  room_amenities: Amenity[];
  languages: string[];
  information: Info[];
  amenities_information: AmenityInfo[];
  amenities: Amenity[];
}

export interface Offer {
  title: string;
  images: string[];
  provides: Amenity[];
  amenities: Amenity[];
  extras: Extras[];
  price: number;
  ratings: Ratings[];
}

export interface Listing {
  _id?: string;
  title: string;
  description?: string;
  images: string[];
  imageInfo: string[];
  price: number;

  location: string;
  country?: string;
  weather?: string[];
  categories: string[];
  provides?: string[];

  rooms_details?: RoomDetails[];
  offers?: Offer[];
  tags?: string[];
  ratings?: Ratings;

  reviews?: string[]; // will come as ObjectId strings
  owner?: string; // user id

  geometry?: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };

  category?:
    | 'mountain'
    | 'arctic'
    | 'farms'
    | 'deserts'
    | 'pool'
    | 'castle'
    | 'trending'
    | 'spa'
    | 'apartments'
    | 'cabins'
    | 'beachfront'
    | 'estates'
    | 'villas'
    | 'bungalows';

  createdAt?: string;
  updatedAt?: string;
}

// blogs interface

export interface BlogPost {
  image_url: string;
  headline: string;
  description: string;
  category: string;
  layout_type: 'square' | 'rectangle';
  section_order: number;
  display_order: number;
  is_featured: boolean;
}
