import Joi from "joi";

export const createBookingSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  bookingDate: Joi.date().required(),
  comment: Joi.string()
});