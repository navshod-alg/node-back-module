const router = require("express").Router();

const authController = require("./auth.controller.js");

router.post("/sign-up", async (req, res) => authController.signUp(req, res));

router.post("/sign-in", async (req, res) => authController.signIn(req, res));

// router.post("/sign-out", async (req, res) => authController.signOut(req, res));

module.exports = router;