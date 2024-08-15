import express from "express";
import cors from "cors";


const app = express();

app.use(cors());


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