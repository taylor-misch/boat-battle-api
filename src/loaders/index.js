import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  console.log("Mongo initialized");
  await expressLoader({ app: expressApp });
  console.log("Express initialized");
};
