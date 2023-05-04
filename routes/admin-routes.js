const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

// app.get('/admin-console', (request, response) => {
//     response.render('pages/admin', {});
//     console.log("This route points to the Admin Console page");
// });
router.route('/')
    .get(adminController.admin);

// app.get('/admin-console/create-book', (request, response) => {
//     response.render('pages/create', {});
//     console.log("This route points to the Create page");
// });
router.route('/create-book')
    .get(adminController.create_book);

// app.get('/admin-console/update-book/:id', (request, response) => {
//     response.render('pages/update', {});        
// });

router.route('/update-book/:_id')
    .get(adminController.update_book);

module.exports = router;