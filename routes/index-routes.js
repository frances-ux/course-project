const express = require('express');
const adminRouter = require('./admin-routes');
const bookRouter = require('./book-routes');
const siteRouter = require('./site-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/books', bookRouter);
router.use('/admin-console', adminRouter);

module.exports = router;