const Blog = require("../model/postBlogModel");
const searchByTagsController = async (req, res) => {
    try {
        const tags = req.body.tags || req.query.tags;
        console.log("Tags:", tags);
        
        if(!tags){
            return res.status(400).send({ message: "Tags are required" });
        }
         // Convert the tags query parameter into an array
        const tagsArray = tags.split(",").map((tag) => tag.trim());
         // Find blogs that contain any of the tags
        const data = await Blog.find({ tags: { $all: tagsArray } });
        res.status(200).send({ message: "Search results", data: data });
    } catch (error) {
        console.log("Error searching blogs by tags:", error);
    res.status(500).send({ message: "Error searching blogs by tags", error: error.message });
    }
}

module.exports = searchByTagsController