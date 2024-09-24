import e from "express";
import "dotenv/config";
import "./config/db.js";
import movie_router from "./routes/movie_router.js";
import user_router from "./routes/user_router.js";

const app = e();

app.use(e.json());
app.use("/movie", movie_router);
app.use("/", user_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at ${process.env.API_PORT}  port.`);
})