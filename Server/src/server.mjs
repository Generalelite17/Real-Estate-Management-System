const express = require("express");
const app = express();
const cors = require("cors");

const config = require("./config/index.mjs");
const db = require("./config/db.mjs");
//const userRouter = require("./api/user.mjs");

db(config.MONGO_URI, app);

app.use(cors({ origin: true }));
app.use(express.json());

//app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 8000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
