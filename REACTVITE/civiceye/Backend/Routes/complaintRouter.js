import express from "express"
import { addComplaint, getallComplaints, mycomplaints, statusUpdate } from "../Controllers/complaintController.js"
import { proofupload } from "../multer.js"



const complaintRouter = express.Router()

complaintRouter.post("/add", proofupload.single("proof"), addComplaint)
complaintRouter.get("/getall/:id", getallComplaints)
complaintRouter.get("/get/:id", mycomplaints)
complaintRouter.put("/update/:id", statusUpdate)

 
export default complaintRouter