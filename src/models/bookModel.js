const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema ({
    name: String,
    author_id: {
        type: String,
        required: true
    },
    price: Number,
    rating: Number
},{timestamsps: true });



module.exports = mongoose.model('Book', bookSchema)