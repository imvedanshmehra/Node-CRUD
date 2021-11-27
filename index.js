const express = require("express");
require("dotenv").config();
const booksRouter = require("./routes/books.routes");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", booksRouter);

const PORT = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`All Good! Server is listening on port: ${PORT}`);
});
