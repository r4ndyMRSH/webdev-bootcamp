// HINTS:
// 1. Import express and axios
// 2. Create an express app and set the port number.
// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

"use strict";

import express from "express";
import axios from "axios";
import morgan from "morgan";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  const result = await axios.get("https://secrets-api.appbrewery.com/random");
  res.render("index.ejs", {
    secret: result.data.secret,
    user: result.data.username,
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
