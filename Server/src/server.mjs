import express from "express";
const app = express();
import cors from "cors";

import config from "./config/index.mjs";
import db from "./config/db.mjs";
import userRouter from "./api/user.mjs";

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 8000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
