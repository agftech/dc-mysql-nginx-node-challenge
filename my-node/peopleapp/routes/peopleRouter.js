const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/peopleController");

router.get("/", peopleController.index);
router.get("/create", peopleController.create);
router.post("/", peopleController.store);
router.get("/:id/edit", peopleController.edit);
router.put("/:id", peopleController.update);
router.delete("/:id", peopleController.destroy);

module.exports = router;
