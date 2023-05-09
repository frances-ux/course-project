const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin', {
            data: data
        });
    },
    create_book: (request, response) => {
        response.render('pages/create', {
            data: data
        });
    },
    update_book: (request, response) => {
        let id = request.params._id;
        const comic = data.find(book => book._id === String(id));
        console.log(comic);
        response.render('pages/update', {
            book: comic
        });
    }
}

