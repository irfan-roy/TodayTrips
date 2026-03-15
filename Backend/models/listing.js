// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Review = require("./review.js");

// // Sub-schemas for nested fields
// const AmenitySchema = new Schema({
//   icon: String,
//   title: String,
//   description: String,
//   name: String,
// });

// const InfoSchema = new Schema({
//   name: String,
//   info: [String],
// });

// const AmenitiesInformationSchema = new Schema({
//   name: String,
//   properties: [
//     {
//       name: String,
//       icon: String,
//       info: [String],
//     },
//   ],
//   information: [
//     {
//       name: String,
//       info: [String],
//     },
//   ],
//   Languages: [
//     {
//       name: String,
//       lang: [String],
//     },
//   ],
// });

// const RoomDetailsSchema = new Schema({
//   title: String,
//   description: String,
//   amenities: [AmenitySchema],
//   Languages: [String],
//   information: [InfoSchema],
//   amenities_information: [AmenitiesInformationSchema],
//   amenities: [
//     {
//       name: String,
//       icon: String,
//     },
//   ],
// });

// const OfferSchema = new Schema({
//   title: String,
//   images: [String],
//   provides: [
//     {
//       icon: String,
//       name: String,
//     },
//   ],
//   amenities: [
//     {
//       name: String,
//       icon: String,
//     },
//   ],
//   extras: [
//     {
//       name: String,
//       info: [
//         {
//           name: String,
//           price: String,
//         },
//       ],
//     },
//   ],
//   price: Number,
//   ratings: [
//     {
//       rating: String,
//       review: String,
//       number: Number,
//     },
//   ],
// });

// const RatingsSchema = new Schema({
//   rating: String,
//   review: String,
//   number: Number,
// });

// const listingSchema = new Schema({
//   title: { type: String, required: true },
//   description: String,
//   images: [String],
//   imageInfo: [String],
//   price: Number,
//   location: String,
//   country: String,
//   weather: [String],
//   categories: [String],
//   provides: [String],

//   rooms_details: [RoomDetailsSchema],
//   offers: [OfferSchema],

//   ratings: RatingsSchema,

//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ],

//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },

//   geometry: {
//     type: {
//       type: String,
//       enum: ["Point"],
//     },
//     coordinates: {
//       type: [Number], // [longitude, latitude]
//     },
//   },

//   category: {
//     type: String,
//     enum: [
//       "mountain",
//       "arctic",
//       "farms",
//       "deserts",
//       "pool",
//       "castle",
//       "trending",
//       "spa",
//       "apartments",
//       "cabins",
//       "beachfront",
//       "estates",
//       "villas",
//       "bungalows",
//     ],
//   },
// });

// // mongoose middleware
// listingSchema.post("findOneAndDelete", async (listing) => {
//   if (listing) {
//     await Review.deleteMany({ _id: { $in: listing.reviews } });
//   }
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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

const listingSchema = new Schema(
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
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing?.reviews?.length) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


