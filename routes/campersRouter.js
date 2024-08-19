import express from "express";
import {
    getAllCampers,
    getOneCamper,
    removeFavoriteCamper,
    addFavoriteCamper,
    searchCampersByLocation
} from "../controllers/campersControllers.js";

const campersRouter = express.Router();

campersRouter.get("/", getAllCampers);
campersRouter.get("/:id", getOneCamper);
campersRouter.post("/favorite/:id", addFavoriteCamper);
campersRouter.delete("/favorite/:id", removeFavoriteCamper);
campersRouter.get("/search", searchCampersByLocation);



export default campersRouter;