import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import todoRoutes from './routes/todoRoutes.js';

dotenv.config();
//define port number
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

//connecting to the database
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use('/api/todo',todoRoutes);

//deployment reasons
app.listen(PORT, (req, res) => {
    console.log(`The server is listening for requests on port ${PORT}`);
});