import express from "express";
import config from "./config/index";
import socketio from "socketio";
import http from "http";

async function startServer() {
  const app = express();

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
    // when new player joins game
    console.log("New user connected with ID: " + socket.id);

    socket.on("pingServer", (msg) => {
      console.log(msg);
    });

    // when client disconnects
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
}
startServer();
