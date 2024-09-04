
const Blog = require("../model/postBlogModel");

const blogPostController = async (req, res) => {
  console.log("file", req.file.path);
  try {
    const { title, description, postedBy,getCategory,tags } = req.body;

    //image path
    const imagePath = req.file ? req.file.path : null;
    // Log the received data
    console.log("Received data:", { title, description, imagePath, postedBy,getCategory });
    let newTags = tags.split(",").map((tag) => tag.trim());
    //if newtags empty show message tahg require and not more than 5 tags
    if (newTags.length > 5) {
      return res
        .status(400)
        .send({ message: "Tags not more than 5 tags" });
    }
    console.log("Tags:", newTags);
    
    let blog = new Blog({
      title: title,
      description: description,
      image: imagePath,
      postedBy: postedBy,
      getCategory: getCategory,
      tags: newTags
    });

    await blog.save();

    return res.status(200).send({
      message: "Blog Post Successfully",
      title,
      description,
      image: imagePath,
      postedBy,
      getCategory,
      tags: newTags
    });
  } catch (error) {
    console.log("Error creating blog post:", error);
    res
      .status(500)
      .send({ message: "Error creating blog post", error: error.message });
  }
};

module.exports = blogPostController;
