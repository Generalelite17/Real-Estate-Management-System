const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("./config/index.mjs");
const db = require("./config/db.mjs");
const userRouter = require("./api/user.mjs");

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(config.PORT, () =>
  console.log(`App listening on PORT ${config.PORT}`)
);
