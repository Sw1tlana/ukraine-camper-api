import Booking from "../models/booking.js";

async function createBooking (bookingData) {
    try {
        const booking = new Booking(bookingData);
        await booking.save();
        return booking;

    } catch (error) {
       throw error; 
    }
};

export default {
    createBooking
}