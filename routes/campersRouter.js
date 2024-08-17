import express from "express";
import {
    getAllCampers,
    getOneCamper
} from "../controllers/campersControllers.js";

const campersRouter = express.Router();

campersRouter.get("/", getAllCampers);
campersRouter.get("/:id", getOneCamper);
// campersRouter.post("/:id/favorite", addFavoriteCamper);
// campersRouter.delete("/:id/favorite", deleteFavoriteCamper);




export default campersRouter;