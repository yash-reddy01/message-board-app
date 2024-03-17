const z = require("zod");

const register = z.object({
    emailId: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
});

const login = z.object({
    emailId: z.string().required(),
    password: z.string().required()
});

const message = z.object({
    content: z.string()
})

module.exports = {
    register, login, message
}