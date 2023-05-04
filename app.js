const express = require('express');
const morgan = require('morgan'); 
const path = require('path');
const routes = require('./routes/index-routes');
const app = express();
const methodOverride = require('method-override');
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use('/', routes);


//1. PATH: /, HANDLER: "This route points to the Home page"
// cut route and pasted in site-routes.js

//2. PATH: /about, HANDLER: "This route points to the About page"
// cut route and pasted in site-routes.js

//3. PATH: /login, HANDLER: "This route points to the Login page"
// cut route and pasted in site-routes.js

//4. PATH: /admin-console, HANDLER: "This route points to the Admin Console page"

//5. PATH: /admin-console/create-book, HANDLER: "This route points to the Create page"


//Create 2 GET routes with parameter with the following information:
//PATH: /books/:id, HANDLER: render a file call book that will show the books details page

//PATH: /admin-console/update-book/:id, HANDLER: render the update comic book form page


//use app.listen() to start the server and send a console.log to the terminal with the localhost URL
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
