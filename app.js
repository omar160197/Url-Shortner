// Import packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
// Initialize express app
const app = express();

// Database connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to smartShorterDB");
    //listening on port
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`listening to http://localhost:${port}/`);
    });
  })
  .catch((error) => console.log(error));

// Set up middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/shortLinks", require("./routes"));



