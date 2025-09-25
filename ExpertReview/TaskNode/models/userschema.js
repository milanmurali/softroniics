import mongoose from "mongoose";

let userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", userschema)
export default user;