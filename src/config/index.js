const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

// config() will read the .env file, parse the contents, assign it to process.env
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  frontendUrl: process.env.FRONTEND_URL,
  api: {
    prefix: process.env.API_PREFIX,
  },
};
