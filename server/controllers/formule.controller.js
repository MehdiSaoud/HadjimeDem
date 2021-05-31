const Joi = require('joi');
const Formule = require('../models/formule.model');

const formuleSchema = Joi.object().keys({
  type: Joi.string().required(),
  options: Joi.array().required(),
})


async function insert(formule) {
  formule = await Joi.validate(formule, formuleSchema, { abortEarly: false });
  return await new Formule(formule).save();
}

async function getAll() {
  return await Formule.find({});
}

module.exports = {
  insert,
  getAll
}


