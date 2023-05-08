const express = require("express");

const app = express();

const storeRoute = require("./routes/Store/Index");

app.use("/store", storeRoute);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(5000);
