import admin from "../models/adminschema.js"




const add = async (req, res) => {
    let newadmin = new admin(req.body)
    let response = await newadmin.save()
    res.json(response)
    console.log(response);

}

export { add }