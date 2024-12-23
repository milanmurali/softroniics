import bcrypt from "bcrypt"
import user from "../models/userschema.js"

const register = async (req, res) => {
    try {
        console.log("req.body", req.body);
        let hashpass = await bcrypt.hash(req.body.password, 10) //hashing password
        console.log("hashpass", hashpass);

        let newuser = new user(req.body)
        newuser.password = hashpass
        let response = await newuser.save()

        res.json(response)
        console.log(response);
    }
    catch (error) {
        console.log(error.message);
    }
}

const view = async (req, res) => {
    let response = await user.find()
    res.json(response)
}

const viewid = async (req, res) => {
    let id = req.params.id
    let response = await user.findById(id)
    res.json(response)
}

const update = async (req, res) => {
    let id = req.params.id
    let response = await user.findByIdAndUpdate(id, req.body)
    res.json(response)
}

const deletee = async (req, res) => {
    let id = req.params.id
    let response = await user.findByIdAndDelete(id)
    res.json(response)
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let users = await user.findOne({ email: email })
        if (!users) {
            console.log("User Not Found");
            return res.status(404).json({ message: "User Not Found" })
        }
        if (users.password === password) {
            console.log("Login Succesful");
            return res.json(users);
        }
        else {
            console.log("Credential Mismatch");
            return res.status(401).json({ message: "Credential Mismatch" })
        }
    }
    catch (error) {
        console.error("Internal Server Error", error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}



export { view, viewid, update, deletee, login, register }   