import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import { autentication } from "../middlewares/autentication";

const userRoutes = Router()

userRoutes.get("/profile", autentication, UserControllers.profile)
userRoutes.post("/auth", UserControllers.auth)

export default userRoutes