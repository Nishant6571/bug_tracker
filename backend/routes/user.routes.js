const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const { BugModel } = require("../models/bugModel");
const { auth } = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send({ msg: "List of All the Users.", users });
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

// register route
userRouter.post("/register", async (req, res) => {
  const { name, avatar, email, password, created_at } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).send({ msg: "User Already Registered." });
    }
    bcrypt.hash(password, 6, async (err, hash) => {
      const newUser = new UserModel({
        name,
        avatar,
        email,
        password: hash,
        created_at,
      });
      await newUser.save();
    });
    res.status(200).send({ msg: "New User Registered Successfully." });
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

// login route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).send({ Error: err });
        } else if (result) {
          const token = jwt.sign({ userID: user._id }, "nishant", {
            expiresIn: "1d",
          });
          res.status(200).send({ msg: "User Logged in Successfully.", token });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

// get all bugs for the user
userRouter.get("/bugs", auth, async (req, res) => {
  try {
    const bugs = await BugModel.find({ raised_by: req.body.userID });
    console.log(req.body.userID);
    res.status(200).send({ msg: "List of All the Bugs.", bugs });
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

// post bug
userRouter.post("/bugs", auth, async (req, res) => {
  const { title, description, source, severity } = req.body;
  try {
    const newBug = new BugModel({
      title,
      description,
      source,
      severity,
      raised_by: req.body.userID,
    });
    await newBug.save();
    res.status(200).send({ msg: "New Bug Added Successfully.", newBug });
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

// find bug by id
userRouter.get("/bugs/:id", auth, async (req, res) => {
  try {
    const bugId = req.params.id;
    const bug = await BugModel.findById(bugId);
    if (!bug) {
      return res.status(404).send({ error: "Bug not found." });
    }

    res.status(200).send({ msg: "Bug found successfully.", bug });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
// find bug by id and update
userRouter.patch("/bugs/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await BugModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Bug updated successfully." });
  } catch (error) {
    res.status(500).send({ msg: "Error updating Note", error: error });
  }
});
// find bug by id and delete
userRouter.delete("/bugs/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await BugModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Bug Deleted successfully." });
  } catch (error) {
    res.status(500).send({ msg: "Error updating Note", error: error });
  }
});

module.exports = { userRouter };
