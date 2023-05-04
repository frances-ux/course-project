const express = require('express');
const booksController = require('../controllers/book-controller');
const router = express.Router();

// app.get('/books/:id', (request, response) => {
//     response.render('pages/book', {});        
// });

router.route('/books/:_id')
    .get(booksController.book_detail);

module.exports = router;