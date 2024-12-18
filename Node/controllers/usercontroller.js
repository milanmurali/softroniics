import { request, response } from "express";
import user from "../models/userschema.js"


const add = async (req, res) => {
    let newuser = new user(req.body)
    let response = await newuser.save()
    res.json(response)
    console.log(response);

}

const uploadd = async (req, res) => {
    try {
        console.log(req.file);
        let path = req.file.filename
        const uploadfile = new user({ ...req.body, image: path })
        const uploadedfile = await uploadfile.save()
        res.json(uploadedfile)
    }
    catch (error) {
        console.log(error);
        res.json(error.message)
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
            console.log("Ingane oruthan illa");
            return res.status(404).json({ message: "Ingane oruthan illa" })
        }
        if (users.password === password) {
            console.log("Mmm kerikko")
            return res.json(users);
        }
        else {
            console.log("Noki Type cheyy");
            return res.status(401).json({ message: "Noki Type cheyy" })
        }
    }
    catch (error) {
        console.error("Entho Kozppand", error);
        return res.status(500).json({ message: "Entho Kozppand" })

    }
}
export { add, view, viewid, update, deletee, login, uploadd }   