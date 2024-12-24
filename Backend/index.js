import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors'
import { create } from "./userSchema/userSchema.js";
const app = express();
app.use(bodyParser.json());
app.use(cors())
dotenv.config();

const URL = process.env.URL;
const PORT = process.env.PORT;
mongoose.connect(URL).then(() => {
    console.log("DB connected successfully")
    app.listen(PORT, () => {
        console.log(`app is listen  PORT No ${PORT} `)
    })
})
    .catch((err) => {
    console.log(err)
})

app.use('/create',create)