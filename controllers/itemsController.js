const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Item
      .find({})
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findAll2: function(req, res) {
    db.Cart
      .find({})
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Item   
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    console.log(req.params.category)
    db.Item.find({"category": req.params.category})
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)})
    .catch(err => {
      console.log(err) 
      res.status(422).json(err)});
},
  create: function(req, res) {
    db.Cart
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err =>{
        console.log(err)
        res.status(422).json(err);
      })
  }
 
};
