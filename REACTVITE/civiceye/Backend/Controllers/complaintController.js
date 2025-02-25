import mongoose from "mongoose";
import complaint from "../Models/complaintSchema.js";
import User from "../Models/userSchema.js";
import 'dotenv/config'

const PORT = process.env.PORT || 4000


export async function addComplaint(req, res) {
    try {
        // console.log(req.body);
        let userId = req.body.userId;

        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }
        let userexists = await User.findOne({ _id: userId });
        if (!userexists) {
            return res.status(404).json({ message: "User Not Found" });
        }
        // let proof = req.file.filename;
        let proof = req.file ? req.file.filename : null;
        // console.log("Uploaded proof filename:", proof); // Debugging log
        const response = await complaint.create({ ...req.body, proof });
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getallComplaints(req, res) {
    try {
        const userId = req.params.id; // Get userId from request body

        // Validate userId format
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }
        // Find user in the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Check if the user is an admin
        if (user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden: Not an admin" });
        }
        // If admin, fetch all complaints
        const complaints = await complaint.find();

        const updatedComplaints = complaints.map((comp) => ({
            ...comp._doc,
            proof: comp.proof ? `http://localhost:${PORT}/proofs/${comp.userId}/${comp.proof}` : null,
        }));

        return res.status(200).json(updatedComplaints);
    } catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function mycomplaints(req, res) {
    const id = req.params.id;
    try {
        const complaints = await complaint.find();

        const updatedComplaints = complaints.map((comp) => ({
            ...comp._doc,
            proof: comp.proof ? `http://localhost:${PORT}/proofs/${comp.userId}/${comp.proof}` : null,
        }));
        
        if (!updatedComplaints) {
            return res.status(404).json({ message: "No Complaints Not Found" });
        }
        return res.status(200).json(updatedComplaints);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
