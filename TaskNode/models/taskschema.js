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
    status: {
        type: String,
        required: true
    }, 
    loggedinuser: {
        type: String,
        required: true
    }
})

const task = mongoose.model("task", taskschema)
export default task;