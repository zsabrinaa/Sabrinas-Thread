const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  orderItemSchema = new Schema({
  product_id: String,
  name: String,
  size: String,
  price: Number,
  quantity: {type: Number},
  date: { type: Date, default: Date.now}
});

const OrderItem = mongoose.model("OrderItem",  orderItemSchema);

module.exports = OrderItem;
