const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petName: String,
  petBreed: String,
  petType: String,
});

module.exports = mongoose.model("Pet", petSchema);
