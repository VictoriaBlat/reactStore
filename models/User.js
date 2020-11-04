/* We'll write the schema and register our model for the users here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: { type: String, require: true, unique: true },
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      require: true
    },
    address: {
      firstName: {
        type: String,
        require: true
      },
      lastName: {
        type: String,
        require: true
      },
      streetName: {
        type: String,
        require: true
      },
      postalCode: {
        type: String,
        require: true
      },
      city: {
        type: String,
        require: true
      },
      telNumber: {
        type: String
      }
    },
    billingAddress: {
      firstName: {
        type: String,
        require: true
      },
      lastName: {
        type: String,
        require: true
      },
      streetName: {
        type: String,
        require: true
      },
      postalCode: {
        type: String,
        require: true
      },
      city: {
        type: String,
        require: true
      },
      telNumber: {
        type: String
      }
    },
    shopingCard: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ],
    favProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: "Product"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
