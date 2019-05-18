const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  ordersSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  status: {type: String},
  date: { type: Date, default: Date.now}
});

const Orders= mongoose.model("OrderItem",  ordersSchema);

module.exports = Orders;