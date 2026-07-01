"use strict";

import express from "express";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
let bandName;

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + " " + req.body["pet"];

  next();
}

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
