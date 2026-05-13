import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
// API
import job from './api/jobcreate.js'
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

connectDB()

// API Routes
app.use('/api/job', job)
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server Start in PORT: ", Port);
})
