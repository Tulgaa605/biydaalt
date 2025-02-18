const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user");
const tripRouter = require("./routes/trip");
const postRouter = require("./routes/post");
app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("server listen 300 port");
});
