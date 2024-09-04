const User = require("../model/RegistrationModel");
const bcrypt = require("bcrypt");

// login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(409).send("Email Not Found");
    }
    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (result) {
        if (existingUser.verifyEmail) {
          return res.status(200).send({
            Message: "Login Successful",
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            password: existingUser.password,
          });
        } else {
          return res.status(409).send("Email Not Verified");
        }
      } else {
        return res.status(409).send("Wrong Password");
      }
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = loginController;
