require("../config/db");

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    contact : String,
    city : String,
    gender : String,
    state : String,
    status : {type : Number, default : 1}
    
})

module.exports = mongoose.model("user", UserSchema);