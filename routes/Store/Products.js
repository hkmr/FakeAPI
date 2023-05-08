const express = require("express");
const fakerJS = require("@faker-js/faker");
const utility = require("../../helpers/utiliy");

const router = express.Router();
const faker = fakerJS.faker;

router.get("/list", (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page || 1;
    const total = req.query.total || 30;

    const products = Array.from({ length: limit }).map((val, i) => {
        return {
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(100, 500),
            description: faker.commerce.productDescription(),
            images: Array.from({
                length: utility.generateRandomDecimalBetween(2, 5),
            }).map((v) => faker.image.fashion()),
            rating: utility.generateRandomDecimalBetween(1, 4),
        };
    });

    const resObj = { total, page, limit, products };

    res.send(resObj);
});

module.exports = router;
