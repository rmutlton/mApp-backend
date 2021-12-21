const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    email: String,
    name: String,
    lastname: String,
    password: String
});

module.exports = mongoose.model("users", schema);