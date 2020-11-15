const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  documents: [documentSchema],
});

const School = mongoose.model("school", schoolSchema);

module.exports = School;
