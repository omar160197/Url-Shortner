// Import packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

// Initialize express app
const app = express();

// Database connection
const db = process.env.mongoURI || "mongodb://localhost/shortner";
mongoose.connect(db, () => console.log("Connected to MongoDB"));

// Set up middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api", require("./routes"));


// Set up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
