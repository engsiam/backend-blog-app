const Category = require("../model/category");

// Create a new Category
exports.create = async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    await category.save();
    res.status(201).send({
      message: "Category created successfully",
      name: req.body.name,
      description: req.body.description,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error creating category", error: error.message });
  }
};

// Get all Categorys
exports.findAll = async (req, res) => {
  try {
    let updateCategory = await Category.find({});
    res
      .status(200)
      .send({ message: "All Categories fetched successfully", updateCategory });

  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching categories", error: error.message });
  }
};

// Get a single Category by ID
exports.findOne = async(req, res) => {
  try {
    let updateCategory = await Category.findOne({});
    res
      .status(200)
      .send({ message: "Single Category fetched successfully", updateCategory });

  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching categories", error: error.message });
  }
};

// Update a Category by ID
exports.update = async(req, res) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).send({ message: "Category updated successfully", updateCategory });
  } catch (error) {
    res.status(500).send({ message: "Error updating category", error: error.message });
  }
};

// Delete a Category by ID
exports.delete = async(req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Category deleted successfully", deleteCategory });
  } catch (error) {
    res.status(500).send({ message: "Error deleting category", error: error.message });
  }
};
