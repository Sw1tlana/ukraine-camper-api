import Joi from "joi";

export const camperSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().min(0).max(5).required(),
  location: Joi.string().required(),
  adults: Joi.number().integer().min(0).required(),
  children: Joi.number().integer().min(0).required(),
  engine: Joi.string().required(),
  form: Joi.string().required(),
  length: Joi.number().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
  tank: Joi.number().required(),
  consumption: Joi.number().required(),
  description: Joi.string().optional(),
  details: Joi.string().optional(),
  gallery: Joi.array().items(Joi.string()).optional(),
  reviews: Joi.array().items(Joi.object({
    reviewer: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    comment: Joi.string().optional()
  })).optional()
});