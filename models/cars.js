const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: String,
    model: Number,
    color: String,
    plate: Number,
});

const Car = mongoose.model('Car', catSchema);

module.exports = Car;