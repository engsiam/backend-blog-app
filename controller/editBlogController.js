const Blog = require("../model/postBlogModel");

const editBlogController = async (req, res) => {
  try {
    const { title, description, postedBy,getCategory,tags } = req.body;
    const blogId = req.params.id;

    // Check if the blog post exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).send({ message: "Blog post not found" });
    }

    // Update the blog post fields
    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.postedBy = postedBy || blog.postedBy;
    blog.getCategory = getCategory || blog.getCategory;
    blog.tags = tags || blog.tags;

    // Update the image if a new file is uploaded
    if (req.file) {
      blog.image = req.file.path;
    }

    // Save the updated blog post
    await blog.save();

    res.status(200).send({ message: "Blog post updated successfully", blog });
  } catch (error) {
    console.log("Error updating blog post:", error);
    res
      .status(500)
      .send({ message: "Error updating blog post", error: error.message });
  }
};

module.exports = editBlogController;
