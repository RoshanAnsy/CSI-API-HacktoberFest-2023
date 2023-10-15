const express = require("express");
const router = express.Router();
const {getAllProduct}=require("../controller/products")

router.get("/", getAllProduct);
module.exports = router;
