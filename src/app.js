const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
  },
});

http.listen(5000, () => {
  console.log("Listening at PORT 5000");
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
