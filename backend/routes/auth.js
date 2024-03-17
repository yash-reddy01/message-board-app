const express = require("express");
const { register, message, login } = require("../types");
const { User } = require("../db");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { success } = register.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        emailId: req.body.emailId
    });

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await User.create(req.body);

    const userId = user._id;
    
    //JWT token needs to be added
});

authRouter.post("/login", async (req, res) => {
    const { succes } = login.safeParse(req.body);
    if(!succes) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const existingUser = User.findOne({
        emailId: req.body.emailId,
        password: req.body.password
    })

    if(!existingUser) {
        return res.status(411).json({
            message: "User not found"
        })
    }
    //JWT token needs to be added

    return res.status(200).json({
        message: "Login Successfull"
    });
})

module.exports = {
    authRouter
}