const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  userSchema = new Schema({
  // fullname: { type: String, required: true },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String ,
    minlength: [8, 'must be 8 characters'],
    maxlength: 12
},
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("user",  userSchema);

module.exports = user;
