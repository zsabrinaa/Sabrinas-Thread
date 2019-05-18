const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  orderItemSchema = new Schema({
  order_id:{type: Schema.Types.ObjectId, ref: 'Orders'},
  product_id: {type: Schema.Types.ObjectId, ref: 'Item'},
  quantity: {type: Number},
  date: { type: Date, default: Date.now}
});

const OrderItem = mongoose.model("OrderItem",  orderItemSchema);

module.exports = OrderItem;
