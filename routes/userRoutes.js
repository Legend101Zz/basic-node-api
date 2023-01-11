const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();
const bodyParser = require("body-parser");

userRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

module.exports = userRouter;
