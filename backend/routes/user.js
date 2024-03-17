const express = require("express");
const { authMiddleware } = require("../authMiddleware");

const userRouter = express.Router();

userRouter.get("/", authMiddleware, (req, res) => {

})

module.exports = {
    userRouter
}