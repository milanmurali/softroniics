import { request, response } from "express";
import user from "../models/userschema.js"


const add = async (req, res) => {
    let newuser = new user(req.body)
    let response = await newuser.save()
    res.json(response)
    console.log(response);

}

const view = async (req, res) => {
    let response = await user.find()
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
            console.log("Nee ini venda");
            return res.status(401).json({ message: "Nee ini venda" })
        }
    }
    catch (error) {
        console.error("Entho Kozppand", error);
        return res.status(500).json({ message: "Entho Kozppand" })

    }
}
export { add, view, update, deletee, login }   