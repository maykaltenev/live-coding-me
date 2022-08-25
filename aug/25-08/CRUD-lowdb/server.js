import express from "express";
import "dotenv/config"; // require("dotenv").config();
import { Low, JSONFile } from "lowdb";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`server is running on port (from .env) ${process.env.PORT}`)
);
app.use(express.json());
// lowdb configuration=========================
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

console.log(db.data.products);
//===============================================

// endpoint 1: sends all users
app.get("/users", (req, res) => {
  res.send(db.data.users);
});

// endpoint 2: sends all products
app.get("/products", (req, res) => {
  res.send(db.data.products);
});

app.post('/signup', async (req, res) => {
  console.log(req.body);

  let newUser = req.body;

  newUser.id = db.data.users.length + 1;
  db.data.users.push(newUser);

  await db.write();

  res.send('user added successfully');
})