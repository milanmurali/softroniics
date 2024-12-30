import express from "express";
import AuthRouter from "./Routes/AuthRoute.js";

const app = express()

app.use("/auth", AuthRouter)

app.listen(6969, () => {
    console.log("Auth Node Server Running on 6969");
})

