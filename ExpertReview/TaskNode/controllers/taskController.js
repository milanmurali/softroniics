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
const viewid = async (req, res) => {
    let id = req.params.id
    let response = await task.find({ loggedinuser: id });
    res.json(response)
}
const update = async (req, res) => {
    let id = req.params.id
    let response = await task.findByIdAndUpdate(id, req.body)
    res.json(response)
}
const deletee = async (req, res) => {
    let id = req.params.id
    let response = await task.findByIdAndDelete(id)
    res.json(response)
}
export { add, view, viewid, update, deletee }