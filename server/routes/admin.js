const express = require("express");
const adminController = require("../controller/admin");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.post("/signup", adminController.createAdmin);
router.post("/signin", adminController.adminLogin);
router.post("/reset", adminController.GetPasswordReset);
router.post("/new-password/:id/:token", adminController.handlePasswordReset);
router.post("/upload-projects", isAuth, adminController.handleProjectUpload);

module.exports = router;
