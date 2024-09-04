const Blog = require("../model/postBlogModel");

const getAllBlogController = async (req, res) => {
  try {
    const data = await Blog.find({}).populate(["postedBy","getCategory"]);

    // Log the fetched data
    console.log("Fetched blogs with populated postedBy:", data);

    res.status(200).send({
      Message: "All Blog List",
      data: data,
    });
  } catch (error) {
    console.log("Error fetching blogs:", error);
    res
      .status(500)
      .send({ message: "Error fetching blogs", error: error.message });
  }
};

module.exports = getAllBlogController;
