import express from "express"
import { add, deletee, login, update, view, viewid } from "../controllers/useruploadcontroller.js"

const useruploadrouter = express.Router()

useruploadrouter.post("/add", add)
useruploadrouter.post("/login", login)
// userRouter.post("/register",)


useruploadrouter.get("/view", view)
useruploadrouter.get("/viewid/:id", viewid)

useruploadrouter.put("/update/:id", update)

useruploadrouter.delete("/delete/:id", deletee)

export default useruploadrouter