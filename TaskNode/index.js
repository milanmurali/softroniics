import express from "express"
import { connect } from "mongoose"
import { connectDB } from "./dbconfig/connectdb.js"
import taskRouter from "./routes/taskRouter.js"

const app = express()

connectDB()
app.use('/task', taskRouter)

app.listen(6969, () => {
    console.log("task oodunnund")
})