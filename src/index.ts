import express, { Request, Response } from "express";
import { AppDataSource } from "./config/database";
import { User } from "./user/user.entity";
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

app.get("/", async (_req: Request, res: Response) => {
  // return User.save({
  //   email: "faithodesola",
  //   firstName: "David",
  //   lastName: "Odesola",
  //   // hash: "1234567"
  // });

  const m = await User.findOne({
    where: {
      id: "0832f3d9-1b84-4d2e-aff8-6d3b5cf17c34",
    },
  });
  console.log(m);
  res.json("hello")
});

app.listen(PORT, () => {
  console.log("Listening at PORT", PORT);
});
