const express = require("express");
const stripe = require("stripe")("sk_test_StNZOJTISzftrjawYzxmN1Au00j39AIl57");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const uuid = require("uuid/v4");
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
// app.post("/checkout", async (req, res) => {
//   console.log("Request:", req.body);

//   let error;
//   let status;
//   try {
//     const { product, token } = req.body;

//     const customer = await stripe.customers.create({
//       email: token.email,
//       source: token.id
//     });

//     const idempotency_key = uuid();
//     const charge = await stripe.charges.create(
//       {
//         amount: product.price * 100,
//         currency: "usd",
//         customer: customer.id,
//         receipt_email: token.email,
//         description: `Purchased with Sabrina`,
//         shipping: {
//           name: token.card.name,
//           address: {
//             line1: token.card.address_line1,
//             line2: token.card.address_line2,
//             city: token.card.address_city,
//             country: token.card.address_country,
//             postal_code: token.card.address_zip
//           }
//         }
//       },
//       {
//         idempotency_key
//       }
//     );
//     console.log("Charge:", { charge });
//     status = "success";
//   } catch (error) {
//     console.error("Error:", error);
//     status = "failure";
//   }

//   res.json({ error, status });
// });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sabrina-clothing");

const db = mongoose.connection;
db.once("open",() => {
  require("./scripts/seedDB");
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
