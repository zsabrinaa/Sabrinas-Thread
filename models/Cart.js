const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  cartSchema = new Schema({
  // User_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  id: String,
  src: String,
  quantity: Number,  
  size: String,
  price: String,
  date: { type: Date, default: Date.now }
});

const Cart= mongoose.model("Cart",  cartSchema);

module.exports = Cart;
