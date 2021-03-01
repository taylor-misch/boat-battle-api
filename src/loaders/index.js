const expressLoader = require("./express");
const mongooseLoader = "./mongoose";

export default async ({ expressApp }) => {
  await mongooseLoader();
  console.log("Mongo initialized");

  await expressLoader({ app: expressApp });
  console.log("Express initialized");
};
