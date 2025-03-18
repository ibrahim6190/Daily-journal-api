import express from "express";
import mongoose from "mongoose";
import journalRouter from "./routes/journal.js";

const MONGO_URI =
  "mongodb+srv://ecommerce-api:2gWS8VHWU7HtXrkr@cluster0.if4nk.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0";

  await 'mongoose.connect(process.env.MONGO_URI)';

const app = express();

app.use(express.json());

app.use(journalRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
