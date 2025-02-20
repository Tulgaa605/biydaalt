const express = require("express");
const adminController = require("../controller/adminPanel");

const router = express.Router();

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/list", adminController.authenticateAdmin, adminController.getAdminList);
router.delete("/:id", adminController.authenticateAdmin, adminController.deleteAdmin);
router.post("/modertor", adminController.authenticateAdmin, adminController.modertor);
router.get("/modertorList", adminController.authenticateAdmin, adminController.modertorList);
router.delete("/modertor/:id", adminController.authenticateAdmin, adminController.deleteModertor);
router.put("/modertor/:id", adminController.authenticateAdmin, adminController.updateModertor);
module.exports = router;
