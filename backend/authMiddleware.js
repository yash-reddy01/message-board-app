const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.Authorization;

    if(!authHeader || !authHeader.startswith('Bearer ')) {
        return res.status(403).json({
            message: "Access denied"
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.userId = decoded.userId
        next();

    } catch(err) { 
        return res.status(403).json({
            message: "Access denied"
        })
    }
}




module.exports = {
    authMiddleware
}