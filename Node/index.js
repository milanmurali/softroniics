import express from "express"
import { connect } from "mongoose"
import cors from "cors"
import { connectDB } from "./dbconf/connectDB.js"
import userRouter from "./routes/userRouter.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));

connectDB()

app.use('/api/user', userRouter)

app.listen(6969, () => {
    console.log("oodunnund")
})