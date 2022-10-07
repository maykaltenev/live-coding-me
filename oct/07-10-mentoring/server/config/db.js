const mongoose = require('mongoose');

console.log(module)
module.exports = () => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
        .then(() => {
            console.log("Database connected! 😃");
        })
        .catch((error) => {
            console.log(error.message);
            console.log("🤨");
        });
}
