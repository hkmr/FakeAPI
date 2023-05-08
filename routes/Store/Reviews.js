const express = require("express");
const fakerJs = require("@faker-js/faker");
const utility = require("../../helpers/utiliy");

const faker = fakerJs.faker;
const router = express.Router();

router.get("/:productId", (req, res) => {
    const productId = req.params.productId;
    const count = utility.generateRandomNumberBetween(3, 10);
    const resObj = {
        productId,
        count,
        reviews: Array.from({
            length: count,
        }).map((v) => {
            return {
                userId: utility.generateRandomNumberBetween(0, 20),
                comment: faker.lorem.lines(),
            };
        }),
    };

    res.send(resObj);
});

module.exports = router;
