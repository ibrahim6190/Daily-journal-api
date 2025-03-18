import { Schema, model } from "mongoose";

const journalSchema = new Schema ({
    title : { type: String, required: true}, 
    content : { type: String, required: true},
    // date : { type: String, required: true}
})

export const JournalModel = model ('journal', journalSchema);