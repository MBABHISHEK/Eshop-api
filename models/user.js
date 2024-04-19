const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  passwordHash: {
    type: "string",
    required: true,
  },
  phone: {
    type: "string",
    required: true,
  },
  isAdmin: {
    type: "boolean",
    default: false,
  },
  street: {
    type: "string",
    default: "",
  },
  apartment: {
    type: "string",
    default: "",
  },
  zip: {
    type: "string",
    default: "",
  },
  city: {
    type: "string",
    default: "",
  },
  country: {
    type: "string",
    default: "",
  },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;
