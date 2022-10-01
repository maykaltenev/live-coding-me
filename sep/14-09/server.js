import express from 'express';

import teaRoutes from './routes/teaRoutes.js';
import userRoutes from './routes/userRoutes.js'
const app = express();
app.use(express.json());

//use the tearouter module for /tea
app.use('/api/tea', teaRoutes);
app.use('/api/user', userRoutes);
app.listen(5000, () => {
    console.log("the server is listening for requests.");
});