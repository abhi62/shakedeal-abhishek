import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  color: {
    type: "string",
    required: true,
  },
  quantity: {
    type: "number",
    required: true,
  },
});

const products = mongoose.model("product", productSchema);

export default products;
