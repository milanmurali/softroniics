import express from "express";

import { add } from "../controllers/taskController.js";

const taskRouter = express.Router()

taskRouter.post("/add", add)

export default taskRouter