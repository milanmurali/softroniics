import task from "../models/taskschema.js";

const add = async (req, res) => {
    let newtask = new task(req.body)
    let response = await newtask.save()
    res.json(response)
    console.log(response);
}

export { add }