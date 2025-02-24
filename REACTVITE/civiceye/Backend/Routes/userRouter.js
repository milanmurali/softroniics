import express from "express"
import { deleteuser, initial, login, register, updateuser, viewuser } from "../Controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/initial", initial)

userRouter.post("/register", register)
userRouter.post("/login", login)

userRouter.put("/update/:id", updateuser)
userRouter.delete("/delete/:id", deleteuser)

userRouter.get("/viewuser/:id", viewuser) 


export default userRouter