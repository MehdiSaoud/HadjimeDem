const Joi = require('joi');
const Quote = require('../models/quote.model');

const quoteSchema = Joi.object().keys({

  furnitures: Joi.array().required(),
  volume: Joi.number().required(),
  relocationDate: Joi.date().required(),
  createdAt: Joi.date().optional(),
  relocationDescription: Joi.string().required(),
  recoveryCount: Joi.number().required(),
  state: Joi.string().required().allow('Envoyé', 'À relancer', 'Validé', 'Refusé'),
  lastRecoveryDateCall: Joi.date().optional(),

  // Customer info
  customer: Joi.object().keys({
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    mail: Joi.string().email().required(),
    phone: Joi.string().required(),
  }),
  // Arrival info
  arrival: Joi.object().keys({
    homeType: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    zipCode: Joi.number().required(),
    floor: Joi.number().required(),
    elevator: Joi.object().keys({
      available: Joi.boolean().required(),
      size: Joi.string().required(),
    }),
    additionalInfo: Joi.string().optional(),
  }),
  // Leaving info
  leaving: Joi.object().keys({
    homeType: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    zipCode: Joi.number().required(),
    floor: Joi.number().required(),
    elevator: Joi.object().keys({
      available: Joi.boolean().required(),
      size: Joi.string().required(),
    }),
    additionalInfo: Joi.string().optional(),
  }),
  
  // Prices
  prices: Joi.object().keys({
    low: Joi.number().required(),
    medium: Joi.number().required(),
    hight: Joi.number().required(),
  }).required(),

  // Inventory
  inventory: Joi.object().keys({
    room: Joi.string().required(),
    customFurnitures: Joi.object().keys({
      name: Joi.string().required(),
      dismantle: Joi.string().required(),
      volume: Joi.number().required(),
      size: Joi.object().keys({
        width: Joi.number().required(),
        height: Joi.number().required(),
        depth: Joi.number().required(),
      }).required(),
    }),
  furnitures: Joi.array().required(),
  }).optional(),
})


async function insert(quote) {
  quote = await Joi.validate(quote, quoteSchema, { abortEarly: false });
  return await new Quote(quote).save();
}

module.exports = {
  insert
}


