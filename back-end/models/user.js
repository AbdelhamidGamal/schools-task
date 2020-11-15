const config = require("../config");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, config.bcryptSaltRounds);
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
