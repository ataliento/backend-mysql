import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ignacio",
    database: "proyectofullstack"
});

export default pool;