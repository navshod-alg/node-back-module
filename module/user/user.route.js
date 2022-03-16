const router = require("express").Router();

const userController = require("./user.controller.js");

router.post("/", async (req, res) => userController.create(req, res));

router.put("/:id", async (req, res) => userController.update(req, res));

router.delete("/:id", async (req, res) => userController.remove(req, res));

router.get("/:id", async (req, res) => userController.getOne(req, res));

router.get("/", async (req, res) => userController.getSeveral(req, res));

module.exports = router;