import express from "express"
import { getallfeedbacks, postfeedback } from "../Controllers/feedbackController.js"




const feedbackRouter = express.Router()

feedbackRouter.post("/post",postfeedback)
feedbackRouter.get("/getall/:id",getallfeedbacks)

export default feedbackRouter