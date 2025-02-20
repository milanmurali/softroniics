import express from "express";
import userRouter from "./Routes/userRouter.js";
import 'dotenv/config'
import { connectdb } from "./utils/connectDB.js";
import cors from "cors";
const app = express()

app.use(express.json())
app.use(cors())
app.use("/user", userRouter)

const PORT = process.env.PORT || 4000

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log("CE Backend Server Running on", PORT);
    })
})



