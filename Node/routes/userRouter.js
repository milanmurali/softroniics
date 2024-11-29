import express from "express"
import { add, update, view } from "../controllers/usercontroller.js"

const userRouter = express.Router()

userRouter.post("/add", add)
userRouter.get("/view", view)
userRouter.put("/update/:id", update)

export default userRouter