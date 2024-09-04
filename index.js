require('dotenv').config();
//dependencies
const express = require("express");
const app = express();
const path = require("path");
const upload = require("./helper/imageUpload");
const dbConnection = require("./helper/dbConnection");

// add controller
const secureAPi = require("./middleware/secureApi");
const registrationController = require("./controller/registrationController");
const loginController = require("./controller/loginController");
const emailVerificationController = require("./controller/emailVerificationController");
const blogPostController = require("./controller/blogPostController");
const getAllBlogController = require("./controller/getAllBlogController");
const updateBlogPostCOntroller = require("./controller/editBlogController");
const editBlogController = require("./controller/editBlogController");
const deleteBlogController = require("./controller/deleteBlogController");
const categoryController = require("./controller/categoryController");
const searchByTagsController = require('./controller/searchByTagsController');

//database connection
dbConnection();
//middlware
app.use(express.json());
app.use("/my-uploads", express.static(path.join(__dirname, "my-uploads")));

// upload file
console.log(process.env.MONGODB_URI);



// add route
app.post("/registration", registrationController);
app.post("/login", loginController);
app.post("/postBlog", upload.single("avatar"), blogPostController);
app.get("/postBlog", getAllBlogController);
//update blog post
app.put("/editBlog/:id", upload.single("avatar"), editBlogController);
app.delete("/deleteBlog/:id", deleteBlogController);
app.get("/:email", emailVerificationController);
app.post("/createCategory",categoryController.create);
app.get("/category/getCategory",categoryController.findAll);
app.get("/category/category/:id",categoryController.findOne);
app.put("/editCategory/:id",categoryController.update);
app.delete("/deleteCategory/:id",categoryController.delete);
//search tags
app.post("/blogs/search",searchByTagsController)
//console.log("database", process.env.MONGODB_URI);
app.listen(8000, () => {
  console.log("server is running on port 8000");
});

