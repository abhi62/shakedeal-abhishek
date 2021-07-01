import express from "express";
import products from "../model/product.js";
import Products from "../model/product.js";

const rout = express.Router();

rout.get("/", async (req, res) => {
  try {
    const product = await Products.find();
    if (!product) {
      return res.status(404).send({ message: "product not present" });
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

rout.post("/", async (req, res) => {
  try {
    const addProd = new products({
      name: req.body.name,
      color: req.body.color,
      quantity: req.body.quantity,
    });

    addProd = await addProd.save();

    if (!addProd) {
      return res.status(404).send({ message: error });
    }
    res.send(addProd);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default rout;
