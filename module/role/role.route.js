const router = require("express").Router();

const roleController = require("./role.controller.js");

router.post("/", async (req, res) => roleController.create(req, res));

router.put("/:id", async (req, res) => roleController.update(req, res));

router.delete("/:id", async (req, res) => roleController.remove(req, res));

router.get("/:id", async (req, res) => roleController.getOne(req, res));

router.get("/", async (req, res) => roleController.getSeveral(req, res));

router.post("/assign", async (req, res) => roleController.assign(req, res));

router.post("/revoke", async (req, res) => roleController.revoke(req, res));

module.exports = router;