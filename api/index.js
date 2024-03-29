//Starting the backend
//Create and run the server
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //Be able to use env for security uploading on GitHub
import userRouter from "./routes/user.route.js";
import initializeApp from "firebase-admin/fb"; //Firebase SDK
dotenv.config(); //Initialize it

//Connect to the database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });

const server = express();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const fb = initializeApp(firebaseConfig);

//Listen to port number
server.listen(3000, () => {
  //Terminal run: node api/index.js -> installed nodemon and added script
  //Terminal run: npm run dev (server restarts automatically)
  console.log("Server is running on port 3000");
});

//Api Route to overslash
server.get("/test", (req, res) => {
  res.send("Hello, world!");
});

server.use("/api/user", userRouter);
