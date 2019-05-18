const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/..."

router
  .route("/items")
  .get(itemsController.findAll)
  .put(itemsController.update)
  .delete(itemsController.remove);
router
  .route("/signup")
  .post(itemsController.create)
  .delete(itemsController.remove);
router
  .route("/shop/:id")
  .get(itemsController.findById)
router
  .route("/cart")
  .post(itemsController.create)
  .get(itemsController.findAll2)
  .delete(itemsController.remove);
router
  .route("/login")

module.exports = router;
