import mongoose from "mongoose";

let taskschema = new mongoose.Schema({

    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const task = mongoose.model("task", taskschema)
export default task;