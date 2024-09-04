const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  // Define your schema here
  name: {
    type: String,
    required: true,
  },
  // Add more fields
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
