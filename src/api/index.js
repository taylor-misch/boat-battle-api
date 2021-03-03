const express = require("express");
const Router = express.Router();

function initRouter() {
  const app = Router();
  return app;
}

module.exports = {
  initRouter,
};
