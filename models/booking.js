import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    comment: { type: String }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;