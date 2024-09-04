const bcrypt = require("bcrypt");
const User = require("../model/RegistrationModel");

const sendMail = require("../helper/nodemailer");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  // Email regex pattern
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Password pattern: 1-9 number and uppercase and lowercase mixed
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!name) {
    return res.status(400).send("Please provide a name.");
  }

  if (!email.match(emailPattern)) {
    return res.status(400).send("Please provide a valid email address.");
  }

  if (!password.match(passwordPattern)) {
    return res.status(400).send("Please provide a valid password.");
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User already exists.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    console.log(user);
    // Call the sendMail function
    sendMail(user);

    return res.status(201).send({
      message: "User created successfully.",
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal server error.");
  }
};

module.exports = registrationController;
