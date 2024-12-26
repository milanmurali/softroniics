import express from "express";

import { add, view } from "../controllers/taskController.js";

const taskRouter = express.Router()

taskRouter.post("/add", add)
taskRouter.get("/view", view)


export default taskRouter