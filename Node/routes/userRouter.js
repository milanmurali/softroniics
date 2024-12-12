import express from "express"
import { add, deletee, login, update, view, viewid } from "../controllers/usercontroller.js"

const userRouter = express.Router()

userRouter.post("/add", add)
userRouter.post("/login", login)
// userRouter.post("/register",)


userRouter.get("/view", view)
userRouter.get("/viewid/:id", viewid)

userRouter.put("/update/:id", update)

userRouter.delete("/delete/:id", deletee)

export default userRouter