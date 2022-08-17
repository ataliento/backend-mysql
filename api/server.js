import express from "express";
import mysql2 from "mysql2/promise";

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql2.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "test",
});

const response = await pool.query("SELECT 1 + 1 AS solution");

console.log(response);

app.listen(port);
console.log(`Server started on port ${port}`);