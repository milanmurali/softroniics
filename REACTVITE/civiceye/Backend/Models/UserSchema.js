import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name: {
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

// module.exports = mongoose.model("user", UserSchema)

const user = mongoose.model("user", UserSchema)
export default user
