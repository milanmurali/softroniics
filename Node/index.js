import express from "express"
import { connect } from "mongoose"
import { connectDB } from "./dbconf/connectDB.js"
import userRouter from "./routes/userRouter.js"
import adminRouter from "./routes/adminRouter.js"

const app = express()

app.use(express.json())


connectDB()
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.listen(6969, () => {
    console.log("oodunnund")
})