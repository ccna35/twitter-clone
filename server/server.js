const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
const { likeTweet } = require("./controllers/tweetController");
const Tweet = require("./models/tweetModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const changeStream = Tweet.watch();

changeStream.on("change", (change) => {
  console.log(change); // You could parse out the needed info and send only that data.
  io.emit("changeData", change);
});

io.on("connection", (socket) => {
  console.log(`a user connected: ${socket.id}`);
  socket.emit("text", "Hello there from server!");
  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });

  socket.on("newTweet", (data) => {
    console.log(data);
    io.emit("newTweet3", data);
  });

  socket.on("likeTweet", (data) => {
    console.log(data);
    io.emit("likeAction", data);
  });
});

// // connect to mongoDB
connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tweets", require("./routes/tweetRoutes"));
app.use("/api/replies", require("./routes/replyRoutes"));

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
