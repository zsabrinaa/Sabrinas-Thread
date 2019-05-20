const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/..."

router
  .route("/items")
  .get(itemsController.findAll)
  
router
  .route("/shop/:id")
  .get(itemsController.findById)
router
  .route("/cart")
  .get(itemsController.findAll2)
router 
.route("/staff")
.post(itemsController.saveReport)
.get(itemsController.findAll3)
router
  .route("/shop/cat/:category")
  .get(itemsController.findByCategory)
module.exports = router;
