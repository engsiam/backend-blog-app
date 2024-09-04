const User = require("../model/RegistrationModel");
const emailVerificationController = async (req, res) => {
  try {
    let existingUser = await User.findOneAndUpdate(
      { email: req.params.email },
      { verifyEmail: true },
      { new: true }
    );
    if (existingUser == null) {
      res.status(409).send("Email Not Found");
    } else {
      res.status(200).send("Email Verified");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = emailVerificationController;
