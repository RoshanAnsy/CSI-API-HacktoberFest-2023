const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./routes/products");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/products", productsRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
