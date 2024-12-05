import express from "express"
import { add, deletee, update, view } from "../controllers/usercontroller.js"

const userRouter = express.Router()

userRouter.post("/add", add)
userRouter.get("/view", view)
userRouter.put("/update/:id", update)
userRouter.delete("/delete/:id", deletee)

export default userRouter