const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/usersController.js");

router.post("/users", controller.insert);

module.exports = router;