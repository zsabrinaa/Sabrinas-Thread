import axios from "axios";

export default {
  // search: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },
 
  getItems: function () {
    return axios.get("/api/items");
  },
  getReports: function () {
    return axios.get("/api/staff");
  },
  getCartItems: function () {
    return axios.get("/api/cart");
  }, 
  getItem: function (id) {
    return axios.get("/api/shop/" + id);
  }, 
  findcat: function (cat) {
    return axios.get(`/api/shop/cat/` + cat)
  },
  saveReport: function (a, b) {
    console.log(a, b)
    return axios.post("/api/staff", {
      email: a,
      problem: b,
      
    });
  }
};
