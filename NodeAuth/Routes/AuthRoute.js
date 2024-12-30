import express from "express"
import { initial } from "../Controllers/AuthController.js"

const AuthRouter = express.Router()

AuthRouter.get("/initial", initial)

export default AuthRouter