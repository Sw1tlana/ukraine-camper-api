import Booking from "../models/booking";

async function createBooking (bookingDate) {
    try {
        const booking = new Booking(bookingDate);
        await booking.save();
        return booking;

    } catch (error) {
       throw error; 
    }
};

export default {
    createBooking
}