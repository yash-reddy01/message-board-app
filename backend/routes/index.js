const express = require("express");
const { userRouter } = require("./user");
const { messageRouter } = require("./message");
const { authRouter } = require("./auth");

const router = express.Router()

router.use("/user", userRouter);
router.use("/message", messageRouter);
router.use("/auth", authRouter);

module.exports = {
    router
};