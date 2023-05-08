const express = require('express');
const booksController = require('../controllers/book-controller');
const router = express.Router();

// app.get('/books/:id', (request, response) => {
//     response.render('pages/book', {});        
// });

router.route('/')
    .post(booksController.create_book)

router.route('/:_id')
    .get(booksController.book_detail)
    .put(booksController.update_book)
    .delete(booksController.delete_book)

module.exports = router;