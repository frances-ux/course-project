const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    book_detail: (request, response) => {
        let id = request.params._id;
        const comic = data.find(book => book._id === String(id));
        response.render('pages/book', {
            comic: comic
        });
    },
    create_book: (request, response) => {
        console.log(request.body);
        const { _id = uuid(), image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
        data.push({ _id, image, title, author, publisher, genre, pages, rating, synopsis });
        if (title != "") {
            response.redirect("/admin-console");
        } else {
            response.redirect("admin-console/create-book");
        }
    },
    update_book: (request, response) => {
        const { _id } = request.params; 
        const { image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
        const comic = data.find(book => book._id === String(_id));
        comic.image = image;
        comic.title = title;
        comic.author = author; 
        comic.publisher = publisher;
        comic.genre = genre;
        comic.pages = pages;
        comic.rating = rating;
        comic.synopsis = synopsis;
        response.redirect("/admin-console/update-book");
    },
    delete_book: (request, response) => {
        const { _id } = request.params;
        const comic = data.find(book => book._id === String(_id));
        const index = data.indexOf(comic);
        data.splice(index, 1);
        response.redirect("/admin-console");
    }
}

