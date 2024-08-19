import { createBookingSchema } from "../schemas/bookingSchema.js";
import bookingsServices from "../services/bookingsServices.js";

export function addBooking(req, res, next) {
    const { error, value } = createBookingSchema.validate(req.body);

    if (error) {
    return res.status(400).json({ error: error.details[0].message });
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