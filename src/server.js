import express from "express";
import http from "http";
import socketio from "socket.io";
import config from "./config/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./api/index.js";

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());

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
