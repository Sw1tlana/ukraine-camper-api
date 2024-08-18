import mongoose from "mongoose";
import { createBookingSchema } from "../schemas/bookingSchema";
import bookingsServices from "../services/bookingsServices";

export function addBooking(req, res, next) {
    const { error, value } = createBookingSchema.validate(req.body);

    if (error) {
    return res.status(400).json({ error: error.details[0].message });
    }
    
      if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    return res.status(400).json({ message: "Invalid ObjectId format" });
    }
    
    bookingsServices
    .createBooking(value)
    .then((newBooking) => {
        if (newBooking === null) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(newBooking);
    })

    .catch ((err) => next(err))
};