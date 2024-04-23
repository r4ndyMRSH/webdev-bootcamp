"use strict";

import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let msg;
let d = new Date().getDay();

if (d === 0 || d === 6) {
  msg = `Hey! It's a ${dayNames[d]}, it's time to have fun!`;
} else {
  msg = `Hey! It's a ${dayNames[d]}, it's time to work hard!`;
}

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.render(__dirname + '/views/index.ejs', {msg});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(msg);
});
