const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/..."

router
  .route("/items")
  .get(itemsController.findAll)
  
router
  .route("/signup")
  .post(itemsController.create)
  
router
  .route("/shop/:id")
  .get(itemsController.findById)
router
  .route("/cart")
  .post(itemsController.create)
  .get(itemsController.findAll2)
  
router
  .route("/shop/cat/:category")
  .get(itemsController.findByCategory)
module.exports = router;
