import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "test_schema",
});



app.listen(PORT, () => {
  console.log(`server is running`);
});
