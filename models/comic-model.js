const mongoose = require('mongoose');
const { Schema } = mongoose;

const comicSchema = new Schema({
    title: {},
    author: {},
    publisher: {},
    genre: {},
    pages: {},
    rating: {},
    synopsis: {},
    image: {}
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;