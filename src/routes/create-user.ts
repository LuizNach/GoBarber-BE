import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/user", (request, response) => {
    const {name, email, password} = request.body;

    const user = {
        name,
        email,
        password
    }
    return response.status(201).json({ user: user})
})

export default userRoutes;