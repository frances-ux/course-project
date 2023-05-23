require('dotenv').config();
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
    await mongoose.connect('mongodb+srv://francesmarquez94:aynFa23L1fu8CBoh@cluster1.s01nuoo.mongodb.net/codesquadComics?retryWrites=true&w=majority')
}
// need help refactoring the code above  

// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//   if(!err) {
//     console.log("Successful connection with MongoDB Server");  
//   }
//   else {
//       console.log("Error with MongoDB's connectivity");
//       console.log(err)
//   }
// });