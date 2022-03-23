const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// const port = 3000;


// Retrieves ALL Posts
const postRoutes = require("./controllers/postRoute");
app.use("/", postRoutes);

// app.listen(port, () =>
//   console.log(`Express departing now from http://localhost:${port}`)
// );

module.exports = app;
