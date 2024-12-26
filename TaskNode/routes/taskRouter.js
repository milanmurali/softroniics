import express from "express";

import { add, deletee, view } from "../controllers/taskController.js";

const taskRouter = express.Router()

taskRouter.post("/add", add)
taskRouter.get("/view", view)
taskRouter.delete("/delete/:id", deletee)


export default taskRouter