import express, { Request, Response } from "express";
import { AppDataSource } from "./config/database";
import cors from "cors";
const app = express();
import user from "./routes/user";
import "dotenv/config";

const PORT = process.env.PORT as unknown as number || 8000;

// Apply Middlewares
app.use(express.json());
app.use(cors())
app.use("/user", user);

// Initialize Database
AppDataSource.initialize()
  .then(async () => {
    console.log("Database has been initialized");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to AIDCursor backend Server" });
});

app.listen(PORT, () => {
  console.log("Listening at PORT", PORT);
});
