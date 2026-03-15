const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AmenitySchema = new Schema({
  icon: String,
  title: String,
  description: String,
});

const AmenityInfo = new Schema({
  name: String,
  properties: [
    {
      name: String,
      icon: String,
      info: [String],
    },
  ],
});
const InfoSchema = new Schema({
  name: String,
  info: [String],
});

const RatingsSchema = new Schema({
  rating: { type: Number, min: 0, max: 5 },
  review: String,
  number: Number,
});

const ExtrasSchema = new Schema({
  name: String,
  info: [
    {
      name: String,
      price: String,
    },
  ],
});

const Amenities = new Schema({
  name: String,
  icon: String,
});

const RoomDetailsSchema = new Schema({
  title: String,
  description: String,

  room_amenities: [AmenitySchema],
  languages: [String],
  information: [InfoSchema],
  amenities_information: [AmenityInfo],
  amenities: [Amenities],
});

const OfferSchema = new Schema({
  title: String,
  images: [String],
  provides: [{ name: String, icon: String }],
  amenities: [{ name: String, icon: String }],
  extras: [ExtrasSchema],
  price: Number,
  ratings: [RatingsSchema],
});

const LocationSchema = new Schema({
  name: String,
  country: String,
  region: String,
});

const favoritesSchema = new Schema(
  {
    title: { type: String },
    description: String,
    images: [String],
    price: Number,
    location: [LocationSchema],
    weather: [String],
    categories: [{ type: String, index: true }],
    provides: [String],
    imageInfo: [String],
    rooms_details: [RoomDetailsSchema],
    offers: [OfferSchema],
    tags: [String],
    ratings: RatingsSchema,

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        index: "2dsphere",
      },
    },

    category: {
      type: String,
      enum: [
        "mountain",
        "arctic",
        "farms",
        "deserts",
        "pool",
        "castle",
        "trending",
        "spa",
        "apartments",
        "cabins",
        "beachfront",
        "estates",
        "villas",
        "bungalows",
      ],
      index: true,
    },
  },
  { timestamps: true }
);
const Favorites = mongoose.model("Favorites", favoritesSchema);
module.exports = Favorites;
