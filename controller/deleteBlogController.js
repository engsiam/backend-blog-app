const Blog = require("../model/postBlogModel");
const deleteBlogController = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = deleteBlogController;
