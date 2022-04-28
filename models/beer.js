const mongoose = require("mongoose")

const beerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of beer can not be blank"]
    },
    type: {
        type: String,
        required: [true, "beer type can not be blank"]
    },
    price: {
        type: Number,
        required: [true, "Price of the beer is required"],
        min: [1, "beer price Should be minimum of $1 "],
        max: [500000, "beer price Cannot be greater than $500000 "]

    }
})

module.exports = mongoose.model("beer",
    beerSchema)