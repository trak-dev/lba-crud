import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());

app.use("/", routes);

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    })
  )
  .catch((error) => console.log(error));
