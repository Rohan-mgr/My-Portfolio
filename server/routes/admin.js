const express = require("express");
const adminController = require("../controller/admin");
const router = express.Router();

router.post("/signup", adminController.createAdmin);
router.post("/signin", adminController.adminLogin);
router.post("/reset", adminController.GetPasswordReset);
router.post("/new-password/:id/:token", adminController.handlePasswordReset);

module.exports = router;
