const mongoose = require("mongoose");
const config = require("../config/index.js");

function initMongoose() {
  try {
    const connection = await mongoose.connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = {
  initMongoose 
};
