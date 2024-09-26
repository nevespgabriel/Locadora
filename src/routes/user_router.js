import { Router } from "express";
import user_controller from "../controllers/user_controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

/*
    CRUD USUÁRIO
*/ 

router.post("/signup", user_controller.signup);
router.post("/login", user_controller.login);

export default router;