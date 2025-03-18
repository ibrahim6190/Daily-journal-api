import { JournalModel } from "../models/journal.js";

import { addjournalValidator } from "../validators/journal.js";

export const addJournal = async (req, res, next) => {
    try {
      console.log(req.file, req.files)
      //validate journal information
      const { error, value } = addjournalValidator.validate({
        ...req.body,
   });
      if (error) {
        return res.status(422).json(error);
      }
      //save journal information in database
      const result = await ProductModel.create(value);
      // Return response
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  
  export const getJournal = async (req, res, next) => {
    try {
      const { filter = "{}", sort = "{}" } = req.query;
      // Fetch journals from database
      const result = await JournalModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort));
  
      // Return respone
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  
  export const countJournals = (req, res) => {
    res.send("Journals counted!");
  };
  
  export const updateJournal = (req, res) => {
    res.send(`Journals with id ${req.params.id} updated`);
  };
  
  export const deleteJournals = (req, res) => {
    res.send(`Journals with id ${req.params.id} deleted`);
  };
  