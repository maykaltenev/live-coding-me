import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import teaRoutes from './routes/teaRoutes.js'
//Loads .env file contents into process.env.
dotenv.config();

const app = express();

//allow us to parse json information from http body to req.body
app.use(express.json());

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });
app.use('/api/tea', teaRoutes)

app.listen(3000, (req, res) => {
    console.log("Server is listening for HTTP requests on port 3000");
});
