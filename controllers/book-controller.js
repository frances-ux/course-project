const data = require('../data/data');


module.exports = {
    book_detail: (request, response) => {
        let id = request.params._id;
        const foundBook = data.find(book => book._id === String(id));
        response.render('pages/book', {
            foundBook: foundBook
        });
    }
}

