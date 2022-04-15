const mongoose = require("mongoose")

const beerSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number
})

module.exports = mongoose.model("beer",
    beerSchema)