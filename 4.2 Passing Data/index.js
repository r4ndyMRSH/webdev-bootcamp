"use strict";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
let name = "";

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { data: name });
});

app.post("/submit", (req, res) => {
  name = req.body["fName"] + req.body["lName"];
  console.log(name.length);
  res.render("index.ejs", { data: name });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
