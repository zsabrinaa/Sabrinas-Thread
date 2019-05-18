import axios from "axios";

export default {
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },
  checkOut: function(){
    return axios.post("/api/checkout")
  },
  getItems: function() {
    return axios.get("/api/items");
  },
  getCartItems: function() {
    return axios.get("/api/cart");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/shop/" + id);
  },
  createAccount: function(a,b){
    return axios.post("/api/signup",{
      email: a,
      password: b
    });
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
 
  saveItem: function(a,b,c,d,e) {
    console.log(a,b,c,d,e)
    return axios.post("/api/cart",{
      src: a,
      quantity: b,
      size: c,
      price: d,
      id: e
    });
  }
};
