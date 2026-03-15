const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    image_url: {
      type: String,
      trim: true,
      default: "https://via.placeholder.com/600x400?text=Blog+Post",
    },
    headline: {
      type: String,
      required: [true, "headline is required"],
      trim: true,
      maxLength: [200, "Headline cannot exceed 200 character's"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      lowercase: true,
      index: true,
    },
    layout_type: {
      type: String,
      enum: {
        values: ["square", "rectangle"],
        message: "{VALUE} is not a valid layout type",
      },
      default: "rectangle",
    },
    section_order: {
      type: Number,
      default: 0,
      min: [0, "Section order cannot be negative"],
    },
    display_order: {
      type: Number,
      default: 0,
      min: [0, "Display order cannot be negative"],
    },
    is_featured: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.index({ section_order: 1, display_order: 1 });

module.exports = mongoose.model("Blog", blogSchema);
