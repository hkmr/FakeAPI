const express = require("express");
const router = express.Router();

const productRoutes = require("./Products");
const reviewRoutes = require("./Reviews");

router.use("/product", productRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
