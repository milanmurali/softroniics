import express from "express"
import { connect } from "mongoose"
import { connectDB } from "./dbconf/connectDB.js"

const app = express()

app.use(express.json())


connectDB()

app.listen(6969, () => {
    console.log("oodunnund")
})