const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const {User} = require("./model/user");

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

const mongoDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected Successfully !")
    } catch (error) {
        console.log("Unable to connect to mongoDB", error)
    }
}

mongoDB();

app.post("/signup", async(req,res)=>{
    try {
        const {Username, Email, Password} = req.body;

        if(!Username){
        return res.status(400).json({error:"Username cannot be empty"})
        };
        if(!Email){
            return res.status(400).json({error:"Email cannot be empty"})
        };
        if(Password<8 || Password>16){
            return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
        };

        console.log("User Created Successfully")
    } catch (error) {
        console.log("All fields are required",error);
    }    
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});