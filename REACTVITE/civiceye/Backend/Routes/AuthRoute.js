import express from "express"
import { initial, login, register } from "../Controllers/AuthController.js"

const AuthRouter = express.Router()

AuthRouter.get("/initial", initial)
AuthRouter.post("/register", register)
AuthRouter.post("/login", login)

export default AuthRouter