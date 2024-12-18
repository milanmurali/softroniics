import express from "express"
import { add, deletee, login, update, view, viewid, uploadd } from "../controllers/usercontroller.js"
import { fileupload } from "../multer.js"

const userRouter = express.Router()

userRouter.post("/add", add)
userRouter.post("/login", login)
// userRouter.post("/register",)

userRouter.post("/upload", fileupload.single("image"), uploadd)

userRouter.get("/view", view)
userRouter.get("/viewid/:id", viewid)

userRouter.put("/update/:id", update)

userRouter.delete("/delete/:id", deletee)

export default userRouter