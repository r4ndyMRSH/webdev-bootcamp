import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "0801",
  port: 5432,
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect();

app.get("/", async (req, res) => {
  let countries = [];
  let total = 0;
  const result = await db.query("SELECT country_code FROM visited_countries");

  console.log(result.rows[0].country_code);

  /*   for (let i = 0; i < result.rows.length; i++){
    countries.push(result.rows[i].country_code);
    total++;
  } */

  result.rows.forEach((element) => {
    countries.push(element.country_code);
    total++;
  });
  total = countries.length;
  res.render("index.ejs", { countries: countries, total: total });
});

//Adding country
app.post("/add", async (req, res) => {
  let userInput = req.body["country"];

  const result = await db.query(
    `Select country_code from countries where country_name = '${userInput}'`
  );

  if (result.rows.length !== 0) {
    await db.query(
      `INSERT INTO visited_countries (country_code) VALUES ('${result.rows[0].country_code}')`
    );
    console.log(result.rows[0].country_code);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
