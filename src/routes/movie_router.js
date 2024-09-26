import { Router } from "express";
import movie_controller from "../controllers/movie_controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

router.post("/", jwtAuthenticator, movie_controller.store);
router.get("/", movie_controller.index);

export default router;