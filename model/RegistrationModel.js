const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyEmail: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", registrationSchema);