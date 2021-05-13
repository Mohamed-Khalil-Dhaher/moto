const mongoose = require("mongoose");

var homeSchema = mongoose.Schema({
  type: String,
  model: String,
  image: String,
  description: String,
  price: Number,
  contactInformation: String
});

var Moto = mongoose.model("Moto", homeSchema);

module.exports = Moto;