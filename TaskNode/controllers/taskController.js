import task from "../models/taskschema.js";

const add = async (req, res) => {
    try {
        let newtask = new task(req.body)
        let response = await newtask.save()
        res.json(response)
        console.log(response);
    }
    catch (error) {
        console.log(error.message);
    }
}

const view = async (req, res) => {
    let response = await task.find()
    res.json(response)
}

export { add, view }