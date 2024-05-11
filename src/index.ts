import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import Auth from "./routes/auth";
import dbConnect from "./config/dbConnect";

config();
dbConnect();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/auth", Auth);


app.get("/", (req: Request, res: Response) => {
  res.send("server is running smoothly ");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
