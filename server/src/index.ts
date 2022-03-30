import * as express from "express";
import users from "./controllers/users";
import { createConnection } from "typeorm";
import * as cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

createConnection().then(() => {
  const app = express();
  
  app.use(cors());

  app.use(express.json());

  app.all("*", function (req, res, next) {
    const { secret } = req.headers;
    secret === process.env.API_KEY ? next() : res.send("secret doesn't match");
  });

  const PORT = process.env.PORT || 1800;

  app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
  });

  app.get("/", (req, res) =>
    res.send("REST Fullstack Challenge 20201209 Running")
  );

  app.use("/users", users);
});
