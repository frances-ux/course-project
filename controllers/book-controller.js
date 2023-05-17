// const data = require('../data/data');
const Comic = require('../models/comic-model');
const { v4: uuid } = require('uuid');

module.exports = {
    // book_detail: (request, response) => {
    //     let id = request.params._id;
    //     const comic = data.find(book => book._id === String(id));
    //     response.render('pages/book', {
    //         comic: comic
    //     });
    // },
    book_detail: (request, response) => {
        const {_id} = request.params;
        Comic.findOne({ _id: _id }, (error, comic) => {
            if (error) {
                return error;
            } else {
                response.render('pages/book', {
                    comic: comic
                });
            }
        });
    },
    // create_book: (request, response) => {
    //     console.log(request.body);
    //     const { _id = uuid(), image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
    //     data.push({ _id, image, title, author, publisher, genre, pages, rating, synopsis });
    //     response.redirect("/admin-console");
    // },
    create_book: (request, response) => {
        const { _id = uuid(), image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
        const newComic = new Comic ({
            image: image,
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            pages: pages,
            rating: rating,
            synopsis: synopsis
        });

        newComic.save();

        response.redirect("/admin-console");
    },

    // update_book: (request, response) => {
    //     const { _id } = request.params;
    //     const { image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
    //     const comic = data.find(book => book._id === String(_id));
    //     comic.image = image;
    //     comic.title = title;
    //     comic.author = author;
    //     comic.publisher = publisher;
    //     comic.genre = genre;
    //     comic.pages = pages;
    //     comic.rating = rating;
    //     comic.synopsis = synopsis;
    //     response.redirect("/admin-console");
    // },
    update_book: (request, response) => {
    const {_id} = request.params;
    
    const { image, title, author, publisher, genre, pages, rating, synopsis } = request.body;

    Comic.findByIdAndUpdate(_id, {$set: {
        image: image,
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis
        }}, {new: true}, error => {
        if(error) {
            return error;
        } else {
            response.redirect("/admin-console");
        }
        })
    },
    // delete_book: (request, response) => {
    //     const { _id } = request.params;
    //     const comic = data.find(book => book._id === String(_id));
    //     const index = data.indexOf(comic);
    //     data.splice(index, 1);
    //     response.redirect("/admin-console");
    // }
    delete_book: (request, response) => {
        const { _id } = request.params;
        Comic.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                response.redirect("/admin-console");
            }
        });
    }
}


