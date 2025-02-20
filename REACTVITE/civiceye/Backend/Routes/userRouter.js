import express from "express"
import { initial, login, register } from "../Controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/initial", initial)
userRouter.post("/register", register)
userRouter.post("/login", login)

export default userRouter