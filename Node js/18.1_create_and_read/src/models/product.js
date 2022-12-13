const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      require: true,
      validate(value) {
        if (value.length < 0) {
          throw new Error("description must be at list 10 letters in length");
        }
      },
    },
    Price: {
      type: Number,
      require: true,
      validate(value) {
        if (value < 0) {
          throw new Error("price has to be a positive value");
        }
      },
      discount: {
        type: Number,
        default: 0,
      },
      images: {
        type: [String],
        minLength: 2,
        validate(value) {
          if (!value.every((element) => validator.isURL(element))) {
            throw new Error("must be valid url links");
          }
        },
      },
      phoneNumber: {
        type: String,
        require: true,
        validate(value) {
          if (!validator.isMobilePhone(value, ["he-IL"])) {
            throw new Error("must be a valid israeli number");
          }
        },
      },
      dateAdded: {
        type: Date,
        default: Date.now,
      },
    },
  },
});

// shirt
//   .save()
//   .then(() => {
//     console.log(shirt);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
