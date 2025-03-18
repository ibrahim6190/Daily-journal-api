import { Router } from "express";
import {
    addJournal,
    countJournals,
    getJournal,
    updateJournal,
    deleteJournals
} from "../controllers/journal.js";

const journalRouter = Router();

journalRouter.post("/journals", addJournal);
journalRouter.get("/journals", getJournal);
journalRouter.get("/journals/count", countJournals);
journalRouter.patch("/journals/:id", updateJournal);
journalRouter.delete("/journals/:id", deleteJournals);

export default journalRouter;