import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

import campersRouter from "./routes/campersRouter.js";
import bookingsRouter from "./routes/bookingsRouter.js";
import searchRouter from "./routes/locationRouter.js";

import "./db.js";

const app = express();
app.use(express.json());

app.use(morgan("tiny"));

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Ukraine Camper API.");
});

app.use("/api/campers", campersRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/search", searchRouter);


app.use((_, res) => {
    res.status(400).json({ message: "Route not found" });
});


app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

app.listen(3000, () => {
    console.log("Server is running. Use our API on port: 3000")
});



export default app;