// const data = require('../data/data');
const User = require('../models/user-model');
const Comic = require('../models/comic-model');
const passport = require('passport');

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
    },
    login_post: (request, response) => {
        const { username, password } = request.body;
        const user = new User({
            username: username,
            password: password
        });
        request.login(user, (error) => {
            if (error) {
                console.log(error);
                response.redirect('/login');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin-console');
                });
            }
        });
    },
    logout: (request, response) => {
        request.logout(function (err)
        {if (err) {return next(err);} 
            response.redirect('/');
        })
    },
    register_get: (request, response) => {
        response.render('pages/register', {
            data: data
        });
    },
    register_post: (request, response) => {
        User.register({ username: request.body.username }, request.body.password, (error, user) => {
            if (error) {
                console.log(error);
                // response.redirect('/register');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin-console');
                    // is this correct? in carols bookstore, we are redirected to the login page
                });
            }
        });
    },
    //Adding Google OAuth
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
    
    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (request, response) {
        // Successful authentication, redirect home.
            response.redirect('/admin-console');
        }
    ]
}