import express from "express"
import cors from "cors"
import { connectDB } from "./dbconfig/connectdb.js"
import taskRouter from "./routes/taskRouter.js"
import userRouter from "./routes/userRouter.js"

const app = express()

connectDB()
app.use(express.json())
app.use(cors())


app.use('/task', taskRouter)
app.use('/user', userRouter)

app.listen(6969, () => {
    console.log("Task Node Server Running on 6969");
})