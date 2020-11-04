/* We'll write the schema and register our model for the posts here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, require: true },
    category: {
      type: String,
      enum: ["Collars", "Leads", "Beds", "Toys", "Bowls", "Food", "Apparel"]
    },
    //descriptionShort: { type: String, minlength: 15 },
    descriptionFull: { type: String, minlength: 5 },
    price: {
      type: Number,
      //    type: Currency,
      required: true
    },
    onStock: {
      type: Number
    },
    images: {
      type: Array,
      default: "public/images/dogpaw.png"
    },
    counter: 0
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
