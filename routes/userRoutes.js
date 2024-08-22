const express = require("express");
const { getAllUsers, createUser, getShortlistedUsers, toggleUserShortlist } = require("../controllers/userController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/users/new").post(createUser);
router.route("/users/shortlisted").get(getShortlistedUsers);
router.route("/users/toggleShortList/:id").put(toggleUserShortlist);


module.exports = router