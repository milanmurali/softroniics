import express from "express";
import AuthRouter from "./Routes/AuthRoute.js";
import 'dotenv/config'
import { connectdb } from "./utils/connectDB.js";
import cors from "cors";
const app = express()

app.use(express.json())
app.use(cors())
app.use("/auth", AuthRouter)

const PORT = process.env.PORT || 4000

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log("Auth Node Server Running on", PORT);
    })
})



