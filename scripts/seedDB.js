const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sabrina-clothing"
);

const ItemSeed = [
  {
    name: "Hot Pink Yummy",
    category: "swimwear",
    src: "https://ae01.alicdn.com/kf/HTB1sYwkXHuWBuNjSszgq6z8jVXav/Family-Matching-Outfits-Mother-and-Daughter-swimsuit-Clothing-Mom-Girls-Swimwear-mommy-me-bikini-look-dresses.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',19.99],["M",19.99],["L",19.99],["XL",19.99],["1T",15.99],["2T",15.99],["3T",15.99],["4T",15.99],["5T",15.99],["6T",15.99]]),
    date: new Date(Date.now())
  },
  {
    name: "Summer Leopard ",
    category: "swimwear",
    src: "https://ae01.alicdn.com/kf/HTB182RTaOLrK1Rjy1zdq6ynnpXa0/Mother-And-Daughter-Swimsuit-2019-Ruffle-Leopard-Mom-Daughter-Swimwear-Family-Look-Mommy-And-Me-Bikini.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',19.99],["M",19.99],["L",19.99],["XL",19.99],["1T",15.99],["2T",15.99],["3T",15.99],["4T",15.99],["5T",15.99],["6T",15.99]]),
    date: new Date(Date.now())
  },
  {
    name: "Petal Pink",
    category: "swimwear",
    src: "https://ae01.alicdn.com/kf/HTB1kATYJzDpK1RjSZFrq6y78VXax/Mother-Daughter-Swimsuits-Flower-Mommy-And-Me-Swimwear-Bikini-Family-Look-Mom-And-Daughter-Bathing-Suit.jpg",
    quantity: 50,
    size: new Map ([['S',19.99],["M",19.99],["L",19.99],["XL",19.99],["1T",15.99],["2T",15.99],["3T",15.99],["4T",15.99],["5T",15.99],["6T",15.99]]),
    date: new Date(Date.now())
  },
  {
    name: "Plaid Midi Dress",
    category: "dress",
    src: "https://ae01.alicdn.com/kf/HTB1EZRyOmzqK1RjSZFLq6An2XXa6/2019-Summer-Family-Matching-clothes-Mom-and-daughter-dress-striped-mother-daughter-dresses-Short-sleeve-Children.jpg",
    quantity: 50,
    size: new Map ([['S',20.00],["M",20.00],["L",20.00],["XL",20.00],["1T",16.00],["2T",16.00],["3T",16.00],["4T",16.00],["5T",16.00],["6T",16.00]]),
    date: new Date(Date.now())
  },
  {
    name: "Cool Tee",
    category: "tees",
    src: "https://ae01.alicdn.com/kf/HTB1GoDedAfb_uJkSmRyq6zWxVXa0/Family-Matching-Outfits-Father-Mother-Daughter-Son-Clothes-Look-tshirt-daddy-mommy-and-me-dress-mom.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',12.00],["M",12.00],["L",12.00],["XL",12.00],["1T",10.00],["2T",10.00],["3T",10.00],["4T",10.00],["5T",10.00],["6T",10.00]]),
    date: new Date(Date.now())
  },
  {
    name: "Rose Tee",
    category: "tees",
    src: "https://ae01.alicdn.com/kf/HTB1oWphX2fsK1RjSszgq6yXzpXac/rose-mother-daughter-t-shirt-mommy-and-me-clothes-family-matching-outfits-look-mom-and-daughter.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',12.00],["M",12.00],["L",12.00],["XL",12.00],["1T",10.00],["2T",10.00],["3T",10.00],["4T",10.00],["5T",10.00],["6T",10.00]]),
    date: new Date(Date.now())
  },
  {
    name: "Hot Leopard Matching Set",
    category: "matching",
    src: "https://ae01.alicdn.com/kf/HTB1hdwWRpXXXXa5XXXXq6xXFXXXh/2017-Hot-Selling-Mother-and-Daughter-Dress-Summer-Denim-T-shirt-Tops-Leopard-Skirt-Woman-Clothes.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',29.99],["M",29.99],["L",29.99],["XL",29.99],["1T",25.00],["2T",25.00],["3T",25.00],["4T",25.00],["5T",25.00],["6T",25.00]]),
    date: new Date(Date.now())
  },
  {
    name: "Roses Are Red",
    category: "dress",
    src: "https://ae01.alicdn.com/kf/HTB12a1PO3HqK1RjSZFPq6AwapXa3/2019-Summer-Mother-Daughter-Dresses-Family-Matching-Clothes-Mom-and-Daughter-Dress-Princess-Flower-Dress-Mommy.jpg_640x640.jpg",
    quantity: 50,
    size: new Map ([['S',29.99],["M",29.99],["L",29.99],["XL",29.99],["1T",25.00],["2T",25.00],["3T",25.00],["4T",25.00],["5T",25.00],["6T",25.00]]),
    date: new Date(Date.now())
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(ItemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    
  })
  .catch(err => {
    console.error(err);
    
  });

