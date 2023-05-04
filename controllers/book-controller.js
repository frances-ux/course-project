const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    // all_books: (request, repsonse) => {
    //     response.render('pages/index', {
    //         inventoryArray: data
    //     });
    // },
    book_detail: (request, response) => {
        let id = request.params._id;
        const comic = data.find(book => book._id === String(id));
        response.render('pages/book', {
            comic: comic
        });
    }
}

