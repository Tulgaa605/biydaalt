const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const User = require("./routes/user");
const tripRouter = require("./routes/trip");
const postRouter = require("./routes/post");
const categoryRoutes = require("./routes/categoryRoutes");
const product = require("./routes/productRoutes");
const Admin = require("./routes/adminPanel");
const path = require("path");

app.use(cors());

app.use(express.json());
app.use("/trips", tripRouter);
app.use("/post", postRouter);
app.use("/static", express.static(path.join(__dirname, "file")));

app.use("/user", User);
app.use("/categories", categoryRoutes);
app.use("/products", product);
app.use("/admin",Admin);

app.listen(3000, () => {
  console.log("server listen 300 port");
});