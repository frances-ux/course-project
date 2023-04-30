const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

/* Inside of your app.js, you will need to identify which routes will load the homepage, about page, and login page. Once you have identified these 3 routes in your app.js, cut those routes and paste them into site-routes.js. */


// app.get('/', (request, response) => {
//     response.render('pages/index', {});
//     console.log("This route points to the Home page");
// });

router.route('/')
    .get(siteController.index);

// app.get('/about', (request, response) => {
//     response.render('pages/about', {});
//     console.log("This route points to the About page");
// });

router.route('/about')
    .get(siteController.about);

// app.get('/login', (request, response) => {
//     response.render('pages/login', {});
//     console.log("This route points to the Login page");
// });

router.route('/login')
    .get(siteController.login);

module.exports = router;