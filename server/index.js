import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

app.get("/", (req, res) =>{
    res.send("Hello World")
})

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log("Server Start in PORT: ", Port);
    
})
