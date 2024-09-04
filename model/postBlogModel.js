const mongoose = require("mongoose");
const { Schema } = mongoose;

const postBlogModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
    message: "image is required",
  },
  tags: {
    type: Array,
    required: true,
    message: "tags are required",
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  getCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Blog", postBlogModel);
