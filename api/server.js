import express from "express";
import ProductRouter from "../routers/product.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(`/api/v1`, ProductRouter);

app.listen(port);


console.log(`Server started on port ${port}`);