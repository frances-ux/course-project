// const data = require('../data/data');
const Comic = require('../models/comic-model');
const { v4: uuid } = require('uuid');

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                data: data
            });
        }
    },
    // create_book: (request, response) => {
    //     response.render('pages/create', {
    //         data: data
    //     });
        
    // },
    // ability to create a new comic; title, author, publisher
    create_book: (request, response) => {
        if (request.isAuthenticated()) {
            const { image, title, author, publisher, genre, pages, rating, synopsis } = request.body;
            const newComic = new Comic({
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

            response.render('pages/create', {
                data: data
            });
            // unsure about lines 33-35
            }
        },
    // update_book: (request, response) => {
    //     let id = request.params._id;
    //     const comic = data.find(book => book._id === String(id));
    //     console.log(comic);
    //     response.render('pages/update', {
    //         book: comic
    //     });
    // }
    update_book: async function (request, response) {
        if (request.isAuthenticated()) {
            const { _id } = request.params;
            await Comic.findOne({ _id: _id }).then(function (comic) {
                response.render('pages/update', {
                    book: comic
                })
            }).catch(function (error) {
                console.log(error)
            });
        }
    }
}