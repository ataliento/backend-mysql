import express from "express";
import { getProducts } from "../controllers/product.js";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

const response = await getProducts();

console.log(response);
console.log(`Server started on port ${port}`);