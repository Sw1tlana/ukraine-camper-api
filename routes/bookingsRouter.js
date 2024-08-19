import express from "express";
import { addBooking } from "../controllers/bookingsController.js";
import validateBody from "../helpers/validateBody.js";
import { createBookingSchema } from "../schemas/bookingSchema.js";

const bookingsRouter = express.Router();

bookingsRouter.post("/",
    validateBody(createBookingSchema),
    addBooking);

export default bookingsRouter;