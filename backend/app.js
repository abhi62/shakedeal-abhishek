import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
//constants
const PORT = process.env.PORT;
const db_url = process.env.DB_URL;

//middleware

//rout import

import productRoutes from "./controller/product.js";

app.use("/product", productRoutes);

mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB started");
  })
  .catch((err) => {
    console.log({ message: err });
  });

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
