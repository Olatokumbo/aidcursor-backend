import express, { Request, Response } from "express";
import { AppDataSource } from "./config/database";
const app = express();


// Initialize Database
AppDataSource.initialize()
  .then(async () => {
    console.log("Database has been initialized");
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = 8000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log("Listening at PORT", PORT);
});
