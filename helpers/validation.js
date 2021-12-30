const req = require("express/lib/request")
const Joi = require("joi")

const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .max(255),

        email: Joi.string().email(),
        password: Joi.string().required()
    })

    const validation =  schema.validate(data);

    return validation;
}

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().required()
    })

    const validation =  schema.validate(data);
    return validation;
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;