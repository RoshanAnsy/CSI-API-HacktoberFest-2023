const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const productsRouter = require("./routes/productRoutes")
const bodyParser = require("body-parser");

app.get("/", (req, res) => res.send("Hello World!"));
app.use(express.json());
app.use(bodyParser.json());
app.use("/products", productsRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
