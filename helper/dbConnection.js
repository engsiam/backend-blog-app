const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Database connected");
      });
      
};

module.exports = dbConnection;
