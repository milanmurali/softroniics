import mongoose from "mongoose";

let useruploadschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const userupload = mongoose.model("userupload", useruploadschema)
export default userupload;