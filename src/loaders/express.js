import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../api";
import config from "../config";

export default ({ app }) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());
};
