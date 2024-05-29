import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/users.js";

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://nithin:12345@cluster0.fdrhbt2.mongodb.net/");

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

app.listen(3001, () => {
  console.log("server is running on 3001");
});
