const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const config = require("./config/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initRouter } = require("./api/index.js");

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, initRouter);

  const httpServer = http.Server(app);
  const io = socketio(httpServer, {
    cors: {
      origin: config.frontendUrl || "http://localhost:8080",
    },
  });

  httpServer.listen(config.port, () => {
    console.log(`Server running in ${config.nodeEnv} mode on ${config.port}`);
  });

  io.on("connection", (socket) => {
    console.log("New user connected with ID: " + socket.id);

    socket.on("pingServer", (msg) => {
      console.log(msg);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
}
startServer();
