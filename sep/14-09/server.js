import express from 'express';

import teaRoutes from './routes/teaRoutes.js';

const app = express();
app.use(express.json());

//use the tearouter module for /tea
app.use('/tea', teaRoutes);

app.listen(3000, () => {
    console.log("the server is listening for requests.");
});