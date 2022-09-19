import express from "express";
import mongoose from "mongoose";

const app = express();
try {
    await mongoose.connect(
        "mongodb + srv://begem0th:ZhxovPspsjxx1IIX@cluster0.u7pstpx.mongodb.net/test"
    );
    console.log("Database connected");
} catch (error) {
    console.log(error.message);
    console.log('Error')
}
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});