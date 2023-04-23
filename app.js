const express = require('express');
const morgan = require('morgan'); 
const app = express();
const PORT = 3000;
app.use(morgan('combined'));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//1. PATH: /, HANDLER: "This route points to the Home page"
app.get('/', (request, response) => {
    response.render('pages/index');
    console.log("This route points to the Home page");
});

//2. PATH: /about, HANDLER: "This route points to the About page"
app.get('/about', (request, response) => {
    response.render('pages/about');
    console.log("This route points to the About page");
});

//3. PATH: /login, HANDLER: "This route points to the Login page"
app.get('/login', (request, response) => {
    response.render('pages/login');
    console.log("This route points to the Login page");
});

//4. PATH: /admin-console, HANDLER: "This route points to the Admin Console page"
app.get('/admin-console', (request, response) => {
    response.render('pages/admin')
    console.log("This route points to the Admin Console page");
});

//5. PATH: /admin-console/create-book, HANDLER: "This route points to the Create page"
app.get('/admin-console/create-book', (request, response) => {
    response.render('pages/create');
    console.log("This route points to the Create page");
});

//Create 2 GET routes with parameter with the following information:
//PATH: /books/:id, HANDLER: render a file call book that will show the books details page
app.get('/books/:_id', (request, response) => {
    response.render('pages/book', {
    });        
});
//PATH: /admin-console/update-book/:id, HANDLER: render the update comic book form page
app.get('/admin-console/update-book/:_id', (request, response) => {
    response.render('pages/update', {
    });        
});


//use app.listen() to start the server and send a console.log to the terminal with the localhost URL
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
