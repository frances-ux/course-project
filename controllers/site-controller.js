// const data = require('../data/data');
const Comic = require('../models/comic-model');

module.exports = {
    // index: (request, response) => {
    //     response.render('pages/index', {
    //         data: data
    //     });
    // }
    // pulling data for comics; when a new comic is added, it needs to populate on this page; method: Comic.find
    // looks for comics and if there is an error it will render an error, and if not it will render page 
    index: async function (request, response) {
        // need explanation on this code. Why the empty find()? 
        await Comic.find({}).then(function (comic) {
            response.render('pages/index', {
                data: comic
            })
        }).catch(function (error) {
            console.log(error)
        }); 
    },
    about: (request, response) => {
        response.render('pages/about', {
        });
    },
    login: (request, response) => {
        response.render('pages/login', {
            data: data 
        });
    }
}