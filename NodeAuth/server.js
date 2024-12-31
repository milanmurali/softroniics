import express from "express";
import AuthRouter from "./Routes/AuthRoute.js";
import 'dotenv/config'
const app = express()

app.use("/auth", AuthRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Auth Node Server Running on",PORT);
})

