const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // only one user will login from one id
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: { type: Date, required: true },
  },
  {
    //new user created time will be added
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
