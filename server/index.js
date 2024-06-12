import express from "express";
import cors from "cors"
import mysql from "mysql";

const app = express();

app.use(express.json());
app.use(cors())


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test_schema",
});

app.get("/", (req, res) => {
  res.json("I love ubit");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM test_schema.books";
  db.query(q, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});
app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `price` , `desc`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.price,
      req.body.desc,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(3000, () => {
  console.log("server is running");
});
