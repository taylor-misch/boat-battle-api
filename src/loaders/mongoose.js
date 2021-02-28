const mongoose = require("mongoose");
const config = require("../config/index");

export default async () => {
  try {
    const connection = await mongoose.connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection.connection.db;
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
};
