import express from "express";
import database from "../bd.config.js";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

const test = await database.query("SELECT * FROM products");

console.log(test);
console.log(`Server started on port ${port}`);