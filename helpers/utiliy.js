const generateRandomDecimalBetween = (min, max) => {
    return Number((Math.random() * (max - min + 1) + min).toFixed(2));
};

const generateRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
    generateRandomDecimalBetween,
    generateRandomNumberBetween,
};
