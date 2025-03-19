const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true,
        min:8,
        max:16
    },
    DateofBirth:{
        type:Date
    }
});

const User = mongoose.model("user",userSchema)
module.exports={User}