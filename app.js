const express = require('express');
const morgan = require('morgan'); 
const app = express();
const PORT = 3000;
app.use(morgan('combined'));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

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
