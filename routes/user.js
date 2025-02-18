const express = require("express");
const router = express.Router();
const {createUser} = require("../controller/userController");
const {getUser} = require("../controller/userController");
const {updateUser} = require("../controller/userController");
const {deleteUser} = require("../controller/userController");
const {getAllUsers} = require("../controller/userController");

router.post("/createUser", createUser);
router.get("/getUser",getUser);
router.put("/updateUser",updateUser);
router.delete("/deleteUser",deleteUser);
router.get("/getAllUsers",getAllUsers);


module.exports = router;
