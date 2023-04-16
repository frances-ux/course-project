const express = require('express');
const morgan = require('morgan'); 
const app = express();
const PORT = 3000;
app.use(morgan('combined'));


//1. PATH: /, HANDLER: "This route points to the Home page"
app.get('/', (request, response) => {
    response.send(`This route points to the Home page`);
});

//2. PATH: /about, HANDLER: "This route points to the About page"
app.get('/about', (request, response) => {
    response.send(`This route points to the About page`);
});

//3. PATH: /login, HANDLER: "This route points to the Login page"
app.get('/login', (request, response) => {
    response.send(`This route points to the Login page`);
});

//4. PATH: /admin-console, HANDLER: "This route points to the Admin Console page"
app.get('/admin', (request, response) => {
    response.send(`This route points to the Admin Console page`);
});

//5. PATH: /admin-console/create-book, HANDLER: "This route points to the Create page"
app.get('/create', (request, response) => {
    response.send(`This route points to the Create page`);
});

//use app.listen() to start the server and send a console.log to the terminal with the localhost URL
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
