
const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getLoggedInUser,
} = require ("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get(" /me", getLoggedInUser);

module.exports = router;

