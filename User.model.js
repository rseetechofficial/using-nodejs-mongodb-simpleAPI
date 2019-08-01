var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name : String,
    age  : Number
})

module.exports = mongoose.model("User", UserSchema);