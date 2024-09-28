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

async function checkVisitedCountries() {
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries");

  //  console.log(result.rows[0].country_code);

  result.rows.forEach((element) => {
    countries.push(element.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisitedCountries();

  res.render("index.ejs", { countries: countries, total: countries.length });
});

//Adding country
app.post("/add", async (req, res) => {
  let userInput = req.body["country"];

  try {
    const result = await db.query(
      //Using LOWER for error handling
      `Select country_code from countries where LOWER(country_name) LIKE '%${userInput.toLowerCase()}%'`
    );

    const countryCode =result.rows[0].country_code;
    try {
      await db.query(
        `INSERT INTO visited_countries (country_code) VALUES ('${countryCode}')`
      );
      //console.log(result.rows[0].country_code);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisitedCountries();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisitedCountries();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
