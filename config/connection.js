const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/codesquadComics', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (!err) {
//         console.log("Successful connection with MongoDB Server");
//     }
//     else {
//         console.log("Error with MongoDB's connectivity");
//     }
// });

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/codesquadComics')
}