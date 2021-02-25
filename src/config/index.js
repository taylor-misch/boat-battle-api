import dotenv from "dotenv";

// config() will read the .env file, parse the contents, assign it to process.env
dotenv.config();

export default {
  secret: process.env.SECRET,
  name: process.env.NAME,
};
