const mongoose = require('mongoose');
const { Schema } = mongoose;

const comicSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title name is required.'],
        minlength:[1,'Minimun length for the title name is 1 character.']
    },
    author: {
        type: String,
        required: [true, 'The author\'s name is required.'],
        minlength:[2,'Minimun length for the author\'s name is 2 characters.']
    },
    publisher: {
        type: String
    },
    genre: {
        type: String
    },
    pages: {
        type: Number
    },
    rating: {
        type: Number,
        required: [true, 'The star rating is required.'],
        min: [1, 'Minimun number of star rating is 1'],
        max: [5, 'Maximum number of star rating is 5']
    },
    synopsis: {
        type: String
    },
    image: {
        type: String

    }
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;