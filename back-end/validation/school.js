const Joi = require("joi");

const name = Joi.string().min(3).max(50).required();

const documents = Joi.array().required();

const schoolSchema = Joi.object({
  name,
  documents,
});

module.exports = {
  schoolValidator(values) {
    return schoolSchema.validateAsync(values);
  },
};
