const express = require('express');
const app = express();

require('dotenv').config();
const connectDb = require('./config/db');
connectDb();

app.use(express.json());
const port = process.env.P0RT || 8000;
app.listen(3001, () => console.log(`Server is up and running at Port ${port} 🪐!`));