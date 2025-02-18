const express = require("express");
const router = express.Router();
const {createPost} = require("../controller/postController");

router.post("/createPost", createPost);

module.exports = router;
