import Joi from "joi";

export const addjournalValidator = Joi.object({
   title : Joi.string().required(),
   content : Joi.string().required()
   
//    date : Joi.defaults.date.now

});