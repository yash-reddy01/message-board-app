require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        required: true,
        type: String,
        trim: true,
    },
    lastName: {
        required: true,
        type: String,
        trim: true
    }
});

const messageSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", messageSchema);


module.exports = {
    User, Message
}

