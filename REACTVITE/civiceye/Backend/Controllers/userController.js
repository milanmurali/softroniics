import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import user from "../Models/userSchema.js";


export async function initial(req, res) {
    res.send("YUPPPPPPP");
}

export async function login(req, res) {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Data not Valid" });
        }
        let userexists = await user.findOne({ email });
        if (!userexists) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const validpassword = await bcrypt.compare(password, userexists.password);
        if (!validpassword) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ userid: userexists._id, email: userexists.email }, process.env.JWTKEY, { expiresIn: "1h" });
        return res.status(200).json(
            {
                message: "Login Successful",
                token,
                id: userexists._id

            });
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}

export async function register(req, res) {
    try {
        let { name, email, password, mobile, dob } = req.body;

        if (!name || !email || !password || !mobile || !dob) {
            return res.status(400).json({ message: "Data not valid" });
        }

        let emailalreadyexists = await user.findOne({ email });
        if (emailalreadyexists) {
            return res.status(409).json({ message: "Email Already Exists" });
        }

        const PSALT = parseInt(process.env.PSALT) || 10;
        password = await bcrypt.hash(password, PSALT);
        let response = await user.create({ name, email, password, mobile, dob });
        res.status(201).json({ message: "New User Created" });
        console.log(response);
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}

