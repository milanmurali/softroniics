import express from "express"
import { add } from "../controllers/admincontroller.js"

const adminRouter = express.Router()

adminRouter.post("/add",add)

export default adminRouter