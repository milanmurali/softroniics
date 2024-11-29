import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test1')
        .then(() => console.log('DB Connected YAY!'))
        .catch(error => console.error())
}