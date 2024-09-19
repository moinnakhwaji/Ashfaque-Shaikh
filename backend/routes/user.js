import express from "express"
import { CreateUser } from "../controllers/user.js"

const app = express.Router()

// Route to get all products
app.post("/create",CreateUser)

export default app