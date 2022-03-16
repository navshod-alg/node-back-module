const router = require("express").Router();

const privilegeController = require("./privilege.controller.js");

router.post("/", async (req, res) => privilegeController.create(req, res));

router.put("/:id", async (req, res) => privilegeController.update(req, res));

router.delete("/:id", async (req, res) => privilegeController.remove(req, res));

router.get("/:id", async (req, res) => privilegeController.getOne(req, res));

router.get("/", async (req, res) => privilegeController.getSeveral(req, res));

router.post("/assign", async (req, res) => privilegeController.assign(req, res));

router.post("/revoke", async (req, res) => privilegeController.revoke(req, res));

module.exports = router;