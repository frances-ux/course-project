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
    book_detail: async function (request, response) {
        const {_id} = request.params;
        await Comic.findOne({ _id: _id }).then(function (comic) {
            response.render('pages/book', {
                comic: comic
            })
        }).catch(function (error) {
            console.log(error)
        });

        // await Comic.findOne({ _id: _id }).then(function (comic) {
        //     response.render('pages/book', {

        //     })
        // })
    },
    // create_book: (request, response) => {
    //     console.log(request.body);
    //     const { _id = uuid(), image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
    //     data.push({ _id, image, title, author, publisher, genre, pages, rating, synopsis });
    //     response.redirect("/admin-console");
    // },
    create_book: (request, response) => {
        const { image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
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
    update_book: async function (request, response) {

        const { _id } = request.params;

        const { title, author, publisher, genre, number_of_pages, starRating, synopsis, image } = request.body;

        await Comic.findByIdAndUpdate({ _id: _id }, {
            $set: {
                title: title,
                author: author,
                publisher: publisher,
                genre: genre,
                number_of_pages: number_of_pages,
                starRating: starRating,
                synopsis: synopsis,
                image: image
            }
        }, { new: true }).then(function () {
            response.redirect("/admin-console")
        }).catch(function (error) {
            console.log(error)
        });
    },
    // delete_book: (request, response) => {
    //     const { _id } = request.params;
    //     const comic = data.find(book => book._id === String(_id));
    //     const index = data.indexOf(comic);
    //     data.splice(index, 1);
    //     response.redirect("/admin-console");
    // }
    delete_book: async function (request, response) {
    const { _id } = request.params;
        await Comic.deleteOne({ _id: _id }).then(function () {
            response.redirect("/admin-console")
        }).catch(function (error) {
            console.log(error)
        });
    }

}



