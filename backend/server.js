import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/users.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.post("/createUser", (req, res) => {
  console.log(req.body);
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const _id = req.params.id;
  UserModel.findById({ _id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age, email: req.body.email }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on 3001");
});
