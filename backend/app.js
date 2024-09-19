import express from 'express';
import connectToDatabase from './db/db.js';
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"

const app = express();
dotenv.config()
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 5000;
connectToDatabase()
app.use(express.json());



app.use('/user', userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
