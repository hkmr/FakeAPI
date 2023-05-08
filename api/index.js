const express = require("express");

const app = express();

const storeRoute = require("../routes/Store/Index");

app.use("/api/store", storeRoute);

app.get("/api", (req, res) => {
    res.send("Home Page");
});

app.listen(5000);
