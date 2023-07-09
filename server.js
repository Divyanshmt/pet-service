const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/config/config");
const petRoutes = require("./src/routes/pet-routes");
const swagger = require("./docs/swagger");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use("/docs", swagger);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the pet routes
app.use("/pets", petRoutes);
app.use(cors());

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
