import mongoose from "mongoose";
import complaint from "../Models/complaintSchema.js";
import User from "../Models/userSchema.js";



export async function addComplaint(req, res) {
    try {
        let userId = req.body.userId;
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }
        let userexists = await User.findOne({ _id: userId });
        if (!userexists) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const response = await complaint.create(req.body);
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getallComplaints(req, res) {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
        }
        const response = await complaint.find();
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function mycomplaints(req, res) {
    const id = req.params.id;
    try {
        const response = await complaint.find({ userid: id });
        if (!response) {
            return res.status(404).json({ message: "No Complaints Not Found" });
        }
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
