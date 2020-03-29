const { celebrate, Segments, Joi } = require('celebrate')

const ongRegister = () => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    })
}

const headerAuthentication = () => {
    return celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown()
    })
}

const sessionAuthorization = () => {
    return celebrate({
        [Segments.BODY]: Joi.object({
            id: Joi.string().required(),
        }).unknown()
    })
}

const incidentDelete = () => {
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        })
    })
}

const incidentsList = () => {
    return celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })
    })
}

const incidentCreate = () => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        })
    })
}

module.exports = {
    ongRegister,
    headerAuthentication,
    incidentDelete,
    incidentsList,
    sessionAuthorization,
    incidentCreate
}