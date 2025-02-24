import express from "express"
import { addComplaint, getallComplaints } from "../Controllers/complaintController.js"



const complaintRouter = express.Router()

complaintRouter.post("/add", addComplaint)
complaintRouter.get("/getall", getallComplaints)
 
export default complaintRouter