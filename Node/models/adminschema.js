import mongoose from "mongoose";

let adminschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("admin",adminschema)
export default admin;