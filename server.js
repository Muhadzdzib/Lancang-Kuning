import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portfolio_db"
});

app.get("/api/komentar", (req, res) => {
  db.query("SELECT * FROM komentar ORDER BY id DESC", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/api/komentar", (req, res) => {
  const { nama, pesan } = req.body;
  db.query(
    "INSERT INTO komentar (nama, pesan) VALUES (?, ?)",
    [nama, pesan],
    (err, result) => {
      if (err) throw err;
      res.json({ success: true, id: result.insertId });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
