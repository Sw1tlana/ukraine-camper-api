import express from "express";
import { searchCampersByLocation } from "../controllers/locationController.js";

const searchRouter = express.Router();

searchRouter.get("/", searchCampersByLocation);

export default searchRouter;