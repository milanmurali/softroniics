import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/tasks')
        .then(() => console.log('DB Connected'))
        .catch(error => console.error())
}